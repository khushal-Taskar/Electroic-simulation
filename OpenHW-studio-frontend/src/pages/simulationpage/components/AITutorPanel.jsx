import React from 'react';
import { Award, Bot, Bug, Cable, ChevronRight, Lightbulb, Loader2, Send, Sparkles, Workflow } from 'lucide-react';
import { requestElectronicsAi } from '../../../services/aiTutorService.js';
import {
  buildConnectionGuidance,
  buildDebugReport,
  buildExplainComponent,
  buildExplainCircuit,
  buildProgressiveHint,
  buildSignalFlow,
  calculateSkillScore,
  ELECTROSIM_CHALLENGES,
  getCircuitHealth,
  validateChallengeCompletion,
} from '../../../ai/circuitAnalysis.js';
import { combineValidationErrors } from '../../../ai/electronicsValidation.js';

const ACTIONS = [
  { id: 'explain-component', label: 'Part', icon: Bot },
  { id: 'explain-circuit', label: 'Explain', icon: Sparkles },
  { id: 'debug-circuit', label: 'Debug', icon: Bug },
  { id: 'connection-assistant', label: 'Connect', icon: Cable },
  { id: 'hint', label: 'Hint', icon: Lightbulb },
];

function localSelectedSummary(context) {
  const selected = context?.selectedComponent;
  if (!selected) return 'Select a component or wire for targeted help.';
  const pins = selected.metadata?.pins?.map((pin) => pin.id).filter(Boolean).join(', ');
  return `${selected.label || selected.type} selected${pins ? `; pins: ${pins}` : ''}.`;
}

