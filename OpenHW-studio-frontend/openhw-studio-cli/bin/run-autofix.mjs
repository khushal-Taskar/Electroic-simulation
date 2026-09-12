#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const help = args.includes('--help') || args.includes('-h');
const jsonOnly = args.includes('--json');
const verbose = args.includes('--verbose');
const projectFile = args.find((arg) => !arg.startsWith('-'));

function printHelp() {
  console.log(`OpenHW Studio Autofix CLI

Usage:
  run-autofix.mjs <project.json> [--json] [--verbose]

Exit codes:
  0  Completed successfully
  2  Project file missing or invalid

The CLI validates and loads an OpenHW project payload. It never invents a fix;
when no autofix strategy is available it returns a structured no-op result.`);
}

function writeResult(result) {
  if (jsonOnly) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }
  if (verbose) {
    console.log(`[OpenHW Autofix] ${result.reason || 'Completed.'}`);
  }
  console.log(JSON.stringify(result, null, 2));
}

if (help) {
  printHelp();
  process.exit(0);
}

if (!projectFile) {
  console.error('Project file not found: no project path supplied.');
  process.exit(2);
}

const resolvedProjectFile = path.resolve(projectFile);
if (!fs.existsSync(resolvedProjectFile)) {
  console.error(`Project file not found: ${resolvedProjectFile}`);
  process.exit(2);
}

let project;
try {
  project = JSON.parse(fs.readFileSync(resolvedProjectFile, 'utf8'));
} catch (err) {
  console.error(`Project file is not valid JSON: ${err.message}`);
  process.exit(2);
}

if (!project || typeof project !== 'object') {
  console.error('Project file must contain a JSON object.');
  process.exit(2);
}

const components = Array.isArray(project.components) ? project.components : [];
const connections = Array.isArray(project.connections) ? project.connections : [];

writeResult({
  applied: false,
  reason: 'No CLI autofix strategy was selected. Project was loaded and left unchanged.',
  components,
  connections,
});