export default function AITutorPanel({ context, onRunValidation, canvasOnly = false }) {
  const [open, setOpen] = React.useState(true);
  const [question, setQuestion] = React.useState('');
  const [activeChallengeId, setActiveChallengeId] = React.useState(ELECTROSIM_CHALLENGES[0]?.id || '');
  const [explanationMode, setExplanationMode] = React.useState('beginner');
  const [challengeResult, setChallengeResult] = React.useState(null);
  const [hintsUsed, setHintsUsed] = React.useState(0);
  const [showAdvanced, setShowAdvanced] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      role: 'assistant',
      content: 'I can inspect this circuit, explain selected parts, debug validation errors, and give progressive hints.',
      local: true,
    },
  ]);
  const [pendingAction, setPendingAction] = React.useState(null);
  const lastSelectedComponentRef = React.useRef(null);
  const lastSelectedWireRef = React.useRef(null);

  React.useEffect(() => {
    if (context?.selectedComponent) lastSelectedComponentRef.current = context.selectedComponent;
    if (context?.selectedWire) lastSelectedWireRef.current = context.selectedWire;
    if (!context?.components?.some((component) => component.id === lastSelectedComponentRef.current?.id)) {
      lastSelectedComponentRef.current = null;
    }
    if (!context?.connections?.some((connection) => connection.id === lastSelectedWireRef.current?.id)) {
      lastSelectedWireRef.current = null;
    }
  }, [context?.selectedComponent, context?.selectedWire, context?.components, context?.connections]);

  const effectiveContext = React.useMemo(
    () => ({
      ...(context || {}),
      selectedComponent: context?.selectedComponent || lastSelectedComponentRef.current,
      selectedWire: context?.selectedWire || lastSelectedWireRef.current,
    }),
    [context],
  );

  const circuitHealth = React.useMemo(() => getCircuitHealth(effectiveContext), [effectiveContext]);
  const health = `${circuitHealth.summary} Â· ${circuitHealth.score}%`;
  const activeChallenge = ELECTROSIM_CHALLENGES.find((challenge) => challenge.id === activeChallengeId) || ELECTROSIM_CHALLENGES[0];
  const combinedValidationErrors = React.useMemo(() => combineValidationErrors(effectiveContext), [effectiveContext]);
  const analysisContext = React.useMemo(
    () => ({
      ...(effectiveContext || {}),
      currentChallenge: activeChallenge || context?.currentChallenge || null,
      expectedCircuitBehavior: activeChallenge?.expectedBehavior || context?.expectedCircuitBehavior || null,
      validationErrors: combinedValidationErrors,
    }),
    [activeChallenge, combinedValidationErrors, context?.currentChallenge, context?.expectedCircuitBehavior, effectiveContext],
  );
  const skillScore = React.useMemo(
    () => calculateSkillScore({ context: effectiveContext, challengeResult, hintsUsed }),
    [effectiveContext, challengeResult, hintsUsed],
  );
  const signalFlow = React.useMemo(() => buildSignalFlow(effectiveContext), [effectiveContext]);

  const buildLocalMessage = React.useCallback((action, userText = '') => {
    if (action === 'explain-circuit') {
      return buildExplainCircuit(analysisContext, explanationMode);
    }
    if (action === 'explain-component') {
      return buildExplainComponent(analysisContext);
    }
    if (action === 'debug-circuit') {
      return buildDebugReport(analysisContext).map((finding, index) => [
        `Problem ${index + 1}: ${finding.problem}`,
        `Evidence: ${finding.evidence}`,
        `Likely cause: ${finding.likelyCause}`,
        `Suggested fix: ${finding.suggestedFix}`,
        `Confidence: ${Math.round((finding.confidence || 0) * 100)}%`,
        finding.hint ? `Optional hint: ${finding.hint}` : '',
      ].filter(Boolean).join('\n')).join('\n\n');
    }
    if (action === 'connection-assistant') {
      const guidance = buildConnectionGuidance(analysisContext);
      return [
        guidance.title,
        guidance.powerRequirements ? `Power: ${guidance.powerRequirements}` : '',
        guidance.warnings?.length ? `Warnings:\n${guidance.warnings.map((warning) => `- ${warning}`).join('\n')}` : '',
        `Steps:\n${guidance.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}`,
      ].filter(Boolean).join('\n\n');
    }
    if (action === 'hint') {
      const nextLevel = Math.min(3, hintsUsed + 1);
      return `Hint ${nextLevel}: ${buildProgressiveHint(analysisContext, activeChallenge, nextLevel)}`;
    }
    if (action === 'answer-question') {
      const selected = analysisContext?.selectedComponent;
      const issues = analysisContext?.validationErrors || [];
      return [
        selected ? `Context I see: ${selected.label || selected.type} (${selected.id}) is selected.` : 'Context I see: no component is selected.',
        issues.length ? `Current validation issue: ${issues[0].message || issues[0].type}` : 'Current validation: no rule-based issue is visible.',
        userText ? `I will ask the backend AI for a fuller answer to: "${userText}"` : '',
      ].filter(Boolean).join('\n');
    }
    return 'Local circuit analysis is ready.';
  }, [activeChallenge, analysisContext, explanationMode, hintsUsed]);

  const runAction = React.useCallback(async (action, overrideQuestion = '') => {
    if (typeof onRunValidation === 'function') onRunValidation();
    setPendingAction(action);
    const userText = overrideQuestion || question;
    if (userText) {
      setMessages((prev) => [...prev, { role: 'user', content: userText }]);
      setQuestion('');
    }

    if (action === 'hint') {
      setHintsUsed((prev) => Math.min(3, prev + 1));
    }

    const localMessage = buildLocalMessage(action, userText);
    setMessages((prev) => [...prev, {
      role: 'assistant',
      content: localMessage,
      meta: 'Local circuit analysis',
      local: true,
    }]);

    try {
      const result = await requestElectronicsAi(action, {
        context: analysisContext,
        question: userText,
        options: {
          explanationMode,
          hintLevel: action === 'hint' ? Math.min(3, hintsUsed + 1) : undefined,
          challengeId: activeChallenge?.id,
        },
      });
      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: result.answer || result.message || 'No AI response was returned.',
        meta: result.provider ? `Provider: ${result.provider}` : '',
      }]);
    } catch (err) {
      const message = err?.response?.data?.message || err?.response?.data?.error || err?.message || 'AI request failed.';
      setMessages((prev) => [...prev, {
        role: 'assistant',
        content: `Backend AI enhancement is unavailable: ${message}`,
        local: true,
      }]);
    } finally {
      setPendingAction(null);
    }
  }, [activeChallenge, analysisContext, buildLocalMessage, combinedValidationErrors, explanationMode, hintsUsed, onRunValidation, question]);

  const validateActiveChallenge = React.useCallback(() => {
    if (typeof onRunValidation === 'function') onRunValidation();
    const result = validateChallengeCompletion(activeChallenge?.id, analysisContext);
    setChallengeResult(result);
    setMessages((prev) => [...prev, {
      role: 'assistant',
      content: result.complete
        ? `${activeChallenge.title} complete. Nice: the actual circuit topology and code satisfy the challenge checks.`
        : `${activeChallenge.title} is not complete yet.\n${result.failures.map((failure) => `- ${failure}`).join('\n')}`,
      meta: 'Challenge validation',
      local: true,
    }]);
  }, [activeChallenge, analysisContext, onRunValidation]);

  if (canvasOnly) return null;

  return (
    <section
      aria-label="AI electronics tutor"
      style={{
        position: 'absolute',
        top: 16,
        right: open ? 16 : 12,
        zIndex: 95,
        width: open ? 'min(390px, calc(100vw - 112px))' : 44,
        maxHeight: 'calc(100% - 92px)',
        pointerEvents: 'auto',
        transition: 'width 180ms ease, right 180ms ease',
      }}
    >
      {!open ? (
        <button
          type="button"
          title="Open AI tutor"
          onClick={() => setOpen(true)}
          style={{
            width: 44,
            height: 44,
            display: 'grid',
            placeItems: 'center',
            border: '1px solid var(--border)',
            borderRadius: 8,
            background: 'var(--card)',
            color: 'var(--text)',
            boxShadow: '0 10px 28px rgba(0,0,0,0.22)',
            cursor: 'pointer',
          }}
        >
          <Bot size={20} />
        </button>
      ) : (
        <div
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            boxShadow: '0 18px 42px rgba(0,0,0,0.24)',
            overflow: 'hidden',
          }}
        >
          <header style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderBottom: '1px solid var(--border)' }}>
            <Bot size={18} color="var(--accent)" />
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>ElectroSim AI Tutor</div>
              <div style={{ fontSize: 11, color: 'var(--text3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{health}</div>
            </div>
            <button type="button" title="Collapse AI tutor" onClick={() => setOpen(false)} style={{ border: 'none', background: 'transparent', color: 'var(--text2)', cursor: 'pointer', padding: 4 }}>
              <ChevronRight size={18} />
            </button>
          </header>

          <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border)', display: 'grid', gap: 8 }}>
            <div style={{ fontSize: 12, color: 'var(--text2)' }}>{localSelectedSummary(effectiveContext)}</div>
            <select
              value={explanationMode}
              onChange={(event) => setExplanationMode(event.target.value)}
              title="Explanation depth"
              style={{
                border: '1px solid var(--border)',
                borderRadius: 6,
                background: 'var(--bg)',
                color: 'var(--text)',
                padding: '6px 8px',
                fontSize: 11,
              }}
            >
              <option value="beginner">Beginner explanations</option>
              <option value="advanced">Advanced explanations</option>
            </select>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 6 }}>
              {ACTIONS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  title={label}
                  disabled={Boolean(pendingAction)}
                  onClick={() => runAction(id)}
                  style={{
                    minHeight: 34,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                    border: '1px solid var(--border)',
                    borderRadius: 6,
                    background: pendingAction === id ? 'var(--bg3)' : 'var(--bg2)',
                    color: 'var(--text)',
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: pendingAction ? 'wait' : 'pointer',
                  }}
                >
                  {pendingAction === id ? <Loader2 size={14} className="animate-spin" /> : <Icon size={14} />}
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border)', display: 'grid', gap: 8 }}>
            <div
              aria-label="Circuit health"
              style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr',
                alignItems: 'center',
                gap: 8,
                fontSize: 11,
                color: 'var(--text2)',
              }}
            >
              <span>{circuitHealth.status === 'healthy' ? '\u2705 Healthy' : circuitHealth.status === 'blocked' ? '\ud83d\uded1 Blocked' : '\u26a0\ufe0f Review'}</span>
              <div style={{ height: 6, borderRadius: 999, background: 'var(--bg3)', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${circuitHealth.score}%`,
                    height: '100%',
                    borderRadius: 999,
                    background: circuitHealth.status === 'blocked' ? 'var(--red)' : circuitHealth.status === 'needs-review' ? 'var(--orange)' : 'var(--green)',
                    transition: 'width 300ms ease',
                  }}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowAdvanced((prev) => !prev)}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 6,
                background: 'var(--bg2)',
                color: 'var(--text3)',
                padding: '5px 8px',
                fontSize: 10,
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              {showAdvanced ? '\u25be Hide' : '\u25b8 Show'} Challenges & Scoring
            </button>
            {showAdvanced && (
              <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, alignItems: 'center' }}>
              <select
                value={activeChallengeId}
                onChange={(event) => {
                  setActiveChallengeId(event.target.value);
                  setChallengeResult(null);
                  setHintsUsed(0);
                }}
                title="Challenge mode"
                style={{
                  minWidth: 0,
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  background: 'var(--bg)',
                  color: 'var(--text)',
                  padding: '7px 8px',
                  fontSize: 12,
                }}
              >
                {ELECTROSIM_CHALLENGES.map((challenge) => (
                  <option key={challenge.id} value={challenge.id}>{challenge.title}</option>
                ))}
              </select>
              <button
                type="button"
                title="Validate challenge"
                onClick={validateActiveChallenge}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  background: 'var(--bg2)',
                  color: 'var(--text)',
                  padding: '7px 8px',
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <Award size={14} />
                Check
              </button>
            </div>
            <div style={{ fontSize: 11, color: 'var(--text3)', lineHeight: 1.35 }}>
              {activeChallenge?.objective}
            </div>

            {signalFlow.paths[0] && (
              <div
                title="Derived signal flow"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  minWidth: 0,
                  color: 'var(--text3)',
                  fontSize: 10,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <Workflow size={12} />
                <span style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {signalFlow.paths[0].labels.join(' -> ')}
                </span>
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 8 }}>
              <div style={{ fontSize: 11, color: 'var(--text2)' }}>
                Skill Score: <strong style={{ color: 'var(--text)' }}>{skillScore.score}</strong> Â· {skillScore.label}
              </div>
              <button
                type="button"
                title="Show signal flow"
                onClick={() => {
                  const flowText = signalFlow.paths.length
                    ? signalFlow.paths.map((path) => `${path.labels.join(' -> ')} (${path.roles.join(' -> ')})`).join('\n')
                    : 'No signal flow path can be derived yet from the current wiring.';
                  setMessages((prev) => [...prev, {
                    role: 'assistant',
                    content: `Visual signal flow:\n${flowText}`,
                    meta: 'Derived from circuit connections',
                    local: true,
                  }]);
                }}
                style={{
                  width: 30,
                  height: 28,
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  background: 'var(--bg2)',
                  color: 'var(--text)',
                  cursor: 'pointer',
                }}
              >
                <Workflow size={14} />
              </button>
            </div>
              </>
            )}
          </div>

          <div style={{ padding: 12, maxHeight: 'min(48vh, 460px)', overflowY: 'auto', display: 'grid', gap: 10 }}>
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                style={{
                  justifySelf: message.role === 'user' ? 'end' : 'start',
                  maxWidth: '100%',
                  background: message.role === 'user' ? 'var(--accent)' : 'var(--bg2)',
                  color: message.role === 'user' ? '#04111f' : 'var(--text)',
                  border: message.local ? '1px solid var(--border)' : '1px solid transparent',
                  borderRadius: 8,
                  padding: '8px 10px',
                  fontSize: 12,
                  lineHeight: 1.45,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {message.content}
                {message.meta && <div style={{ marginTop: 6, color: 'var(--text3)', fontSize: 10 }}>{message.meta}</div>}
              </div>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (!question.trim() || pendingAction) return;
              runAction('answer-question', question.trim());
            }}
            style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid var(--border)' }}
          >
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about this circuit"
              style={{
                minWidth: 0,
                flex: 1,
                border: '1px solid var(--border)',
                borderRadius: 6,
                background: 'var(--bg)',
                color: 'var(--text)',
                padding: '8px 9px',
                fontSize: 12,
              }}
            />
            <button
              type="submit"
              title="Ask tutor"
              disabled={pendingAction || !question.trim()}
              style={{
                width: 36,
                height: 36,
                display: 'grid',
                placeItems: 'center',
                border: '1px solid var(--border)',
                borderRadius: 6,
                background: 'var(--accent)',
                color: '#04111f',
                cursor: pendingAction ? 'wait' : 'pointer',
                opacity: pendingAction || !question.trim() ? 0.65 : 1,
              }}
            >
              {pendingAction === 'answer-question' ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

