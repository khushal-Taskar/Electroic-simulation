# 🔬 OpenHW Autograding CI Diagnostic Report

*Generated: 11/9/2026, 4:32:27 pm*

---

## Summary

| Metric | Value |
|---|---|
| Total components tested | 2 |
| Components with issues | 2 |
| Failure ratio | 100% |
| Failure tier | **GLOBAL** |
| Files changed in this PR | 688 |

> [!CAUTION]
> **GLOBAL ENGINE FAILURE** — Over 75% of components are failing. This is almost certainly a regression in the core simulation engine, not individual components. Suspect files: `grading-engine.worker.ts`, `simulation.worker.ts`, `execute.ts`.

## 📋 Files Changed in This PR

- `OpenHW-studio-frontend\.env.example`
- `OpenHW-studio-frontend\.github\CODEOWNERS`
- `OpenHW-studio-frontend\.github\workflows\deploy.yml`
- `OpenHW-studio-frontend\.github\workflows\frontend-tests.yml`
- `OpenHW-studio-frontend\.github\workflows\page-validation.yml`
- `OpenHW-studio-frontend\.github\workflows\pr-checks.yml`
- `OpenHW-studio-frontend\.github\workflows\rollback.yml`
- `OpenHW-studio-frontend\.gitignore`
- `OpenHW-studio-frontend\Dockerfile`
- `OpenHW-studio-frontend\OpenHW-studio-frontend\package-lock.json`
- `OpenHW-studio-frontend\OpenHW-studio-frontend\package.json`
- `OpenHW-studio-frontend\OpenHW-studio-frontend\stdout.js`
- `OpenHW-studio-frontend\README.md`
- `OpenHW-studio-frontend\analyze_drift.py`
- `OpenHW-studio-frontend\autofix_patch.cjs`
- `OpenHW-studio-frontend\boot-test-50m.cjs`
- `OpenHW-studio-frontend\brute-force-strap.cjs`
- `OpenHW-studio-frontend\brute-force-strap.js`
- `OpenHW-studio-frontend\build_error.txt`
- `OpenHW-studio-frontend\build_output.txt`
- `OpenHW-studio-frontend\change_log.md`
- `OpenHW-studio-frontend\check-partitions.cjs`
- `OpenHW-studio-frontend\debug_chunks.txt`
- `OpenHW-studio-frontend\debug_crash.mjs`
- `OpenHW-studio-frontend\docs\protocol-api.md`
- `OpenHW-studio-frontend\docs\protocol-handlers.md`
- `OpenHW-studio-frontend\fix_constants.js`
- `OpenHW-studio-frontend\head_execute.ts`
- `OpenHW-studio-frontend\index.html`
- `OpenHW-studio-frontend\nginx.conf`
- `OpenHW-studio-frontend\old_runner.ts`
- `OpenHW-studio-frontend\package-lock.json`
- `OpenHW-studio-frontend\package.json`
- `OpenHW-studio-frontend\patch.cjs`
- `OpenHW-studio-frontend\playwright-report\index.html`
- `OpenHW-studio-frontend\playwright.config.js`
- `OpenHW-studio-frontend\postcss.config.js`
- `OpenHW-studio-frontend\public\SampleClassroomImages\.gitkeep`
- `OpenHW-studio-frontend\public\SampleClassroomImages\computer-architecture.jpg`
- `OpenHW-studio-frontend\public\SampleClassroomImages\default.jpg`
- `OpenHW-studio-frontend\public\SampleClassroomImages\digital-logic.jpg`
- `OpenHW-studio-frontend\public\SampleClassroomImages\embedded-systems.jpg`
- `OpenHW-studio-frontend\public\SampleClassroomImages\iot-robotics.jpg`
- `OpenHW-studio-frontend\public\_redirects`
- `OpenHW-studio-frontend\public\about_hero.png`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774294514554-whatsapp-image-2026-03-23-at-5-26-18-pm-1.jpeg`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774294514571-whatsapp-image-2026-03-23-at-5-26-18-pm.jpeg`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774294514580-whatsapp-image-2026-03-23-at-5-20-22-pm.jpeg`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774294514591-short-intro-vivek-rusia.pdf`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774320260505-whatsapp-image-2026-03-23-at-5-26-18-pm-1.jpeg`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774325492391-1774112947573-2-2.png`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774352960159-1774112947573-2-2.png`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774363859928-1774112947573-2-2.png`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774364004660-img-20250220-wa0012-jpg.jpeg`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774364850807-whatsapp-image-2026-03-07-at-4-51-08-pm.jpeg`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774364880441-chatgpt-image-mar-7-2026-11_01_59-pm.png`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774364983600-whatsapp-image-2026-03-24-at-1-31-49-pm.jpeg`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774364983613-gemini_generated_image_tpo71itpo71itpo7-1.png`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774364983695-gemini_generated_image_tpo71itpo71itpo7.png`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1774365063081-whatsapp-image-2026-03-24-at-1-31-49-pm.jpeg`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1775572972265-screenshot-2026-04-07-193957.png`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1775572978602-screenshot-11.png`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1777453898283-sagar-seth-graduate-trainee-software-engineering-technical-analyst-interview-report-04_29_2026.pdf`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1777453960776-sagar-seth-graduate-trainee-software-engineering-technical-analyst-interview-report-04_29_2026.pdf`
- `OpenHW-studio-frontend\public\assets\classroom\misc\shared\1777453960819-resume-sagar-5.pdf`
- `OpenHW-studio-frontend\public\assets\esp32\esp32-v3-rom.bin`
- `OpenHW-studio-frontend\public\autofix.wasm`
- `OpenHW-studio-frontend\public\autofix_rust.wasm`
- `OpenHW-studio-frontend\public\boards\esp32-cam.svg`
- `OpenHW-studio-frontend\public\components_examples\16_Channel_Mux_HP4067.png`
- `OpenHW-studio-frontend\public\components_examples\2.9_e_paper_Display_beta.png`
- `OpenHW-studio-frontend\public\components_examples\5W_Audio_Speaker.png`
- `OpenHW-studio-frontend\public\components_examples\6mm_Push_button.png`
- `OpenHW-studio-frontend\public\components_examples\7-Segment_Display.png`
- `OpenHW-studio-frontend\public\components_examples\74HC165_Input_Shift_Register_PISO.png`
- `OpenHW-studio-frontend\public\components_examples\74HC595_Shift_Register.png`
- `OpenHW-studio-frontend\public\components_examples\8_ch_logic_Analyzer.png`
- `OpenHW-studio-frontend\public\components_examples\A4988_Stepper_Driver.png`
- `OpenHW-studio-frontend\public\components_examples\ADXL345_Accelerometer.png`
- `OpenHW-studio-frontend\public\components_examples\AND_Gate.png`
- `OpenHW-studio-frontend\public\components_examples\Analog_JoyStick.png`
- `OpenHW-studio-frontend\public\components_examples\Arduino_Sensor_Shield_v5.0.png`
- `OpenHW-studio-frontend\public\components_examples\Atiny85.png`
- `OpenHW-studio-frontend\public\components_examples\BMP180_Pressure_Sensor_Breakout.png`
- `OpenHW-studio-frontend\public\components_examples\Biaxial_Stepper_Motor.png`
- `OpenHW-studio-frontend\public\components_examples\BreadBoard_Mini.png`
- `OpenHW-studio-frontend\public\components_examples\BreadBoard_full.png`
- `OpenHW-studio-frontend\public\components_examples\Breadboard_Half.png`
- `OpenHW-studio-frontend\public\components_examples\Buffer_Gate.png`
- `OpenHW-studio-frontend\public\components_examples\Buzzer.png`
- `OpenHW-studio-frontend\public\components_examples\CC1101.png`
- `OpenHW-studio-frontend\public\components_examples\Clock.png`
- `OpenHW-studio-frontend\public\components_examples\DC_Motor.png`
- `OpenHW-studio-frontend\public\components_examples\DHT22.png`
- `OpenHW-studio-frontend\public\components_examples\DS1307_RTC_Module.png`
- `OpenHW-studio-frontend\public\components_examples\DS18B20_Temperature_Module.png`
- `OpenHW-studio-frontend\public\components_examples\D_Flip_Flop.png`
- `OpenHW-studio-frontend\public\components_examples\D_Flip_Flop_reset.png`
- `OpenHW-studio-frontend\public\components_examples\D_Flip_Flop_set_Reset.png`
- `OpenHW-studio-frontend\public\components_examples\Diode.png`
- `OpenHW-studio-frontend\public\components_examples\ESP32.png`
- `OpenHW-studio-frontend\public\components_examples\ESP32_CAM.png`
- `OpenHW-studio-frontend\public\components_examples\HX711_Load_Cell_50kg.png`
- `OpenHW-studio-frontend\public\components_examples\HX711_Load_Cell_5kg.png`
- `OpenHW-studio-frontend\public\components_examples\I2S_MEMS_Microphone_(INMP441).png`
- `OpenHW-studio-frontend\public\components_examples\I2S_Mems_MicroPhone_SPH0645.png`
- `OpenHW-studio-frontend\public\components_examples\ILI9341_2.8_TFT_LCD.png`
- `OpenHW-studio-frontend\public\components_examples\ILI9341_2.8_Touch_Screen_LCD.png`
- `OpenHW-studio-frontend\public\components_examples\IR_Receiver.png`
- `OpenHW-studio-frontend\public\components_examples\IR_Remote.png`
- `OpenHW-studio-frontend\public\components_examples\KS2E-M-DC5.png`
- `OpenHW-studio-frontend\public\components_examples\L298N_Motor_Driver.png`
- `OpenHW-studio-frontend\public\components_examples\LCD_16x2_I2C.png`
- `OpenHW-studio-frontend\public\components_examples\LCD_16x2_Parallel.png`
- `OpenHW-studio-frontend\public\components_examples\LDR_Sensor_Module.png`
- `OpenHW-studio-frontend\public\components_examples\LED.png`
- `OpenHW-studio-frontend\public\components_examples\Li_ion_Battery.png`
- `OpenHW-studio-frontend\public\components_examples\Li_ion_Charger.png`
- `OpenHW-studio-frontend\public\components_examples\Linear_Potentiometer.png`
- `OpenHW-studio-frontend\public\components_examples\Logic_IC.png`
- `OpenHW-studio-frontend\public\components_examples\MAX30102_Heart_Rate.png`
- `OpenHW-studio-frontend\public\components_examples\MAX7219_Dot_Matrix.png`
- `OpenHW-studio-frontend\public\components_examples\MAX98357_I2S_Amp.png`
- `OpenHW-studio-frontend\public\components_examples\MEGA.png`
- `OpenHW-studio-frontend\public\components_examples\MFRC5522_RFID_Reader.png`
- `OpenHW-studio-frontend\public\components_examples\MPU6050_IMU_Sensor.png`
- `OpenHW-studio-frontend\public\components_examples\MQ2_Gas_Sensor.png`
- `OpenHW-studio-frontend\public\components_examples\Membrane_Keypad.png`
- `OpenHW-studio-frontend\public\components_examples\MicroSD_Card.png`
- `OpenHW-studio-frontend\public\components_examples\Motor_Driver_L293D.png`
- `OpenHW-studio-frontend\public\components_examples\NAND_Gate.png`
- `OpenHW-studio-frontend\public\components_examples\NOR_Gate.png`
- `OpenHW-studio-frontend\public\components_examples\NPN_Transistor.png`
- `OpenHW-studio-frontend\public\components_examples\NTC_Thermistor_Module.png`
- `OpenHW-studio-frontend\public\components_examples\Nano.png`
- `OpenHW-studio-frontend\public\components_examples\NeoPixel_Ring.png`
- `OpenHW-studio-frontend\public\components_examples\Nokia_5510_Screen.png`
- `OpenHW-studio-frontend\public\components_examples\OR_Gate.png`
- `OpenHW-studio-frontend\public\components_examples\PCM5102_I2S_DAC.png`
- `OpenHW-studio-frontend\public\components_examples\PI Pico w.png`
- `OpenHW-studio-frontend\public\components_examples\PI Pico.png`
- `OpenHW-studio-frontend\public\components_examples\PIR_Motion_Sensor.png`
- `OpenHW-studio-frontend\public\components_examples\Photodiode.png`
- `OpenHW-studio-frontend\public\components_examples\Phtoresistor_LDR.png`
- `OpenHW-studio-frontend\public\components_examples\Power_Supply.png`
- `OpenHW-studio-frontend\public\components_examples\Push_button.png`
- `OpenHW-studio-frontend\public\components_examples\RBG_LED_4pin.png`
- `OpenHW-studio-frontend\public\components_examples\Raindrop_Module.png`
- `OpenHW-studio-frontend\public\components_examples\Raindrop_Pad.png`
- `OpenHW-studio-frontend\public\components_examples\Relay_Module.png`
- `OpenHW-studio-frontend\public\components_examples\Resistor.png`
- `OpenHW-studio-frontend\public\components_examples\Rotary_Encoder.png`
- `OpenHW-studio-frontend\public\components_examples\Rotary_Potentiometer.png`
- `OpenHW-studio-frontend\public\components_examples\SPI_LED_Driver_NLSE595.png`
- `OpenHW-studio-frontend\public\components_examples\SSD1306_Oled_128x64.png`
- `OpenHW-studio-frontend\public\components_examples\STM32 Blue Pill.png`
- `OpenHW-studio-frontend\public\components_examples\STM32 Frontend.png`
- `OpenHW-studio-frontend\public\components_examples\Servo_Motor.png`
- `OpenHW-studio-frontend\public\components_examples\Servo_Pi_hat.png`
- `OpenHW-studio-frontend\public\components_examples\Seven_Segment_Display_TM1637.png`
- `OpenHW-studio-frontend\public\components_examples\Simulation Monitor.png`
- `OpenHW-studio-frontend\public\components_examples\Slide_Switch.png`
- `OpenHW-studio-frontend\public\components_examples\Soil_Moisture.png`
- `OpenHW-studio-frontend\public\components_examples\Stepper_Motor_Bipolar.png`
- `OpenHW-studio-frontend\public\components_examples\Temperature_Sensor_NTC.png`
- `OpenHW-studio-frontend\public\components_examples\UNO.png`
- `OpenHW-studio-frontend\public\components_examples\Ultrasonic_Sensor.png`
- `OpenHW-studio-frontend\public\components_examples\WS2812B_RGB_LED.png`
- `OpenHW-studio-frontend\public\components_examples\Wifi_Access_Point.png`
- `OpenHW-studio-frontend\public\components_examples\XNOR_Gate.png`
- `OpenHW-studio-frontend\public\components_examples\XOR_Gate.png`
- `OpenHW-studio-frontend\public\components_examples\nRF24L01+.png`
- `OpenHW-studio-frontend\public\gamification_images\adventure_map_bg.png`
- `OpenHW-studio-frontend\public\gamification_images\island_ble.png`
- `OpenHW-studio-frontend\public\gamification_images\island_button.png`
- `OpenHW-studio-frontend\public\gamification_images\island_buzzer.png`
- `OpenHW-studio-frontend\public\gamification_images\island_camera.png`
- `OpenHW-studio-frontend\public\gamification_images\island_cloud.png`
- `OpenHW-studio-frontend\public\gamification_images\island_dc_motor.png`
- `OpenHW-studio-frontend\public\gamification_images\island_deep_sleep.png`
- `OpenHW-studio-frontend\public\gamification_images\island_dht11.png`
- `OpenHW-studio-frontend\public\gamification_images\island_esp32.png`
- `OpenHW-studio-frontend\public\gamification_images\island_keypad.png`
- `OpenHW-studio-frontend\public\gamification_images\island_lcd.png`
- `OpenHW-studio-frontend\public\gamification_images\island_ldr.png`
- `OpenHW-studio-frontend\public\gamification_images\island_led.png`
- `OpenHW-studio-frontend\public\gamification_images\island_led_strip.png`
- `OpenHW-studio-frontend\public\gamification_images\island_mpu6050.png`
- `OpenHW-studio-frontend\public\gamification_images\island_mqtt.png`
- `OpenHW-studio-frontend\public\gamification_images\island_oled.png`
- `OpenHW-studio-frontend\public\gamification_images\island_potentiometer.png`
- `OpenHW-studio-frontend\public\gamification_images\island_relay.png`
- `OpenHW-studio-frontend\public\gamification_images\island_rgb.png`
- `OpenHW-studio-frontend\public\gamification_images\island_servo.png`
- `OpenHW-studio-frontend\public\gamification_images\island_seven_segment.png`
- `OpenHW-studio-frontend\public\gamification_images\island_stepper.png`
- `OpenHW-studio-frontend\public\gamification_images\island_temperature.png`
- `OpenHW-studio-frontend\public\gamification_images\island_ultrasonic.png`
- `OpenHW-studio-frontend\public\gamification_images\island_wifi.png`
- `OpenHW-studio-frontend\public\logo-Photoroom.png`
- `OpenHW-studio-frontend\public\logo-cropped.png`
- `OpenHW-studio-frontend\public\maintenance.html`
- `OpenHW-studio-frontend\public\models\Xenova\all-MiniLM-L6-v2\config.json`
- `OpenHW-studio-frontend\public\models\Xenova\all-MiniLM-L6-v2\onnx\model_quantized.onnx`
- `OpenHW-studio-frontend\public\models\Xenova\all-MiniLM-L6-v2\special_tokens_map.json`
- `OpenHW-studio-frontend\public\models\Xenova\all-MiniLM-L6-v2\tokenizer.json`
- `OpenHW-studio-frontend\public\models\Xenova\all-MiniLM-L6-v2\tokenizer_config.json`
- `OpenHW-studio-frontend\public\models\Xenova\all-MiniLM-L6-v2\vocab.txt`
- `OpenHW-studio-frontend\public\openhw-client-esp32\README.md`
- `OpenHW-studio-frontend\public\openhw-client-esp32\esp32-engine.js`
- `OpenHW-studio-frontend\public\openhw-client-esp32\test-harness.html`
- `OpenHW-studio-frontend\public\openhw-client-esp32\unpack.cjs`
- `OpenHW-studio-frontend\public\ort-wasm-simd-threaded.wasm`
- `OpenHW-studio-frontend\public\ort-wasm-simd.wasm`
- `OpenHW-studio-frontend\public\ort-wasm-threaded.wasm`
- `OpenHW-studio-frontend\public\ort-wasm.wasm`
- `OpenHW-studio-frontend\public\sw.js`
- `OpenHW-studio-frontend\public\title-logo.png`
- `OpenHW-studio-frontend\public\version.json`
- `OpenHW-studio-frontend\public\wasm\littlefs.wasm`
- `OpenHW-studio-frontend\public\wasm\ort-wasm-simd-threaded.wasm`
- `OpenHW-studio-frontend\public\wasm\ort-wasm-simd.wasm`
- `OpenHW-studio-frontend\public\wasm\ort-wasm-threaded.wasm`
- `OpenHW-studio-frontend\public\wasm\ort-wasm.wasm`
- `OpenHW-studio-frontend\public\wokwi-elements.bundle.js`
- `OpenHW-studio-frontend\readmek.md`
- `OpenHW-studio-frontend\remote_page.jsx`
- `OpenHW-studio-frontend\scratch\ExplorerBlock.txt`
- `OpenHW-studio-frontend\scratch\check_db.js`
- `OpenHW-studio-frontend\scratch\check_jsx.cjs`
- `OpenHW-studio-frontend\scratch\jsx_depth.txt`
- `OpenHW-studio-frontend\scratch\test_blockly.js`
- `OpenHW-studio-frontend\scripts\cli-hw-matrix-full-rerun.mjs`
- `OpenHW-studio-frontend\scripts\cli-hw-matrix-guard.mjs`
- `OpenHW-studio-frontend\scripts\cli-hw-matrix-watchdog.mjs`
- `OpenHW-studio-frontend\scripts\cli-hw-telemetry-coverage.mjs`
- `OpenHW-studio-frontend\scripts\generateSchemas.js`
- `OpenHW-studio-frontend\scripts\page-routes.json`
- `OpenHW-studio-frontend\scripts\precompile-guided-projects.mjs`
- `OpenHW-studio-frontend\scripts\rp2040-smoke-watchdog.mjs`
- `OpenHW-studio-frontend\scripts\splitExampleBlocks.js`
- `OpenHW-studio-frontend\scripts\verify-import-export.mjs`
- `OpenHW-studio-frontend\src\App.jsx`
- `OpenHW-studio-frontend\src\arduino\avrbro\boards.js`
- `OpenHW-studio-frontend\src\arduino\avrbro\hex-parser.js`
- `OpenHW-studio-frontend\src\arduino\avrbro\index.js`
- `OpenHW-studio-frontend\src\arduino\avrbro\stk500v1\constants.js`
- `OpenHW-studio-frontend\src\arduino\avrbro\stk500v1\stk500-io.js`
- `OpenHW-studio-frontend\src\arduino\avrbro\stk500v1\stk500.js`
- `OpenHW-studio-frontend\src\arduino\avrbro\utils.js`
- `OpenHW-studio-frontend\src\arduino\avrbroFlasher.js`
- `OpenHW-studio-frontend\src\assets\about\Prabhu.jpeg`
- `OpenHW-studio-frontend\src\assets\about\fossee-logo-cropped.png`
- `OpenHW-studio-frontend\src\assets\about\fossee-logo.jpeg`
- `OpenHW-studio-frontend\src\assets\about\pratik-b.jpeg`
- `OpenHW-studio-frontend\src\assets\about\pratik-n.jpeg`
- `OpenHW-studio-frontend\src\assets\about\rajesh.jpeg`
- `OpenHW-studio-frontend\src\assets\about\tinkering-students.jpeg`
- `OpenHW-studio-frontend\src\assets\about\tinkering-students.png`
- `OpenHW-studio-frontend\src\assets\classroom\.gitkeep`
- `OpenHW-studio-frontend\src\components\AutofixPreviewPanel.jsx`
- `OpenHW-studio-frontend\src\components\BetaBanner.jsx`
- `OpenHW-studio-frontend\src\components\BlocklyEditor.jsx`
- `OpenHW-studio-frontend\src\components\DeleteAccountModal.jsx`
- `OpenHW-studio-frontend\src\components\PublicNavbar.jsx`
- `OpenHW-studio-frontend\src\components\ReportBugModal.jsx`
- `OpenHW-studio-frontend\src\components\SubmitFeedbackModal.jsx`
- `OpenHW-studio-frontend\src\components\ThemeToggleSlider.jsx`
- `OpenHW-studio-frontend\src\components\VersionWatcher.jsx`
- `OpenHW-studio-frontend\src\components\VisitorTracker.jsx`
- `OpenHW-studio-frontend\src\components\auth\ProtectedRoute.jsx`
- `OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx`
- `OpenHW-studio-frontend\src\components\common\AssignmentCard.jsx`
- `OpenHW-studio-frontend\src\components\common\ClassCard.jsx`
- `OpenHW-studio-frontend\src\components\common\ClassroomAttachmentBlock.jsx`
- `OpenHW-studio-frontend\src\components\common\ClassroomFilePreviewModal.jsx`
- `OpenHW-studio-frontend\src\components\common\ClassroomSidebar.jsx`
- `OpenHW-studio-frontend\src\components\common\ClassroomSkeletons.jsx`
- `OpenHW-studio-frontend\src\components\common\CommentInput.jsx`
- `OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx`
- `OpenHW-studio-frontend\src\components\common\SavedCircuitsSection.jsx`
- `OpenHW-studio-frontend\src\components\common\StreamCard.jsx`
- `OpenHW-studio-frontend\src\components\common\index.js`
- `OpenHW-studio-frontend\src\components\common\test.js`
- `OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx`
- `OpenHW-studio-frontend\src\components\openhw-neopixel-matrix\logic.ts`
- `OpenHW-studio-frontend\src\components\student\GuidedProjectPopup.jsx`
- `OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx`
- `OpenHW-studio-frontend\src\components\teacher\ProjectBankModal.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\ProjectBankModal.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\StudentAssignmentModal.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\StudentGradingPanel.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\TeacherAssignmentSubmissionsModal.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\TeacherClassDetailSkeleton.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\TeacherClassHeader.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\TeacherClassMainContent.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\TeacherClassSidebar.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\TeacherComposerModal.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\TeacherEditClassModal.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\TeacherGradingPanel.jsx`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\helpers.js`
- `OpenHW-studio-frontend\src\components\teacher\class-detail\uploadUtils.js`
- `OpenHW-studio-frontend\src\context\AuthContext.jsx`
- `OpenHW-studio-frontend\src\context\GamificationContext.jsx`
- `OpenHW-studio-frontend\src\esp32\SimulatorPage.jsx.bak`
- `OpenHW-studio-frontend\src\esp32\compiler.js`
- `OpenHW-studio-frontend\src\esp32\components\SerialMonitor.jsx`
- `OpenHW-studio-frontend\src\esp32\components\SimulatorWorkspace.jsx`
- `OpenHW-studio-frontend\src\esp32\components\VirtualButton.jsx`
- `OpenHW-studio-frontend\src\esp32\components\VirtualLED.jsx`
- `OpenHW-studio-frontend\src\esp32\controller\compileController.js`
- `OpenHW-studio-frontend\src\esp32\esptoolFlasher.js`
- `OpenHW-studio-frontend\src\esp32\hooks\useHardwareSocket.js`
- `OpenHW-studio-frontend\src\esp32\index.js`
- `OpenHW-studio-frontend\src\esp32\loadEnv.js`
- `OpenHW-studio-frontend\src\esp32\runner.js`
- `OpenHW-studio-frontend\src\esp32\server.js`
- `OpenHW-studio-frontend\src\esp32\utils\Esp32MicroPythonLoader.js`
- `OpenHW-studio-frontend\src\esp32\utils\SimulatorBridge.h`
- `OpenHW-studio-frontend\src\esp32\utils\SimulatorWiFi.h`
- `OpenHW-studio-frontend\src\esp32\utils\SimulatorWiFiClient.h`
- `OpenHW-studio-frontend\src\esp32\utils\SimulatorWiFiClientSecure.h`
- `OpenHW-studio-frontend\src\esp32\utils\SimulatorWiFiServer.h`
- `OpenHW-studio-frontend\src\esp32\utils\helper\token.js`
- `OpenHW-studio-frontend\src\esp32\utils\networkProxy.js`
- `OpenHW-studio-frontend\src\esp32\utils\qemuRunner.js`
- `OpenHW-studio-frontend\src\esp32\utils\websocketManager.js`
- `OpenHW-studio-frontend\src\esp32\worker\esp32Worker.js`
- `OpenHW-studio-frontend\src\esp32\worker\execute.ts`
- `OpenHW-studio-frontend\src\esp32\worker\simulation.worker.ts`
- `OpenHW-studio-frontend\src\esp32\worker\test-run.ts`
- `OpenHW-studio-frontend\src\hooks\useAutowiring.ts`
- `OpenHW-studio-frontend\src\hooks\useIsMobile.js`
- `OpenHW-studio-frontend\src\index.css`
- `OpenHW-studio-frontend\src\lib\wireRouter.js`
- `OpenHW-studio-frontend\src\main.jsx`
- `OpenHW-studio-frontend\src\pages\AboutUsNewPage.jsx`
- `OpenHW-studio-frontend\src\pages\AdventureMapPage.jsx`
- `OpenHW-studio-frontend\src\pages\BugTrackerPage.jsx`
- `OpenHW-studio-frontend\src\pages\ComponentEditorPage.jsx`
- `OpenHW-studio-frontend\src\pages\ComponentStatusPage.jsx`
- `OpenHW-studio-frontend\src\pages\ComponentsPage.jsx`
- `OpenHW-studio-frontend\src\pages\ContributorsPage.jsx`
- `OpenHW-studio-frontend\src\pages\ExamplesPage.jsx`
- `OpenHW-studio-frontend\src\pages\ExploreCommunity.jsx`
- `OpenHW-studio-frontend\src\pages\FeedbackReviewsPage.jsx`
- `OpenHW-studio-frontend\src\pages\GradingPage.css`
- `OpenHW-studio-frontend\src\pages\GradingPage.jsx`
- `OpenHW-studio-frontend\src\pages\GuidedSimulatorPage.jsx`
- `OpenHW-studio-frontend\src\pages\LandingPage.jsx`
- `OpenHW-studio-frontend\src\pages\MaintenancePage.jsx`
- `OpenHW-studio-frontend\src\pages\ProjectAssessmentPage.jsx`
- `OpenHW-studio-frontend\src\pages\ProjectComponentUnlockPage.jsx`
- `OpenHW-studio-frontend\src\pages\ProjectGuidePage.jsx`
- `OpenHW-studio-frontend\src\pages\ProjectQuizPage.jsx`
- `OpenHW-studio-frontend\src\pages\ProjectTheoryPage.jsx`
- `OpenHW-studio-frontend\src\pages\ProjectsGallery.jsx`
- `OpenHW-studio-frontend\src\pages\RoleSelectPage.jsx`
- `OpenHW-studio-frontend\src\pages\admin\AdminLandingPage.jsx`
- `OpenHW-studio-frontend\src\pages\admin\AdminLoginPage.jsx`
- `OpenHW-studio-frontend\src\pages\admin\AdminPage.jsx`
- `OpenHW-studio-frontend\src\pages\admin\admin.css`
- `OpenHW-studio-frontend\src\pages\admin\components\AdminAdventureContentTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\AdminCard.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\AdminHeader.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\AnalyticsTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\ApprovalsTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\ComponentsTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\DeploymentsTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\DockerTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\HistoryTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\LibrariesTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\LogsTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\Modals.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\OverviewTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\ResourcesTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\Sidebar.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\StatCard.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\UserManagerTab.jsx`
- `OpenHW-studio-frontend\src\pages\admin\components\UserMapTab.jsx`
- `OpenHW-studio-frontend\src\pages\auth\AuthLeftShowcase.jsx`
- `OpenHW-studio-frontend\src\pages\auth\AuthSuccess.jsx`
- `OpenHW-studio-frontend\src\pages\auth\ForgotPasswordPage.jsx`
- `OpenHW-studio-frontend\src\pages\auth\ReactivationPage.jsx`
- `OpenHW-studio-frontend\src\pages\auth\ResetPasswordPage.jsx`
- `OpenHW-studio-frontend\src\pages\auth\SigninPage.jsx`
- `OpenHW-studio-frontend\src\pages\auth\SignupPage.jsx`
- `OpenHW-studio-frontend\src\pages\auth\UserLoginPage.jsx`
- `OpenHW-studio-frontend\src\pages\auth\UserSignupPage.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\Btn.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\MobileBottomNav.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\ProjectCard.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\RightPanel.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\SimulationConsole.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\SimulatorPage.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\TopToolbox.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\components\SimulatorBanners.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\constants\groupVisuals.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\useHardwareFlashing.js`
- `OpenHW-studio-frontend\src\pages\mobileui\utils\autoSetup.js`
- `OpenHW-studio-frontend\src\pages\mobileui\utils\simulatorUtils.js`
- `OpenHW-studio-frontend\src\pages\mobileui\utils\wireUtils.js`
- `OpenHW-studio-frontend\src\pages\mobileui\views\BlockEditorView.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\views\CodeEditorView.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\views\SerialMonitorView.jsx`
- `OpenHW-studio-frontend\src\pages\mobileui\webSerialHardware.js`
- `OpenHW-studio-frontend\src\pages\mobileui\wireUtils.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\Btn.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\ChromeUIContext.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\ComponentContextMenu.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\ComponentLab.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\PalettePanel.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\PlotterCanvas.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\QuickAddPortal.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\RightPanel.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\SimulationConsole.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\SimulatorPage.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\TopToolbox.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\CanvasBottomControls.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\CanvasPrimitives.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\CanvasSceneLayer.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\ComponentInspectorPanel.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\ComponentTelemetrySelectModal.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\CreateComponentModal.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\F1MenuOverlay.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\FileExplorerSidebar.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\GamificationGuidePanel.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\NetworkComponentOverlay.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\PlotterManager.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\ProjectsSidebar.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\RightPanelEditor.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\SerialMonitor.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\SimulatorBanners.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\SimulatorChromeOverlays.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\SimulatorDialogsGroup.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\SimulatorRuntimePanel.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\SimulatorStatusBanners.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\TourGuide.css`
- `OpenHW-studio-frontend\src\pages\simulationpage\components\TourGuide.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\constants\groupVisuals.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\constants\simulatorConstants.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\context\DisplayRenderContext.jsx`
- `OpenHW-studio-frontend\src\pages\simulationpage\hooks\useCodeExplorerState.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\hooks\useEsp32Engine.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\hooks\useSimulatorShortcuts.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\hooks\useTourLogic.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\projectUtils.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\services\TelemetryManager.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\store\useEditorStore.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\useHardwareFlashing.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\utils\componentRegistry.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\utils\componentVisibilityConfig.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\utils\exportUtils.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\utils\hardwareUtils.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\utils\simulatorUtils.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\utils\snappingUtils.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\utils\telemetryRegistry.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\utils\wireHitDetection.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\utils\wireUtils.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\webSerialHardware.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\wireUtils.js`
- `OpenHW-studio-frontend\src\pages\simulationpage\wokwiImportUtils.js`
- `OpenHW-studio-frontend\src\pages\student\StudentClassDetailPage.jsx`
- `OpenHW-studio-frontend\src\pages\student\StudentDashboard.jsx`
- `OpenHW-studio-frontend\src\pages\student\StudentProfilePage.jsx`
- `OpenHW-studio-frontend\src\pages\teacher\TeacherClassDetailPage.jsx`
- `OpenHW-studio-frontend\src\pages\teacher\TeacherDashboard.jsx`
- `OpenHW-studio-frontend\src\pages\teacher\TeacherProfilePage.jsx`
- `OpenHW-studio-frontend\src\pages\teacher\TeacherProjectBankPage.jsx`
- `OpenHW-studio-frontend\src\pages\teacher\TeacherProjectContentEditor.jsx`
- `OpenHW-studio-frontend\src\pages\user\UserDashboard.jsx`
- `OpenHW-studio-frontend\src\pages\user\UserProfilePage.jsx`
- `OpenHW-studio-frontend\src\services\adventureService.js`
- `OpenHW-studio-frontend\src\services\authService.js`
- `OpenHW-studio-frontend\src\services\bugService.js`
- `OpenHW-studio-frontend\src\services\classAdventureAdapter.js`
- `OpenHW-studio-frontend\src\services\classAdventureService.js`
- `OpenHW-studio-frontend\src\services\classroomService.js`
- `OpenHW-studio-frontend\src\services\componentCache.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\7-segment-counter.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\7-segment-display.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\auto-fan-speed.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\bluetooth-hc05.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\button-debounce.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\button-led.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\buzzer.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\communication-protocols.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\dc-motor-l293d.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\dc-motor-pwm.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\dht-lcd.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\gas-sensor-led.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\index.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\ir-remote-control.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\lcd-scrolling-text.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\ldr-automatic-light.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\led-blink.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\led-pwm.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\line-following-robot.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\motion-sensor-alarm.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\obstacle-avoiding-robot.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\potentiometer-led.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\rf-remote-control.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\rgb-led-3-buttons.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\rgb-led-blink.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\rgb-led-serial.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\servo-motor.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\servo-potentiometer.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\smart-dustbin.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\smart-home-automation.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\smart-street-light.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\temperature-rgb-led.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\temperature-sensor.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\traffic-light.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\ultrasonic-distance.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\up-counter.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\up-down-counter.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\water-level-indicator.js`
- `OpenHW-studio-frontend\src\services\exampleBlocks\wifi-led-control.js`
- `OpenHW-studio-frontend\src\services\exampleLoaderService.js`
- `OpenHW-studio-frontend\src\services\gamification\ComponentsConfig.js`
- `OpenHW-studio-frontend\src\services\gamification\GamificationConfig.jsx`
- `OpenHW-studio-frontend\src\services\gamification\Gamificationpanel.jsx`
- `OpenHW-studio-frontend\src\services\gamification\ProjectData.js`
- `OpenHW-studio-frontend\src\services\gamification\ProjectsConfig.js`
- `OpenHW-studio-frontend\src\services\gamification\unlockService.js`
- `OpenHW-studio-frontend\src\services\guideProjectsIndex.json`
- `OpenHW-studio-frontend\src\services\guidedProjectHexes.js`
- `OpenHW-studio-frontend\src\services\guidedProjects.json`
- `OpenHW-studio-frontend\src\services\offlineCache.js`
- `OpenHW-studio-frontend\src\services\precompiledBinaries.js`
- `OpenHW-studio-frontend\src\services\projectBankService.js`
- `OpenHW-studio-frontend\src\services\projectService.js`
- `OpenHW-studio-frontend\src\services\projectStore.js`
- `OpenHW-studio-frontend\src\services\simulatorService.js`
- `OpenHW-studio-frontend\src\test-utils\page-tester.js`
- `OpenHW-studio-frontend\src\test_avrbro.js`
- `OpenHW-studio-frontend\src\utils\monacoConfig.js`
- `OpenHW-studio-frontend\src\utils\pinExit.js`
- `OpenHW-studio-frontend\src\utils\projectCompilerUtils.js`
- `OpenHW-studio-frontend\src\utils\wireRouting.js`
- `OpenHW-studio-frontend\src\utils\wireUtils.js`
- `OpenHW-studio-frontend\src\wasm\.gitignore`
- `OpenHW-studio-frontend\src\wasm\autofix.wasm`
- `OpenHW-studio-frontend\src\wasm\autofix_rust.js`
- `OpenHW-studio-frontend\src\wasm\autofix_rust.wasm`
- `OpenHW-studio-frontend\src\wasm\autowiring\.gitignore`
- `OpenHW-studio-frontend\src\wasm\autowiring\README.md`
- `OpenHW-studio-frontend\src\wasm\autowiring\openhw_studio_autowiring_engine.d.ts`
- `OpenHW-studio-frontend\src\wasm\autowiring\openhw_studio_autowiring_engine.js`
- `OpenHW-studio-frontend\src\wasm\autowiring\openhw_studio_autowiring_engine_bg.wasm`
- `OpenHW-studio-frontend\src\wasm\autowiring\openhw_studio_autowiring_engine_bg.wasm.d.ts`
- `OpenHW-studio-frontend\src\wasm\autowiring\package.json`
- `OpenHW-studio-frontend\src\wasm\grading\.gitignore`
- `OpenHW-studio-frontend\src\wasm\grading\openhw_studio_grading_engine.d.ts`
- `OpenHW-studio-frontend\src\wasm\grading\openhw_studio_grading_engine.js`
- `OpenHW-studio-frontend\src\wasm\grading\openhw_studio_grading_engine_bg.wasm`
- `OpenHW-studio-frontend\src\wasm\grading\openhw_studio_grading_engine_bg.wasm.d.ts`
- `OpenHW-studio-frontend\src\wasm\grading\package.json`
- `OpenHW-studio-frontend\src\wasm\grading_engine`
- `OpenHW-studio-frontend\src\wasm\openhw_studio_autofix_rust.d.ts`
- `OpenHW-studio-frontend\src\wasm\openhw_studio_autofix_rust.js`
- `OpenHW-studio-frontend\src\wasm\openhw_studio_autofix_rust_bg.wasm`
- `OpenHW-studio-frontend\src\wasm\openhw_studio_autofix_rust_bg.wasm.d.ts`
- `OpenHW-studio-frontend\src\wasm\vite-env.d.ts`
- `OpenHW-studio-frontend\src\worker\ai-audit-final.worker.ts`
- `OpenHW-studio-frontend\src\worker\autofix.worker.ts`
- `OpenHW-studio-frontend\src\worker\board-profiles.ts`
- `OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts`
- `OpenHW-studio-frontend\src\worker\display.render.worker.ts`
- `OpenHW-studio-frontend\src\worker\execute.ts`
- `OpenHW-studio-frontend\src\worker\execute_old.ts`
- `OpenHW-studio-frontend\src\worker\fs\fs-builders.ts`
- `OpenHW-studio-frontend\src\worker\grading-engine.worker.ts`
- `OpenHW-studio-frontend\src\worker\head_execute.ts`
- `OpenHW-studio-frontend\src\worker\pico-logic.ts`
- `OpenHW-studio-frontend\src\worker\protocol-handlers\gates.ts`
- `OpenHW-studio-frontend\src\worker\protocol-handlers\keypad.ts`
- `OpenHW-studio-frontend\src\worker\protocol-handlers\sd-card.ts`
- `OpenHW-studio-frontend\src\worker\protocol-handlers\simulation-monitor.ts`
- `OpenHW-studio-frontend\src\worker\protocol-routing.js`
- `OpenHW-studio-frontend\src\worker\registries\component-registry.ts`
- `OpenHW-studio-frontend\src\worker\rp2040-bootrom.ts`
- `OpenHW-studio-frontend\src\worker\rp2040-smoke-matrix.ts`
- `OpenHW-studio-frontend\src\worker\runners\avr-runner.ts`
- `OpenHW-studio-frontend\src\worker\runners\backend-proxy-runner.ts`
- `OpenHW-studio-frontend\src\worker\runners\esp32-runner.ts`
- `OpenHW-studio-frontend\src\worker\runners\mega-timers.ts`
- `OpenHW-studio-frontend\src\worker\runners\rp2040-runner.ts`
- `OpenHW-studio-frontend\src\worker\simulation.worker.ts`
- `OpenHW-studio-frontend\src\worker\telemetry.worker.ts`
- `OpenHW-studio-frontend\src\worker\test-run.ts`
- `OpenHW-studio-frontend\src\worker\worker-polyfills.ts`
- `OpenHW-studio-frontend\src\workers\autowiring.worker.ts`
- `OpenHW-studio-frontend\src\workers\network.worker.ts`
- `OpenHW-studio-frontend\tailwind.config.js`
- `OpenHW-studio-frontend\temp\pico_sdk_probe\CMakeLists.txt`
- `OpenHW-studio-frontend\temp\pico_sdk_probe\build\CMakeCache.txt`
- `OpenHW-studio-frontend\temp\pico_sdk_probe\build\CMakeFiles\4.2.1\CMakeSystem.cmake`
- `OpenHW-studio-frontend\temp\pico_sdk_probe\build\CMakeFiles\CMakeConfigureLog.yaml`
- `OpenHW-studio-frontend\temp\pico_sdk_probe\build\CMakeFiles\cmake.check_cache`
- `OpenHW-studio-frontend\temp\pico_sdk_probe\main.c`
- `OpenHW-studio-frontend\temp\repro-mpy-user-script.ts`
- `OpenHW-studio-frontend\temp_editor.jsx`
- `OpenHW-studio-frontend\temp_png.txt`
- `OpenHW-studio-frontend\test-pwm.js`
- `OpenHW-studio-frontend\test-results\.last-run.json`
- `OpenHW-studio-frontend\test_autowiring.mjs`
- `OpenHW-studio-frontend\tests\README.md`
- `OpenHW-studio-frontend\tests\e2e\autofix-preview.spec.js`
- `OpenHW-studio-frontend\tests\e2e\autograding.spec.ts`
- `OpenHW-studio-frontend\tests\e2e\console-error-check.spec.js`
- `OpenHW-studio-frontend\tests\e2e\core-workflow.spec.ts`
- `OpenHW-studio-frontend\tests\e2e\core-workflow.spec.ts-snapshots\expected-circuit-chromium-win32.png`
- `OpenHW-studio-frontend\tests\e2e\core-workflow.spec.ts-snapshots\expected-circuit-chromium.png`
- `OpenHW-studio-frontend\tests\e2e\fixtures\baseline-circuit.png`
- `OpenHW-studio-frontend\tests\e2e\fixtures\expected-circuit.png`
- `OpenHW-studio-frontend\tests\e2e\grading-matrix.spec.ts`
- `OpenHW-studio-frontend\tests\e2e\hardware-matrix.spec.ts`
- `OpenHW-studio-frontend\tests\e2e\page-validation.spec.js`
- `OpenHW-studio-frontend\tests\e2e\test-export-circuit_openhw-arduino-uno_2026-07-03_12-51.png`
- `OpenHW-studio-frontend\tests\e2e\test-export-circuit_openhw-arduino-uno_2026-07-03_12-52.png`
- `OpenHW-studio-frontend\tests\e2e\test-export-circuit_openhw-arduino-uno_2026-07-07_18-32.png`
- `OpenHW-studio-frontend\tests\e2e\test-export-circuit_openhw-arduino-uno_2026-07-07_18-34.png`
- `OpenHW-studio-frontend\tests\e2e\utils\hash-utils.ts`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\hashes.json`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_button.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_button.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_buzzer.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_buzzer.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_dht22.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_dht22.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_hcsr04.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_hcsr04.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_led.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_led.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_pir.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_pir.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_potentiometer.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_potentiometer.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_servo.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_servo.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_slide_switch.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\pico_slide_switch.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_button.bin`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_button.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_button.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_buzzer.bin`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_buzzer.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_buzzer.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_dht22.bin`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_dht22.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_dht22.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_hcsr04.bin`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_hcsr04.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_hcsr04.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_led.bin`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_led.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_led.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_pir.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_pir.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_potentiometer.bin`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_potentiometer.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_potentiometer.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_resistor.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_resistor.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_servo.bin`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_servo.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_servo.png`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_slide_switch.bin`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_slide_switch.hex`
- `OpenHW-studio-frontend\tests\fixtures\binary-cache\uno_slide_switch.png`
- `OpenHW-studio-frontend\tests\fixtures\grading-reports\final_summary.html`
- `OpenHW-studio-frontend\tests\fixtures\grading-reports\uno_buzzer_bundle.json`
- `OpenHW-studio-frontend\tests\fixtures\grading-reports\uno_buzzer_report.html`
- `OpenHW-studio-frontend\tests\fixtures\grading-reports\uno_led_bundle.json`
- `OpenHW-studio-frontend\tests\fixtures\grading-reports\uno_led_report.html`
- `OpenHW-studio-frontend\tests\fixtures\grading-reports\vitest_diagnostics_report.md`
- `OpenHW-studio-frontend\tests\fixtures\matrix-cases.json`
- `OpenHW-studio-frontend\tests\unit\components\AutofixPreviewPanel.test.jsx`
- `OpenHW-studio-frontend\tests\unit\grading-chain-mock.mjs`
- `OpenHW-studio-frontend\tests\unit\grading-diagnostics.test.ts`
- `OpenHW-studio-frontend\tests\unit\scripts\exportUtils.test.js`
- `OpenHW-studio-frontend\tests\unit\utils\wireRouting.test.js`
- `OpenHW-studio-frontend\tests\unit\worker\protocol-compliance.test.mjs`
- `OpenHW-studio-frontend\trace-invalid-header.cjs`
- `OpenHW-studio-frontend\uno_servo_sketch_debug.txt`
- `OpenHW-studio-frontend\vercel.json`
- `OpenHW-studio-frontend\vite.config.js`

## ⚠️ Component Failures

### ❌ uno_buzzer

| Score | Value |
|---|---|
| Overall | 95% |
| Spatial | 87% |
| Logic | 100% |
| Behavioral | 93% |
| Code | 100% |
| Verified Code | 97% |
| AI Semantic | 99% |

**Issues detected:**

- **[OVERALL_SCORE]** Score was 95% (expected 100%)
  - *Spatial: 87%, Logic: 100%, Behavioral: 93%, Code: 100%, Verified: 97% | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pinstate:uno1:pintoggles" — 95.0% match
  - *Teacher: 342 events, Student: 335 events, Matched: 325 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pinstate:buzzer_1:pintoggles" — 95.0% match
  - *Teacher: 342 events, Student: 335 events, Matched: 325 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pinstate:buzzer_1:analogvoltages" — 89.7% match
  - *Teacher: 155 events, Student: 177 events, Matched: 139 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pinstate:uno1:analogvoltages" — 89.7% match
  - *Teacher: 155 events, Student: 177 events, Matched: 139 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_COMPONENT]** Mismatch on "via_sig_buzzer_1_0" — 89.6% match
  - *Teacher: 853 events, Student: 907 events, Matched: 764 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pinstate:via_sig_buzzer_1_0:pins" — 89.0% match
  - *Teacher: 155 events, Student: 177 events, Matched: 138 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pinstate:via_sig_buzzer_1_0:analogvoltages" — 89.7% match
  - *Teacher: 155 events, Student: 177 events, Matched: 139 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pinstate:buzzer_1:pins" — 89.0% match
  - *Teacher: 155 events, Student: 177 events, Matched: 138 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pin:8" — 89.5% match
  - *Teacher: 153 events, Student: 175 events, Matched: 137 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pinstate:via_sig_buzzer_1_0:pintoggles" — 95.0% match
  - *Teacher: 342 events, Student: 335 events, Matched: 325 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_PIN]** Mismatch on "pinstate:uno1:pins" — 89.7% match
  - *Teacher: 155 events, Student: 177 events, Matched: 139 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_COMPONENT]** Mismatch on "buzzer_1" — 91.9% match
  - *Teacher: 1462 events, Student: 1418 events, Matched: 1344 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[FEEDBACK_ERRORS]** 2 critical feedback items found
  - *Spatial Error: 1 overlapping component sets detected. | Spatial Error: via_SIG_buzzer_1_0 is floating! Pins must be snapped to breadboard holes. | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*

**📁 Source files to investigate:**

- Emulator component: `openhw-studio-emulator\src\components\openhw-buzzer/logic.ts`
- Emulator validation: `openhw-studio-emulator\src\components\openhw-buzzer/validation.ts`
- Board runner: `OpenHW-studio-frontend\src\worker\runners\avr-runner.ts`
- Core engine: `OpenHW-studio-frontend\src\worker\grading-engine.worker.ts`
- Core engine: `OpenHW-studio-frontend\src\worker\simulation.worker.ts`
- Core engine: `OpenHW-studio-frontend\src\worker\execute.ts`
- Core engine: `OpenHW-studio-frontend\src\worker\ai-audit-final.worker.ts`

**🔍 Probable culprit code lines:**

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\grading-engine.worker.ts` — Line 188**
> *Keyword match: "uno1"*

```typescript
 186:         const boardComp = (meta.components || []).find((c: any) => /(arduino|esp32|stm32|rp2040|pico)/i.test(String(c.type || '')));
 187:         
 188:         const boardCompId = boardComp?.id || 'uno1';
 189:         const boardType = boardComp?.type || meta.board || 'openhw-arduino-uno';
 190:         const isRp2040Board = /rp2040|pico/i.test(String(boardType));
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\public\components_examples\UNO.png` — Line 310**
> *Keyword match: "uno1"*

```typescript
 308: 1�B!��f�B!�B!�Y�C!�BiV(�B!�B�
 309: 1�B!��f�B!�B!�Y�C!�BiV(�B!�B�
 310: 1�B!��f��>i�k���    deBG3669143EFD108FFC%��y    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"openhw-arduino-uno","components":[{"id":"uno1","type":"openhw-arduino-uno","label":"Arduino Uno","x":270.3,"y":105.5,"w":425,"h":320,"rotation":0,"attrs":{}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/uno1/uno1.ino","path":"project/uno1/uno1.ino","name":"uno1.ino","kind":"code","boardId":"uno1","boardKind":"arduino_uno","content":"void setup() {\n  // autocoding for buzzer_1 start\n  pinMode(8, OUTPUT);\n  // autocoding for buzzer_1 end\n\n  // put your setup code here, to run once:\n\n}\n\nvoid loop() {\n  // autocoding for buzzer_1 start\n  int notes_1[] = {262, 294, 330, 349, 392, 440, 494, 523};\n  int durs_1[] = {200, 200, 200, 200, 200, 200, 200, 400};\n  for (int i_1 = 0; i_1 < 8; i_1++) {\n    tone(8, notes_1[i_1], durs_1[i_1]);\n    delay(durs_1[i_1] + 30);\n  }\n  noTone(8);\n  delay(1000);\n  // autocoding for buzzer_1 end\n\n  // put your main code here, to run repeatedly:\n\n}\n","dirty":true},{"id":"project/uno1/library.txt","path":"project/uno1/library.txt","name":"library.txt","kind":"code","boardId":"uno1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/uno1/uno1.ino"],"activeCodeFileId":"project/uno1/uno1.ino","code":"void setup() {\n  // autocoding for buzzer_1 start\n  pinMode(8, OUTPUT);\n  // autocoding for buzzer_1 end\n\n  // put your setup code here, to run once:\n\n}\n\nvoid loop() {\n  // autocoding for buzzer_1 start\n  int notes_1[] = {262, 294, 330, 349, 392, 440, 494, 523};\n  int durs_1[] = {200, 200, 200, 200, 200, 200, 200, 400};\n  for (int i_1 = 0; i_1 < 8; i_1++) {\n    tone(8, notes_1[i_1], durs_1[i_1]);\n    delay(durs_1[i_1] + 30);\n  }\n  noTone(8);\n  delay(1000);\n  // autocoding for buzzer_1 end\n\n  // put your main code here, to run repeatedly:\n\n}\n","exportedAt":"2026-07-09T13:58:13.788Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 738**
> *Keyword match: "uno1"*

```typescript
 736: }
 737: 
 738: function makeUnoBoard(id = 'uno1') {
 739:   return {
 740:     id,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\grading-engine.worker.ts` — Line 188**
> *Keyword match: "uno1"*

```typescript
 186:         const boardComp = (meta.components || []).find((c: any) => /(arduino|esp32|stm32|rp2040|pico)/i.test(String(c.type || '')));
 187:         
 188:         const boardCompId = boardComp?.id || 'uno1';
 189:         const boardType = boardComp?.type || meta.board || 'openhw-arduino-uno';
 190:         const isRp2040Board = /rp2040|pico/i.test(String(boardType));
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\public\components_examples\UNO.png` — Line 310**
> *Keyword match: "uno1"*

```typescript
 308: 1�B!��f�B!�B!�Y�C!�BiV(�B!�B�
 309: 1�B!��f�B!�B!�Y�C!�BiV(�B!�B�
 310: 1�B!��f��>i�k���    deBG3669143EFD108FFC%��y    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"openhw-arduino-uno","components":[{"id":"uno1","type":"openhw-arduino-uno","label":"Arduino Uno","x":270.3,"y":105.5,"w":425,"h":320,"rotation":0,"attrs":{}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/uno1/uno1.ino","path":"project/uno1/uno1.ino","name":"uno1.ino","kind":"code","boardId":"uno1","boardKind":"arduino_uno","content":"void setup() {\n  // autocoding for buzzer_1 start\n  pinMode(8, OUTPUT);\n  // autocoding for buzzer_1 end\n\n  // put your setup code here, to run once:\n\n}\n\nvoid loop() {\n  // autocoding for buzzer_1 start\n  int notes_1[] = {262, 294, 330, 349, 392, 440, 494, 523};\n  int durs_1[] = {200, 200, 200, 200, 200, 200, 200, 400};\n  for (int i_1 = 0; i_1 < 8; i_1++) {\n    tone(8, notes_1[i_1], durs_1[i_1]);\n    delay(durs_1[i_1] + 30);\n  }\n  noTone(8);\n  delay(1000);\n  // autocoding for buzzer_1 end\n\n  // put your main code here, to run repeatedly:\n\n}\n","dirty":true},{"id":"project/uno1/library.txt","path":"project/uno1/library.txt","name":"library.txt","kind":"code","boardId":"uno1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/uno1/uno1.ino"],"activeCodeFileId":"project/uno1/uno1.ino","code":"void setup() {\n  // autocoding for buzzer_1 start\n  pinMode(8, OUTPUT);\n  // autocoding for buzzer_1 end\n\n  // put your setup code here, to run once:\n\n}\n\nvoid loop() {\n  // autocoding for buzzer_1 start\n  int notes_1[] = {262, 294, 330, 349, 392, 440, 494, 523};\n  int durs_1[] = {200, 200, 200, 200, 200, 200, 200, 400};\n  for (int i_1 = 0; i_1 < 8; i_1++) {\n    tone(8, notes_1[i_1], durs_1[i_1]);\n    delay(durs_1[i_1] + 30);\n  }\n  noTone(8);\n  delay(1000);\n  // autocoding for buzzer_1 end\n\n  // put your main code here, to run repeatedly:\n\n}\n","exportedAt":"2026-07-09T13:58:13.788Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 738**
> *Keyword match: "uno1"*

```typescript
 736: }
 737: 
 738: function makeUnoBoard(id = 'uno1') {
 739:   return {
 740:     id,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\grading-engine.worker.ts` — Line 188**
> *Keyword match: "uno1"*

```typescript
 186:         const boardComp = (meta.components || []).find((c: any) => /(arduino|esp32|stm32|rp2040|pico)/i.test(String(c.type || '')));
 187:         
 188:         const boardCompId = boardComp?.id || 'uno1';
 189:         const boardType = boardComp?.type || meta.board || 'openhw-arduino-uno';
 190:         const isRp2040Board = /rp2040|pico/i.test(String(boardType));
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\public\components_examples\UNO.png` — Line 310**
> *Keyword match: "uno1"*

```typescript
 308: 1�B!��f�B!�B!�Y�C!�BiV(�B!�B�
 309: 1�B!��f�B!�B!�Y�C!�BiV(�B!�B�
 310: 1�B!��f��>i�k���    deBG3669143EFD108FFC%��y    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"openhw-arduino-uno","components":[{"id":"uno1","type":"openhw-arduino-uno","label":"Arduino Uno","x":270.3,"y":105.5,"w":425,"h":320,"rotation":0,"attrs":{}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/uno1/uno1.ino","path":"project/uno1/uno1.ino","name":"uno1.ino","kind":"code","boardId":"uno1","boardKind":"arduino_uno","content":"void setup() {\n  // autocoding for buzzer_1 start\n  pinMode(8, OUTPUT);\n  // autocoding for buzzer_1 end\n\n  // put your setup code here, to run once:\n\n}\n\nvoid loop() {\n  // autocoding for buzzer_1 start\n  int notes_1[] = {262, 294, 330, 349, 392, 440, 494, 523};\n  int durs_1[] = {200, 200, 200, 200, 200, 200, 200, 400};\n  for (int i_1 = 0; i_1 < 8; i_1++) {\n    tone(8, notes_1[i_1], durs_1[i_1]);\n    delay(durs_1[i_1] + 30);\n  }\n  noTone(8);\n  delay(1000);\n  // autocoding for buzzer_1 end\n\n  // put your main code here, to run repeatedly:\n\n}\n","dirty":true},{"id":"project/uno1/library.txt","path":"project/uno1/library.txt","name":"library.txt","kind":"code","boardId":"uno1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/uno1/uno1.ino"],"activeCodeFileId":"project/uno1/uno1.ino","code":"void setup() {\n  // autocoding for buzzer_1 start\n  pinMode(8, OUTPUT);\n  // autocoding for buzzer_1 end\n\n  // put your setup code here, to run once:\n\n}\n\nvoid loop() {\n  // autocoding for buzzer_1 start\n  int notes_1[] = {262, 294, 330, 349, 392, 440, 494, 523};\n  int durs_1[] = {200, 200, 200, 200, 200, 200, 200, 400};\n  for (int i_1 = 0; i_1 < 8; i_1++) {\n    tone(8, notes_1[i_1], durs_1[i_1]);\n    delay(durs_1[i_1] + 30);\n  }\n  noTone(8);\n  delay(1000);\n  // autocoding for buzzer_1 end\n\n  // put your main code here, to run repeatedly:\n\n}\n","exportedAt":"2026-07-09T13:58:13.788Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 738**
> *Keyword match: "uno1"*

```typescript
 736: }
 737: 
 738: function makeUnoBoard(id = 'uno1') {
 739:   return {
 740:     id,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\public\components_examples\Buzzer.png` — Line 72**
> *Keyword match: "buzzer"*

```typescript
  70:  �B  �( @Q ��  9 D r@� � �!
  71:  �B  �( @Q ��  9 D r@� � �!
  72:  �B  �( @Q ���Q/�    deBGD69F15CF048EE8F5, D�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"buzzer_1","type":"openhw-buzzer","label":"Buzzer","x":375,"y":330,"w":105,"h":135,"rotation":0,"attrs":{"volume":"50","frequency":"440"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:00:38.819Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 49**
> *Keyword match: "buzzer"*

```typescript
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
  50:     { id: 'addons_lcd', label: 'LCD Screen' },
  51:     { id: 'addons_pins', label: 'Pins' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 236**
> *Keyword match: "buzzer"*

```typescript
 234:   ],
 235:   addons_buzzer: [
 236:     { type: 'buzzer_tone', label: 'buzzer tone' },
 237:     { type: 'buzzer_stop', label: 'buzzer stop' },
 238:   ],
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 4**
> *Keyword match: "buzzer"*

```typescript
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
   6: import openhwPhotoresistor from '@openhw/emulator/src/components/openhw-photoresistor';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 17**
> *Keyword match: "buzzer"*

```typescript
  15:     'led-blink': { module: openhwLed, attrs: { color: 'red' } },
  16:     'rgb-led': { module: openhwRGBLED, attrs: {} },
  17:     'buzzer': { module: openhwBuzzer, attrs: {} },
  18:     'potentiometer': { module: openhwPotentiometer, attrs: {} },
  19:     'ldr': { module: openhwPhotoresistor, attrs: {} },
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 8**
> *Keyword match: "buzzer"*

```typescript
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
   9:   'openhw-pushbutton': '#2c3e50',
  10:   'openhw-potentiometer': '#e67e22',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 21**
> *Keyword match: "buzzer"*

```typescript
  19:   'openhw-rgb-led': 'RGB LED',
  20:   'openhw-resistor': 'Resistor',
  21:   'openhw-buzzer': 'Buzzer',
  22:   'openhw-pushbutton': 'Push Button',
  23:   'openhw-potentiometer': 'Potentiometer',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 42**
> *Keyword match: "buzzer"*

```typescript
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
  44:   if (t.includes('temperature') || t.includes('thermometer') || s.includes('temp') || t.includes('dht')) return Thermometer
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 10**
> *Keyword match: "buzzer"*

```typescript
   8: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
   9: import { NeopixelLogic } from '@openhw/emulator/src/components/wokwi-neopixel-matrix/logic.ts';
  10: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  11: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  12: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 60**
> *Keyword match: "buzzer"*

```typescript
  58:     'wokwi-power-supply': PowerSupplyLogic,
  59:     'wokwi-neopixel-matrix': NeopixelLogic,
  60:     'wokwi-buzzer': BuzzerLogic,
  61:     'wokwi-motor': MotorLogic,
  62:     'wokwi-servo': ServoLogic,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 850**
> *Keyword match: "buzzer"*

```typescript
 848: function makePicoMixedIoCircuit(): CircuitFixture {
 849:   const base = makePicoMicroPythonMixedCircuit();
 850:   const components = [...base.components, { id: 'buzz1', type: 'wokwi-buzzer', attrs: {} }];
 851:   const wires = [
 852:     ...base.wires,
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 2777**
> *Keyword match: "buzzer"*

```typescript
2775:       servo: Number(componentUpdateCount.servo1 || 0),
2776:       neopixel: Number(componentUpdateCount.ws1 || 0),
2777:       buzzer: Number(componentUpdateCount.buzz1 || 0),
2778:     };
2779:     const serialInputObserved = /MP_IO_RX/.test(run.serialText) && /MP_IO_ECHO:/.test(run.serialText);
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 13**
> *Keyword match: "buzzer"*

```typescript
  11: import { PowerSupplyLogic } from '@openhw/emulator/src/components/wokwi-power-supply/logic.ts';
  12: import { NeopixelLogic } from '../components/wokwi-neopixel-matrix/logic.ts';
  13: import { BuzzerLogic } from '@openhw/emulator/src/components/wokwi-buzzer/logic.ts';
  14: import { MotorLogic } from '@openhw/emulator/src/components/wokwi-motor/logic.ts';
  15: import { ServoLogic } from '@openhw/emulator/src/components/wokwi-servo/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 1915**
> *Keyword match: "buzzer"*

```typescript
1913:     'wokwi-ws2812b': NeopixelLogic,
1914:     'wokwi-ws2821b': NeopixelLogic,
1915:     'wokwi-buzzer': BuzzerLogic,
1916:     'openhw-buzzer': BuzzerLogic,
1917:     'wokwi-motor': MotorLogic,
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 15**
> *Keyword match: "buzzer"*

```typescript
  13: import { BatteryLogic } from '@openhw/emulator/src/components/openhw-battery/logic';
  14: import { NeopixelLogic } from '@openhw/emulator/src/components/openhw-neopixel-matrix/logic';
  15: import { BuzzerLogic } from '@openhw/emulator/src/components/openhw-buzzer/logic';
  16: import { MotorLogic } from '@openhw/emulator/src/components/openhw-motor/logic';
  17: import { ServoLogic } from '@openhw/emulator/src/components/openhw-servo/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 119**
> *Keyword match: "buzzer"*

```typescript
 117:     'wokwi-ws2821b': NeopixelLogic,
 118:     'openhw-ws2821b': NeopixelLogic,
 119:     'wokwi-buzzer': BuzzerLogic,
 120:     'openhw-buzzer': BuzzerLogic,
 121:     'wokwi-motor': MotorLogic,
```

---

### ❌ uno_led

| Score | Value |
|---|---|
| Overall | 94% |
| Spatial | 75% |
| Logic | 100% |
| Behavioral | 96% |
| Code | 100% |
| Verified Code | 100% |
| AI Semantic | 100% |

**Issues detected:**

- **[OVERALL_SCORE]** Score was 94% (expected 100%)
  - *Spatial: 75%, Logic: 100%, Behavioral: 96%, Code: 100%, Verified: 100% | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[TEMPORAL_COMPONENT]** Mismatch on "led_1" — 89.5% match
  - *Teacher: 95 events, Student: 95 events, Matched: 85 | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*
- **[FEEDBACK_ERRORS]** 3 critical feedback items found
  - *Spatial Error: 2 overlapping component sets detected. | Spatial Error: led_1 is floating! Pins must be snapped to breadboard holes. | Spatial Error: via_A_led_1_0 is floating! Pins must be snapped to breadboard holes. | ⚠️ Circular imports detected: src\worker\registries\component-registry.ts ↔ src\worker\runners\avr-runner.ts; src\worker\runners\avr-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\execute.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\backend-proxy-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\runners\rp2040-runner.ts ↔ src\worker\simulation.worker.ts; src\worker\grading-engine.worker.ts ↔ src\worker\simulation.worker.ts; src\worker\registries\component-registry.ts ↔ src\worker\simulation.worker.ts*

**📁 Source files to investigate:**

- Emulator component: `openhw-studio-emulator\src\components\openhw-led/logic.ts`
- Emulator validation: `openhw-studio-emulator\src\components\openhw-led/validation.ts`
- Board runner: `OpenHW-studio-frontend\src\worker\runners\avr-runner.ts`
- Core engine: `OpenHW-studio-frontend\src\worker\grading-engine.worker.ts`
- Core engine: `OpenHW-studio-frontend\src\worker\simulation.worker.ts`
- Core engine: `OpenHW-studio-frontend\src\worker\execute.ts`
- Core engine: `OpenHW-studio-frontend\src\worker\ai-audit-final.worker.ts`

**🔍 Probable culprit code lines:**

**`OpenHW-studio-frontend\public\components_examples\LED.png` — Line 100**
> *Keyword match: "led"*

```typescript
  98: A)��BDJ!��RH*A��
  99: A)��BDJ!��RH*A��
 100: A)��BDJ!��R�I���+���   deBG664EC568CB7F14D5Zf��    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"led_1","type":"openhw-led","label":"LED","x":394.2,"y":362.6,"w":65.3,"h":65.3,"rotation":0,"attrs":{"color":"red","breadboard":{"anchorPin":"A"}}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:01:19.955Z"}
```

**`OpenHW-studio-frontend\public\components_examples\MAX30102_Heart_Rate.png` — Line 167**
> *Keyword match: "led"*

```typescript
 165: \�$$u�(��q^��r�2��e��C�CS��o���CuJK�.��t=3d���YL0�̩叮��fِ�7	Q	�?��@r�+{�bߌ��n��~b±w�jqOg�-f ���nCr���+�1� ���<>')���#�M͉F���aJ�Fug�O7ƋcĢ~�h4r"N��U�����a�~qiF�3GZ,`u�&��W�w�x����[������ܳsq=3�Ϊ/�H�9]Z����'
 166: �EYYY3�W����]Þ~�\wrV:^bc�}4�{@��R��h��e��B*�~d�  �C�w�2��p��W��f?l~5�o�9�G�e���H��K�b�|!��व��Tt�@�  ^IDAT����E�_E���я@>�tº<1v�`��yun�=�̎�B,B�k����?;V���� ��%s�h��J$�Ӓ��Wj�x�����9��.�#��J�c���81�J�΂_���8��NO�x��:׭^��}�]�}���P��eTt��7�b�6�/�N���x~�9�f�3�������Q�@$�Z��#���? �+�I���,��bp��0%:yA������[���5R��#&e�%5��{�d.E����Wb_�w����:�*<��p�G�i���*3��ӹ�bK9�"��A�;M�X٣�5݌�y:5,(}�ۚs��``1(��@S�%Y�{+���;IHѕH$���{s�b���O3~���4�5KѕH$�c�h�]��X��+�H$� ��b�lc�]��X��+�H$��6�L�T��Dr,HѕH$�����+�H$I3!EW"�HNzx7�B%N5Amw����t�e8d��+3��Ԉ	����r�4P�TQ��!��šPTji L��C����@�8�1И�}X��S�E�`�*��D��}�休�Ǔ��r'9��)5@�&���(�;�ˮ0�B�[�����t)�IU��.G�R^C,V�Q�J]�.U������ �j�݆�K�ѳ�7����]�D"9Ɍ[�Rj�l��6�n�#�-)s0d�6B�eՑt_u ł�+bq�:����,5bZJ�`�D3,��bG!L/Ş�v�UU��������͕5l8&�*L�E ����`N,"���)��n�ج?8���|�63F隍�M#��L�,l`��F� ��P!E��c�� ��R�J8%�,�d�a:�vS���P=V8D
 167: ����q{ƻ�õ������k�xڛ��5n��À����HѕH$�����+�H$I3!EW"�H$�fB��D"�H$̈́]�D"�H�	)��D"�4Rt%�D"i&��J$�D�LHѕH$�����+�H$I3!EW"�H$�fB��D"�H$̈́]�D"�H�	)��D"�4Rt%�D"i&��J$�D�LHѕH$�����+�H$I3!EW"�H$�fB��D"�H$̈́]�D"�H�	)��D"�4���)yw   deBGAD772173EF565036�m�,    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"max30102_1","type":"max30102","label":"MAX30102 Heart Rate","x":333.7,"y":312.6,"w":198,"h":158.4,"rotation":0,"attrs":{"i2cAddress":"0x57","redLed":{"label":"Red LED (660nm)","type":"number","default":0},"irLed":{"label":"IR LED (880nm)","type":"number","default":0}}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:04:22.231Z"}
```

**`OpenHW-studio-frontend\public\components_examples\RBG_LED_4pin.png` — Line 147**
> *Keyword match: "led"*

```typescript
 145: ��@��D��c�����;�aכ��|a4�J���M�4n@�RQ Bb��H��ؠ@"��!$6(�!�A�D�
 146: $BHlP Bb��H��ؠ@"��!$6(�!�A�D�
 147: $BHlP Bb��H��ؠ@"��!$6(�!��'�bj��1�4   deBGCF17778AD026E2AA�v�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"rgb_led_1","type":"openhw-rgb-led","label":"RGB LED (4-pin)","x":390,"y":345,"w":75,"h":105,"rotation":0,"attrs":{"common":"cathode","breadboard":{"anchorPin":"R"}}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:02:57.949Z"}
```

**`OpenHW-studio-frontend\public\components_examples\SPI_LED_Driver_NLSE595.png` — Line 120**
> *Keyword match: "led"*

```typescript
 118: o�U�_7A�N���Z��Nȸ\���O����?��I�	�p,�A|YH�	��>t�����A_t������� ė�� ��@�N�K A'�F?�JT{�8ĵ�#���X�d�$M;�%|�ii�:W$�����2h��eEa�~PR\\RtEE�m�) ��!)%$a�q
 119: �c@
 120: m�z�ˌ����$Y�`K	<�P���������z}�z�[���MP��ݒɽ2���V�G��S�T�K��UKV��y��,�&�fM9�|H���^Uiv{��8D�>S�5ǌ)�1EE�t���s�������'�T�+Oi����x�d&}�©@$˷!�M����$�#	[MY�3$S)�����A�̊>�9�m�j���56�)s�5'�tq�`�0!�l�0f�̈�|3���� cH�&;�e\v���[�&�ن���I��,�l\`��%� ���U��ih*�&ɠ�Sd��VI������TY5u5�N&�"�є�sw�[����0�#�#����E�uf�O��k�l�o+$�A�t� �^	:AD/�� ��@�N�K A'��%��A�H�	� z	$�A�t� �^	:AD/�� ��@�N�K A'��%��A�H�	� z	$�A�t� �^	:AD/�� ��@�N�K A'��%�?�dr�9��   deBG3C4F2242DD33F70Cj��    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"nlsf595_1","type":"openhw-nlsf595","label":"SPI LED Driver (NLSF595)","x":364,"y":364,"w":128,"h":64,"rotation":0,"attrs":{}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:03:55.313Z"}
```

**`OpenHW-studio-frontend\public\components_examples\WS2812B_RGB_LED.png` — Line 89**
> *Keyword match: "led"*

```typescript
  87: '�cR�89�����.NǤpqr8&����1)\��I���pL
  88: '�cR�89�����.NǤpqr8&����1)\��I���pL
  89: '�cR�89�����.NǤpqr8&����1)�~,)��5   deBG9B608641F4F2743Ed�^    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"neopixel_matrix_1","type":"openhw-neopixel-matrix","label":"WS2812B RGB LED","x":405,"y":375,"w":30,"h":30,"rotation":0,"attrs":{"rows":"1","cols":"1"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:02:19.304Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 46**
> *Keyword match: "led"*

```typescript
  44: const SUB_CATEGORIES = {
  45:   addons: [
  46:     { id: 'addons_led', label: 'Led' },
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 47**
> *Keyword match: "led"*

```typescript
  45:   addons: [
  46:     { id: 'addons_led', label: 'Led' },
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "led"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 9**
> *Keyword match: "led"*

```typescript
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
  11: ]
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 2**
> *Keyword match: "led"*

```typescript
   1: import React from 'react';
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 3**
> *Keyword match: "led"*

```typescript
   1: import React from 'react';
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 5**
> *Keyword match: "led"*

```typescript
   3: const COMPONENT_COLORS = {
   4:   'openhw-arduino-uno': '#1a5276',
   5:   'openhw-led': '#e74c3c',
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 6**
> *Keyword match: "led"*

```typescript
   4:   'openhw-arduino-uno': '#1a5276',
   5:   'openhw-led': '#e74c3c',
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 40**
> *Keyword match: "led"*

```typescript
  38:   const t = title ? title.toLowerCase() : ''
  39:   
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 41**
> *Keyword match: "led"*

```typescript
  39:   
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
```

**`OpenHW-studio-frontend\src\esp32\components\SimulatorWorkspace.jsx` — Line 41**
> *Keyword match: "led"*

```typescript
  39:   { type: 'button', pin: 0,  label: 'BOOT'  },
  40:   { type: 'button', pin: 2,  label: 'BTN 2' },
  41:   { type: 'led',    pin: 2,  label: 'LED 2', color: '#00ff88' },
  42:   { type: 'led',    pin: 4,  label: 'LED 4', color: '#00d4ff' },
  43:   { type: 'led',    pin: 13, label: 'LED 13', color: '#f59e0b' },
```

**`OpenHW-studio-frontend\src\esp32\components\SimulatorWorkspace.jsx` — Line 42**
> *Keyword match: "led"*

```typescript
  40:   { type: 'button', pin: 2,  label: 'BTN 2' },
  41:   { type: 'led',    pin: 2,  label: 'LED 2', color: '#00ff88' },
  42:   { type: 'led',    pin: 4,  label: 'LED 4', color: '#00d4ff' },
  43:   { type: 'led',    pin: 13, label: 'LED 13', color: '#f59e0b' },
  44: ];
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 4**
> *Keyword match: "led"*

```typescript
   2: 
   3: import { BaseComponent } from '@openhw/emulator/src/components/BaseComponent.ts';
   4: import { LEDLogic } from '@openhw/emulator/src/components/wokwi-led/logic.ts';
   5: import { UnoLogic } from '@openhw/emulator/src/components/wokwi-arduino-uno/logic.ts';
   6: import { ResistorLogic } from '@openhw/emulator/src/components/wokwi-resistor/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 54**
> *Keyword match: "led"*

```typescript
  52: 
  53: export const LOGIC_REGISTRY: Record<string, any> = {
  54:     'wokwi-led': LEDLogic,
  55:     'wokwi-arduino-uno': UnoLogic,
  56:     'wokwi-resistor': ResistorLogic,
```

**`OpenHW-studio-frontend\src\pages\simulationpage\components\CanvasSceneLayer.jsx` — Line 476**
> *Keyword match: "led"*

```typescript
 474:           <p style={{ fontSize: 16, marginBottom: 8 }}>Drag components from the left panel</p>
 475:           <p style={{ fontSize: 12, color: 'var(--text3)', fontFamily: 'JetBrains Mono, monospace' }}>
 476:             Arduino Uno · LED · Resistor · Button · Servo · LCD
 477:           </p>
 478:         </div>
```

**`OpenHW-studio-frontend\src\pages\simulationpage\components\TourGuide.jsx` — Line 364**
> *Keyword match: "led"*

```typescript
 362:     if (step.id === 'wiring') {
 363:       if (demoPhase <= 2) selector = '[id*="pin-dot-demo-comp-tour-13"]';
 364:       else if (demoPhase <= 4) selector = '[id*="pin-dot-demo-led-tour-A"]';
 365:       else if (demoPhase <= 6) selector = '[id*="pin-dot-demo-comp-tour-gnd_3"]';
 366:       else selector = '[id*="pin-dot-demo-led-tour-K"]';
```

**`OpenHW-studio-frontend\src\pages\simulationpage\components\TourGuide.jsx` — Line 366**
> *Keyword match: "led"*

```typescript
 364:       else if (demoPhase <= 4) selector = '[id*="pin-dot-demo-led-tour-A"]';
 365:       else if (demoPhase <= 6) selector = '[id*="pin-dot-demo-comp-tour-gnd_3"]';
 366:       else selector = '[id*="pin-dot-demo-led-tour-K"]';
 367:     }
 368:     if (step.id === 'autowiring') {
```

**`OpenHW-studio-frontend\src\pages\simulationpage\utils\componentVisibilityConfig.js` — Line 90**
> *Keyword match: "led"*

```typescript
  88:     working: [
  89:       'ESP32 GPIO & Flash Memory',
  90:       'Onboard Flashlight LED'
  91:     ],
  92:     inProgress: [
```

**`OpenHW-studio-frontend\src\worker\autofix.worker.ts` — Line 25**
> *Keyword match: "led"*

```typescript
  23:   'openhw-resistor':    [['p1', 'p2'], ['1', '2']],
  24:   'wokwi-resistor':     [['p1', 'p2'], ['1', '2']],
  25:   'openhw-led':         [['A', 'K']],
  26:   'wokwi-led':          [['A', 'K']],
  27:   'openhw-pushbutton':  [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\src\worker\autofix.worker.ts` — Line 26**
> *Keyword match: "led"*

```typescript
  24:   'wokwi-resistor':     [['p1', 'p2'], ['1', '2']],
  25:   'openhw-led':         [['A', 'K']],
  26:   'wokwi-led':          [['A', 'K']],
  27:   'openhw-pushbutton':  [['1l', '1r'], ['2l', '2r']],
  28:   'wokwi-pushbutton':   [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 801**
> *Keyword match: "led"*

```typescript
 799:   const components = [
 800:     makePicoBoard('pico1'),
 801:     { id: 'led1', type: 'wokwi-led', attrs: { color: 'green' } },
 802:   ];
 803: 
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 816**
> *Keyword match: "led"*

```typescript
 814:   const components = [
 815:     makePicoBoard('pico1'),
 816:     { id: 'led1', type: 'wokwi-led', attrs: { color: 'red' } },
 817:     { id: 'pot1', type: 'wokwi-slide-potentiometer', attrs: { value: 64 } },
 818:     { id: 'servo1', type: 'wokwi-servo', attrs: {} },
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 6**
> *Keyword match: "led"*

```typescript
   4: 
   5: import { BaseComponent } from '@openhw/emulator/src/components/BaseComponent.ts';
   6: import { LEDLogic } from '@openhw/emulator/src/components/wokwi-led/logic.ts';
   7: import { UnoLogic } from '@openhw/emulator/src/components/wokwi-arduino-uno/logic.ts';
   8: import { PicoLogic } from './pico-logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 34**
> *Keyword match: "led"*

```typescript
  32: import { ClockGeneratorLogic } from '@openhw/emulator/src/components/logic-clock-generator/logic.ts';
  33: import { WokwiTM1637Logic } from '@openhw/emulator/src/components/wokwi-tm1637-7segment/logic.ts';
  34: import { RGBLEDLogic } from '@openhw/emulator/src/components/wokwi-rgb-led/logic.ts';
  35: import { Nokia5110Logic } from '@openhw/emulator/src/components/wokwi-nokia-5110/logic.ts';
  36: import { L293DLogic } from '@openhw/emulator/src/components/wokwi-l293d/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 2**
> *Keyword match: "led"*

```typescript
   1: import { BaseComponent } from '@openhw/emulator';
   2: import { LEDLogic } from '@openhw/emulator/src/components/openhw-led/logic';
   3: import { UnoLogic } from '@openhw/emulator/src/components/openhw-arduino-uno/logic';
   4: import { Esp32Logic } from '@openhw/emulator/src/components/ESP32/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 37**
> *Keyword match: "led"*

```typescript
  35: import { ClockGeneratorLogic } from '@openhw/emulator/src/components/logic-clock-generator/logic';
  36: import { WokwiTM1637Logic } from '@openhw/emulator/src/components/openhw-tm1637-7segment/logic';
  37: import { RGBLEDLogic } from '@openhw/emulator/src/components/openhw-rgb-led/logic';
  38: import { RotaryEncoderLogic } from '@openhw/emulator/src/components/openhw-rotary-encoder/logic';
  39: import { Nokia5110Logic } from '@openhw/emulator/src/components/openhw-nokia-5110/logic';
```

**`OpenHW-studio-frontend\src\worker\rp2040-smoke-matrix.ts` — Line 88**
> *Keyword match: "led"*

```typescript
  86:     {
  87:       id: 'led1',
  88:       type: 'openhw-led',
  89:       attrs: { color: 'red' },
  90:     },
```

**`OpenHW-studio-frontend\src\worker\rp2040-smoke-matrix.ts` — Line 154**
> *Keyword match: "led"*

```typescript
 152:     { from: 'pico1:3V3', to: 'tft1:VCC' },
 153:     { from: 'pico1:GND', to: 'tft1:GND' },
 154:     { from: 'pico1:3V3', to: 'tft1:LED' },
 155:     { from: 'pico1:GP17', to: 'tft1:CS' },
 156:     { from: 'pico1:GP21', to: 'tft1:RESET' },
```

**`OpenHW-studio-frontend\src\worker\runners\avr-runner.ts` — Line 593**
> *Keyword match: "led"*

```typescript
 591:             inst.setPinVoltage(otherPin, nextVoltage);
 592:             visit(`${compId}:${otherPin}`, nextVoltage);
 593:         } else if (inst.type === 'openhw-led' || inst.type === 'wokwi-led') {
 594:             // Forward bias: Anode to Cathode
 595:             if (pinId === 'A') {
```

**`OpenHW-studio-frontend\src\worker\runners\rp2040-runner.ts` — Line 1284**
> *Keyword match: "led"*

```typescript
1282:         this.debugLastPc = pc;
1283: 
1284:         const firstLed = Array.from(this.instances.values()).find((inst) => inst.type === 'openhw-led' || inst.type === 'openhw-led');
1285:         const ledAnodeV = firstLed ? Number(firstLed.getPinVoltage('A') || 0) : null;
1286:         const ledCathodeV = firstLed ? Number(firstLed.getPinVoltage('K') || 0) : null;
```

**`OpenHW-studio-frontend\src\worker\runners\rp2040-runner.ts` — Line 2762**
> *Keyword match: "led"*

```typescript
2760:             inst.setPinVoltage(otherPin, voltage);
2761:             visit(`${compId}:${otherPin}`);
2762:         } else if (inst.type === 'openhw-led' || inst.type === 'wokwi-led') {
2763:             if (pinId === 'A') {
2764:                 const nextV = Math.max(0, voltage - 1.8);
```

**`OpenHW-studio-frontend\src\workers\autowiring.worker.ts` — Line 54**
> *Keyword match: "led"*

```typescript
  52:     'openhw-resistor': [['p1', 'p2']],
  53:     'wokwi-resistor': [['p1', 'p2']],
  54:     'openhw-led': [['A', 'K']],
  55:     'wokwi-led': [['A', 'K']],
  56:     'openhw-pushbutton': [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\src\workers\autowiring.worker.ts` — Line 55**
> *Keyword match: "led"*

```typescript
  53:     'wokwi-resistor': [['p1', 'p2']],
  54:     'openhw-led': [['A', 'K']],
  55:     'wokwi-led': [['A', 'K']],
  56:     'openhw-pushbutton': [['1l', '1r'], ['2l', '2r']],
  57:     'wokwi-pushbutton': [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\tests\unit\components\AutofixPreviewPanel.test.jsx` — Line 11**
> *Keyword match: "led"*

```typescript
   9: 
  10:     const autofixPlan = {
  11:       description: 'Connect the LED to ground',
  12:       confidence: 0.9,
  13:       reasoning: ['The cathode is floating.', 'Adding a GND connection resolves the violation.'],
```

**`OpenHW-studio-frontend\public\components_examples\LED.png` — Line 100**
> *Keyword match: "led"*

```typescript
  98: A)��BDJ!��RH*A��
  99: A)��BDJ!��RH*A��
 100: A)��BDJ!��R�I���+���   deBG664EC568CB7F14D5Zf��    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"led_1","type":"openhw-led","label":"LED","x":394.2,"y":362.6,"w":65.3,"h":65.3,"rotation":0,"attrs":{"color":"red","breadboard":{"anchorPin":"A"}}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:01:19.955Z"}
```

**`OpenHW-studio-frontend\public\components_examples\MAX30102_Heart_Rate.png` — Line 167**
> *Keyword match: "led"*

```typescript
 165: \�$$u�(��q^��r�2��e��C�CS��o���CuJK�.��t=3d���YL0�̩叮��fِ�7	Q	�?��@r�+{�bߌ��n��~b±w�jqOg�-f ���nCr���+�1� ���<>')���#�M͉F���aJ�Fug�O7ƋcĢ~�h4r"N��U�����a�~qiF�3GZ,`u�&��W�w�x����[������ܳsq=3�Ϊ/�H�9]Z����'
 166: �EYYY3�W����]Þ~�\wrV:^bc�}4�{@��R��h��e��B*�~d�  �C�w�2��p��W��f?l~5�o�9�G�e���H��K�b�|!��व��Tt�@�  ^IDAT����E�_E���я@>�tº<1v�`��yun�=�̎�B,B�k����?;V���� ��%s�h��J$�Ӓ��Wj�x�����9��.�#��J�c���81�J�΂_���8��NO�x��:׭^��}�]�}���P��eTt��7�b�6�/�N���x~�9�f�3�������Q�@$�Z��#���? �+�I���,��bp��0%:yA������[���5R��#&e�%5��{�d.E����Wb_�w����:�*<��p�G�i���*3��ӹ�bK9�"��A�;M�X٣�5݌�y:5,(}�ۚs��``1(��@S�%Y�{+���;IHѕH$���{s�b���O3~���4�5KѕH$�c�h�]��X��+�H$� ��b�lc�]��X��+�H$��6�L�T��Dr,HѕH$�����+�H$I3!EW"�HNzx7�B%N5Amw����t�e8d��+3��Ԉ	����r�4P�TQ��!��šPTji L��C����@�8�1И�}X��S�E�`�*��D��}�休�Ǔ��r'9��)5@�&���(�;�ˮ0�B�[�����t)�IU��.G�R^C,V�Q�J]�.U������ �j�݆�K�ѳ�7����]�D"9Ɍ[�Rj�l��6�n�#�-)s0d�6B�eՑt_u ł�+bq�:����,5bZJ�`�D3,��bG!L/Ş�v�UU��������͕5l8&�*L�E ����`N,"���)��n�ج?8���|�63F隍�M#��L�,l`��F� ��P!E��c�� ��R�J8%�,�d�a:�vS���P=V8D
 167: ����q{ƻ�õ������k�xڛ��5n��À����HѕH$�����+�H$I3!EW"�H$�fB��D"�H$̈́]�D"�H�	)��D"�4Rt%�D"i&��J$�D�LHѕH$�����+�H$I3!EW"�H$�fB��D"�H$̈́]�D"�H�	)��D"�4Rt%�D"i&��J$�D�LHѕH$�����+�H$I3!EW"�H$�fB��D"�H$̈́]�D"�H�	)��D"�4���)yw   deBGAD772173EF565036�m�,    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"max30102_1","type":"max30102","label":"MAX30102 Heart Rate","x":333.7,"y":312.6,"w":198,"h":158.4,"rotation":0,"attrs":{"i2cAddress":"0x57","redLed":{"label":"Red LED (660nm)","type":"number","default":0},"irLed":{"label":"IR LED (880nm)","type":"number","default":0}}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:04:22.231Z"}
```

**`OpenHW-studio-frontend\public\components_examples\RBG_LED_4pin.png` — Line 147**
> *Keyword match: "led"*

```typescript
 145: ��@��D��c�����;�aכ��|a4�J���M�4n@�RQ Bb��H��ؠ@"��!$6(�!�A�D�
 146: $BHlP Bb��H��ؠ@"��!$6(�!�A�D�
 147: $BHlP Bb��H��ؠ@"��!$6(�!��'�bj��1�4   deBGCF17778AD026E2AA�v�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"rgb_led_1","type":"openhw-rgb-led","label":"RGB LED (4-pin)","x":390,"y":345,"w":75,"h":105,"rotation":0,"attrs":{"common":"cathode","breadboard":{"anchorPin":"R"}}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:02:57.949Z"}
```

**`OpenHW-studio-frontend\public\components_examples\SPI_LED_Driver_NLSE595.png` — Line 120**
> *Keyword match: "led"*

```typescript
 118: o�U�_7A�N���Z��Nȸ\���O����?��I�	�p,�A|YH�	��>t�����A_t������� ė�� ��@�N�K A'�F?�JT{�8ĵ�#���X�d�$M;�%|�ii�:W$�����2h��eEa�~PR\\RtEE�m�) ��!)%$a�q
 119: �c@
 120: m�z�ˌ����$Y�`K	<�P���������z}�z�[���MP��ݒɽ2���V�G��S�T�K��UKV��y��,�&�fM9�|H���^Uiv{��8D�>S�5ǌ)�1EE�t���s�������'�T�+Oi����x�d&}�©@$˷!�M����$�#	[MY�3$S)�����A�̊>�9�m�j���56�)s�5'�tq�`�0!�l�0f�̈�|3���� cH�&;�e\v���[�&�ن���I��,�l\`��%� ���U��ih*�&ɠ�Sd��VI������TY5u5�N&�"�є�sw�[����0�#�#����E�uf�O��k�l�o+$�A�t� �^	:AD/�� ��@�N�K A'��%��A�H�	� z	$�A�t� �^	:AD/�� ��@�N�K A'��%��A�H�	� z	$�A�t� �^	:AD/�� ��@�N�K A'��%�?�dr�9��   deBG3C4F2242DD33F70Cj��    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"nlsf595_1","type":"openhw-nlsf595","label":"SPI LED Driver (NLSF595)","x":364,"y":364,"w":128,"h":64,"rotation":0,"attrs":{}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:03:55.313Z"}
```

**`OpenHW-studio-frontend\public\components_examples\WS2812B_RGB_LED.png` — Line 89**
> *Keyword match: "led"*

```typescript
  87: '�cR�89�����.NǤpqr8&����1)\��I���pL
  88: '�cR�89�����.NǤpqr8&����1)\��I���pL
  89: '�cR�89�����.NǤpqr8&����1)�~,)��5   deBG9B608641F4F2743Ed�^    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"neopixel_matrix_1","type":"openhw-neopixel-matrix","label":"WS2812B RGB LED","x":405,"y":375,"w":30,"h":30,"rotation":0,"attrs":{"rows":"1","cols":"1"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:02:19.304Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 46**
> *Keyword match: "led"*

```typescript
  44: const SUB_CATEGORIES = {
  45:   addons: [
  46:     { id: 'addons_led', label: 'Led' },
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 47**
> *Keyword match: "led"*

```typescript
  45:   addons: [
  46:     { id: 'addons_led', label: 'Led' },
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "led"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 9**
> *Keyword match: "led"*

```typescript
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
  11: ]
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 2**
> *Keyword match: "led"*

```typescript
   1: import React from 'react';
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 3**
> *Keyword match: "led"*

```typescript
   1: import React from 'react';
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 5**
> *Keyword match: "led"*

```typescript
   3: const COMPONENT_COLORS = {
   4:   'openhw-arduino-uno': '#1a5276',
   5:   'openhw-led': '#e74c3c',
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 6**
> *Keyword match: "led"*

```typescript
   4:   'openhw-arduino-uno': '#1a5276',
   5:   'openhw-led': '#e74c3c',
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 40**
> *Keyword match: "led"*

```typescript
  38:   const t = title ? title.toLowerCase() : ''
  39:   
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 41**
> *Keyword match: "led"*

```typescript
  39:   
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
```

**`OpenHW-studio-frontend\src\esp32\components\SimulatorWorkspace.jsx` — Line 41**
> *Keyword match: "led"*

```typescript
  39:   { type: 'button', pin: 0,  label: 'BOOT'  },
  40:   { type: 'button', pin: 2,  label: 'BTN 2' },
  41:   { type: 'led',    pin: 2,  label: 'LED 2', color: '#00ff88' },
  42:   { type: 'led',    pin: 4,  label: 'LED 4', color: '#00d4ff' },
  43:   { type: 'led',    pin: 13, label: 'LED 13', color: '#f59e0b' },
```

**`OpenHW-studio-frontend\src\esp32\components\SimulatorWorkspace.jsx` — Line 42**
> *Keyword match: "led"*

```typescript
  40:   { type: 'button', pin: 2,  label: 'BTN 2' },
  41:   { type: 'led',    pin: 2,  label: 'LED 2', color: '#00ff88' },
  42:   { type: 'led',    pin: 4,  label: 'LED 4', color: '#00d4ff' },
  43:   { type: 'led',    pin: 13, label: 'LED 13', color: '#f59e0b' },
  44: ];
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 4**
> *Keyword match: "led"*

```typescript
   2: 
   3: import { BaseComponent } from '@openhw/emulator/src/components/BaseComponent.ts';
   4: import { LEDLogic } from '@openhw/emulator/src/components/wokwi-led/logic.ts';
   5: import { UnoLogic } from '@openhw/emulator/src/components/wokwi-arduino-uno/logic.ts';
   6: import { ResistorLogic } from '@openhw/emulator/src/components/wokwi-resistor/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 54**
> *Keyword match: "led"*

```typescript
  52: 
  53: export const LOGIC_REGISTRY: Record<string, any> = {
  54:     'wokwi-led': LEDLogic,
  55:     'wokwi-arduino-uno': UnoLogic,
  56:     'wokwi-resistor': ResistorLogic,
```

**`OpenHW-studio-frontend\src\pages\simulationpage\components\CanvasSceneLayer.jsx` — Line 476**
> *Keyword match: "led"*

```typescript
 474:           <p style={{ fontSize: 16, marginBottom: 8 }}>Drag components from the left panel</p>
 475:           <p style={{ fontSize: 12, color: 'var(--text3)', fontFamily: 'JetBrains Mono, monospace' }}>
 476:             Arduino Uno · LED · Resistor · Button · Servo · LCD
 477:           </p>
 478:         </div>
```

**`OpenHW-studio-frontend\src\pages\simulationpage\components\TourGuide.jsx` — Line 364**
> *Keyword match: "led"*

```typescript
 362:     if (step.id === 'wiring') {
 363:       if (demoPhase <= 2) selector = '[id*="pin-dot-demo-comp-tour-13"]';
 364:       else if (demoPhase <= 4) selector = '[id*="pin-dot-demo-led-tour-A"]';
 365:       else if (demoPhase <= 6) selector = '[id*="pin-dot-demo-comp-tour-gnd_3"]';
 366:       else selector = '[id*="pin-dot-demo-led-tour-K"]';
```

**`OpenHW-studio-frontend\src\pages\simulationpage\components\TourGuide.jsx` — Line 366**
> *Keyword match: "led"*

```typescript
 364:       else if (demoPhase <= 4) selector = '[id*="pin-dot-demo-led-tour-A"]';
 365:       else if (demoPhase <= 6) selector = '[id*="pin-dot-demo-comp-tour-gnd_3"]';
 366:       else selector = '[id*="pin-dot-demo-led-tour-K"]';
 367:     }
 368:     if (step.id === 'autowiring') {
```

**`OpenHW-studio-frontend\src\pages\simulationpage\utils\componentVisibilityConfig.js` — Line 90**
> *Keyword match: "led"*

```typescript
  88:     working: [
  89:       'ESP32 GPIO & Flash Memory',
  90:       'Onboard Flashlight LED'
  91:     ],
  92:     inProgress: [
```

**`OpenHW-studio-frontend\src\worker\autofix.worker.ts` — Line 25**
> *Keyword match: "led"*

```typescript
  23:   'openhw-resistor':    [['p1', 'p2'], ['1', '2']],
  24:   'wokwi-resistor':     [['p1', 'p2'], ['1', '2']],
  25:   'openhw-led':         [['A', 'K']],
  26:   'wokwi-led':          [['A', 'K']],
  27:   'openhw-pushbutton':  [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\src\worker\autofix.worker.ts` — Line 26**
> *Keyword match: "led"*

```typescript
  24:   'wokwi-resistor':     [['p1', 'p2'], ['1', '2']],
  25:   'openhw-led':         [['A', 'K']],
  26:   'wokwi-led':          [['A', 'K']],
  27:   'openhw-pushbutton':  [['1l', '1r'], ['2l', '2r']],
  28:   'wokwi-pushbutton':   [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 801**
> *Keyword match: "led"*

```typescript
 799:   const components = [
 800:     makePicoBoard('pico1'),
 801:     { id: 'led1', type: 'wokwi-led', attrs: { color: 'green' } },
 802:   ];
 803: 
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 816**
> *Keyword match: "led"*

```typescript
 814:   const components = [
 815:     makePicoBoard('pico1'),
 816:     { id: 'led1', type: 'wokwi-led', attrs: { color: 'red' } },
 817:     { id: 'pot1', type: 'wokwi-slide-potentiometer', attrs: { value: 64 } },
 818:     { id: 'servo1', type: 'wokwi-servo', attrs: {} },
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 6**
> *Keyword match: "led"*

```typescript
   4: 
   5: import { BaseComponent } from '@openhw/emulator/src/components/BaseComponent.ts';
   6: import { LEDLogic } from '@openhw/emulator/src/components/wokwi-led/logic.ts';
   7: import { UnoLogic } from '@openhw/emulator/src/components/wokwi-arduino-uno/logic.ts';
   8: import { PicoLogic } from './pico-logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 34**
> *Keyword match: "led"*

```typescript
  32: import { ClockGeneratorLogic } from '@openhw/emulator/src/components/logic-clock-generator/logic.ts';
  33: import { WokwiTM1637Logic } from '@openhw/emulator/src/components/wokwi-tm1637-7segment/logic.ts';
  34: import { RGBLEDLogic } from '@openhw/emulator/src/components/wokwi-rgb-led/logic.ts';
  35: import { Nokia5110Logic } from '@openhw/emulator/src/components/wokwi-nokia-5110/logic.ts';
  36: import { L293DLogic } from '@openhw/emulator/src/components/wokwi-l293d/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 2**
> *Keyword match: "led"*

```typescript
   1: import { BaseComponent } from '@openhw/emulator';
   2: import { LEDLogic } from '@openhw/emulator/src/components/openhw-led/logic';
   3: import { UnoLogic } from '@openhw/emulator/src/components/openhw-arduino-uno/logic';
   4: import { Esp32Logic } from '@openhw/emulator/src/components/ESP32/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 37**
> *Keyword match: "led"*

```typescript
  35: import { ClockGeneratorLogic } from '@openhw/emulator/src/components/logic-clock-generator/logic';
  36: import { WokwiTM1637Logic } from '@openhw/emulator/src/components/openhw-tm1637-7segment/logic';
  37: import { RGBLEDLogic } from '@openhw/emulator/src/components/openhw-rgb-led/logic';
  38: import { RotaryEncoderLogic } from '@openhw/emulator/src/components/openhw-rotary-encoder/logic';
  39: import { Nokia5110Logic } from '@openhw/emulator/src/components/openhw-nokia-5110/logic';
```

**`OpenHW-studio-frontend\src\worker\rp2040-smoke-matrix.ts` — Line 88**
> *Keyword match: "led"*

```typescript
  86:     {
  87:       id: 'led1',
  88:       type: 'openhw-led',
  89:       attrs: { color: 'red' },
  90:     },
```

**`OpenHW-studio-frontend\src\worker\rp2040-smoke-matrix.ts` — Line 154**
> *Keyword match: "led"*

```typescript
 152:     { from: 'pico1:3V3', to: 'tft1:VCC' },
 153:     { from: 'pico1:GND', to: 'tft1:GND' },
 154:     { from: 'pico1:3V3', to: 'tft1:LED' },
 155:     { from: 'pico1:GP17', to: 'tft1:CS' },
 156:     { from: 'pico1:GP21', to: 'tft1:RESET' },
```

**`OpenHW-studio-frontend\src\worker\runners\avr-runner.ts` — Line 593**
> *Keyword match: "led"*

```typescript
 591:             inst.setPinVoltage(otherPin, nextVoltage);
 592:             visit(`${compId}:${otherPin}`, nextVoltage);
 593:         } else if (inst.type === 'openhw-led' || inst.type === 'wokwi-led') {
 594:             // Forward bias: Anode to Cathode
 595:             if (pinId === 'A') {
```

**`OpenHW-studio-frontend\src\worker\runners\rp2040-runner.ts` — Line 1284**
> *Keyword match: "led"*

```typescript
1282:         this.debugLastPc = pc;
1283: 
1284:         const firstLed = Array.from(this.instances.values()).find((inst) => inst.type === 'openhw-led' || inst.type === 'openhw-led');
1285:         const ledAnodeV = firstLed ? Number(firstLed.getPinVoltage('A') || 0) : null;
1286:         const ledCathodeV = firstLed ? Number(firstLed.getPinVoltage('K') || 0) : null;
```

**`OpenHW-studio-frontend\src\worker\runners\rp2040-runner.ts` — Line 2762**
> *Keyword match: "led"*

```typescript
2760:             inst.setPinVoltage(otherPin, voltage);
2761:             visit(`${compId}:${otherPin}`);
2762:         } else if (inst.type === 'openhw-led' || inst.type === 'wokwi-led') {
2763:             if (pinId === 'A') {
2764:                 const nextV = Math.max(0, voltage - 1.8);
```

**`OpenHW-studio-frontend\src\workers\autowiring.worker.ts` — Line 54**
> *Keyword match: "led"*

```typescript
  52:     'openhw-resistor': [['p1', 'p2']],
  53:     'wokwi-resistor': [['p1', 'p2']],
  54:     'openhw-led': [['A', 'K']],
  55:     'wokwi-led': [['A', 'K']],
  56:     'openhw-pushbutton': [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\src\workers\autowiring.worker.ts` — Line 55**
> *Keyword match: "led"*

```typescript
  53:     'wokwi-resistor': [['p1', 'p2']],
  54:     'openhw-led': [['A', 'K']],
  55:     'wokwi-led': [['A', 'K']],
  56:     'openhw-pushbutton': [['1l', '1r'], ['2l', '2r']],
  57:     'wokwi-pushbutton': [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\tests\unit\components\AutofixPreviewPanel.test.jsx` — Line 11**
> *Keyword match: "led"*

```typescript
   9: 
  10:     const autofixPlan = {
  11:       description: 'Connect the LED to ground',
  12:       confidence: 0.9,
  13:       reasoning: ['The cathode is floating.', 'Adding a GND connection resolves the violation.'],
```

**`OpenHW-studio-frontend\public\components_examples\LED.png` — Line 100**
> *Keyword match: "led"*

```typescript
  98: A)��BDJ!��RH*A��
  99: A)��BDJ!��RH*A��
 100: A)��BDJ!��R�I���+���   deBG664EC568CB7F14D5Zf��    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"led_1","type":"openhw-led","label":"LED","x":394.2,"y":362.6,"w":65.3,"h":65.3,"rotation":0,"attrs":{"color":"red","breadboard":{"anchorPin":"A"}}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:01:19.955Z"}
```

**`OpenHW-studio-frontend\public\components_examples\MAX30102_Heart_Rate.png` — Line 167**
> *Keyword match: "led"*

```typescript
 165: \�$$u�(��q^��r�2��e��C�CS��o���CuJK�.��t=3d���YL0�̩叮��fِ�7	Q	�?��@r�+{�bߌ��n��~b±w�jqOg�-f ���nCr���+�1� ���<>')���#�M͉F���aJ�Fug�O7ƋcĢ~�h4r"N��U�����a�~qiF�3GZ,`u�&��W�w�x����[������ܳsq=3�Ϊ/�H�9]Z����'
 166: �EYYY3�W����]Þ~�\wrV:^bc�}4�{@��R��h��e��B*�~d�  �C�w�2��p��W��f?l~5�o�9�G�e���H��K�b�|!��व��Tt�@�  ^IDAT����E�_E���я@>�tº<1v�`��yun�=�̎�B,B�k����?;V���� ��%s�h��J$�Ӓ��Wj�x�����9��.�#��J�c���81�J�΂_���8��NO�x��:׭^��}�]�}���P��eTt��7�b�6�/�N���x~�9�f�3�������Q�@$�Z��#���? �+�I���,��bp��0%:yA������[���5R��#&e�%5��{�d.E����Wb_�w����:�*<��p�G�i���*3��ӹ�bK9�"��A�;M�X٣�5݌�y:5,(}�ۚs��``1(��@S�%Y�{+���;IHѕH$���{s�b���O3~���4�5KѕH$�c�h�]��X��+�H$� ��b�lc�]��X��+�H$��6�L�T��Dr,HѕH$�����+�H$I3!EW"�HNzx7�B%N5Amw����t�e8d��+3��Ԉ	����r�4P�TQ��!��šPTji L��C����@�8�1И�}X��S�E�`�*��D��}�休�Ǔ��r'9��)5@�&���(�;�ˮ0�B�[�����t)�IU��.G�R^C,V�Q�J]�.U������ �j�݆�K�ѳ�7����]�D"9Ɍ[�Rj�l��6�n�#�-)s0d�6B�eՑt_u ł�+bq�:����,5bZJ�`�D3,��bG!L/Ş�v�UU��������͕5l8&�*L�E ����`N,"���)��n�ج?8���|�63F隍�M#��L�,l`��F� ��P!E��c�� ��R�J8%�,�d�a:�vS���P=V8D
 167: ����q{ƻ�õ������k�xڛ��5n��À����HѕH$�����+�H$I3!EW"�H$�fB��D"�H$̈́]�D"�H�	)��D"�4Rt%�D"i&��J$�D�LHѕH$�����+�H$I3!EW"�H$�fB��D"�H$̈́]�D"�H�	)��D"�4Rt%�D"i&��J$�D�LHѕH$�����+�H$I3!EW"�H$�fB��D"�H$̈́]�D"�H�	)��D"�4���)yw   deBGAD772173EF565036�m�,    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"max30102_1","type":"max30102","label":"MAX30102 Heart Rate","x":333.7,"y":312.6,"w":198,"h":158.4,"rotation":0,"attrs":{"i2cAddress":"0x57","redLed":{"label":"Red LED (660nm)","type":"number","default":0},"irLed":{"label":"IR LED (880nm)","type":"number","default":0}}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:04:22.231Z"}
```

**`OpenHW-studio-frontend\public\components_examples\RBG_LED_4pin.png` — Line 147**
> *Keyword match: "led"*

```typescript
 145: ��@��D��c�����;�aכ��|a4�J���M�4n@�RQ Bb��H��ؠ@"��!$6(�!�A�D�
 146: $BHlP Bb��H��ؠ@"��!$6(�!�A�D�
 147: $BHlP Bb��H��ؠ@"��!$6(�!��'�bj��1�4   deBGCF17778AD026E2AA�v�    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"rgb_led_1","type":"openhw-rgb-led","label":"RGB LED (4-pin)","x":390,"y":345,"w":75,"h":105,"rotation":0,"attrs":{"common":"cathode","breadboard":{"anchorPin":"R"}}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:02:57.949Z"}
```

**`OpenHW-studio-frontend\public\components_examples\SPI_LED_Driver_NLSE595.png` — Line 120**
> *Keyword match: "led"*

```typescript
 118: o�U�_7A�N���Z��Nȸ\���O����?��I�	�p,�A|YH�	��>t�����A_t������� ė�� ��@�N�K A'�F?�JT{�8ĵ�#���X�d�$M;�%|�ii�:W$�����2h��eEa�~PR\\RtEE�m�) ��!)%$a�q
 119: �c@
 120: m�z�ˌ����$Y�`K	<�P���������z}�z�[���MP��ݒɽ2���V�G��S�T�K��UKV��y��,�&�fM9�|H���^Uiv{��8D�>S�5ǌ)�1EE�t���s�������'�T�+Oi����x�d&}�©@$˷!�M����$�#	[MY�3$S)�����A�̊>�9�m�j���56�)s�5'�tq�`�0!�l�0f�̈�|3���� cH�&;�e\v���[�&�ن���I��,�l\`��%� ���U��ih*�&ɠ�Sd��VI������TY5u5�N&�"�є�sw�[����0�#�#����E�uf�O��k�l�o+$�A�t� �^	:AD/�� ��@�N�K A'��%��A�H�	� z	$�A�t� �^	:AD/�� ��@�N�K A'��%��A�H�	� z	$�A�t� �^	:AD/�� ��@�N�K A'��%�?�dr�9��   deBG3C4F2242DD33F70Cj��    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"nlsf595_1","type":"openhw-nlsf595","label":"SPI LED Driver (NLSF595)","x":364,"y":364,"w":128,"h":64,"rotation":0,"attrs":{}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:03:55.313Z"}
```

**`OpenHW-studio-frontend\public\components_examples\WS2812B_RGB_LED.png` — Line 89**
> *Keyword match: "led"*

```typescript
  87: '�cR�89�����.NǤpqr8&����1)\��I���pL
  88: '�cR�89�����.NǤpqr8&����1)\��I���pL
  89: '�cR�89�����.NǤpqr8&����1)�~,)��5   deBG9B608641F4F2743Ed�^    IEND�B`� OPENHW_META {"schemaVersion":"openhw-project-v2","board":"arduino_uno","components":[{"id":"neopixel_matrix_1","type":"openhw-neopixel-matrix","label":"WS2812B RGB LED","x":405,"y":375,"w":30,"h":30,"rotation":0,"attrs":{"rows":"1","cols":"1"}}],"connections":[],"blocklyXml":"","blocklyGeneratedCode":"","useBlocklyCode":false,"projectFiles":[{"id":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","path":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","name":"arduino_sensor_shield_1.ino","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"{}","dirty":true},{"id":"project/arduino_sensor_shield_1/library.txt","path":"project/arduino_sensor_shield_1/library.txt","name":"library.txt","kind":"code","boardId":"arduino_sensor_shield_1","boardKind":"arduino_uno","content":"# Add your libraries here (one per line, e.g. ArduinoJson@6.21.3)\n","dirty":false}],"openCodeTabs":["project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino"],"activeCodeFileId":"project/arduino_sensor_shield_1/arduino_sensor_shield_1.ino","code":"{}","exportedAt":"2026-07-10T11:02:19.304Z"}
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 46**
> *Keyword match: "led"*

```typescript
  44: const SUB_CATEGORIES = {
  45:   addons: [
  46:     { id: 'addons_led', label: 'Led' },
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
```

**`OpenHW-studio-frontend\src\components\BlocklyEditor.jsx` — Line 47**
> *Keyword match: "led"*

```typescript
  45:   addons: [
  46:     { id: 'addons_led', label: 'Led' },
  47:     { id: 'addons_rgb_led', label: 'RGB LED' },
  48:     { id: 'addons_motor', label: 'Motor' },
  49:     { id: 'addons_buzzer', label: 'Passive Buzzer' },
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 8**
> *Keyword match: "led"*

```typescript
   6: // ─── World config ────────────────────────────────────────────────────────────
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
```

**`OpenHW-studio-frontend\src\components\common\AdventureMapEmbed.jsx` — Line 9**
> *Keyword match: "led"*

```typescript
   7: const WORLDS = [
   8:   { id: 1, name: 'Circuit Basics',     color: '#22c55e', icon: '⚡', slugs: ['led-blink','rgb-led','buzzer','potentiometer','ldr'] },
   9:   { id: 2, name: 'Signal Control',     color: '#3b82f6', icon: '🎮', slugs: ['servo-motor','led-strip','button-debounce','temperature-sensor'] },
  10:   { id: 3, name: 'Machines & Sensors', color: '#f97316', icon: '🤖', slugs: ['dc-motor'] },
  11: ]
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 2**
> *Keyword match: "led"*

```typescript
   1: import React from 'react';
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
```

**`OpenHW-studio-frontend\src\components\common\ProjectIcon.jsx` — Line 3**
> *Keyword match: "led"*

```typescript
   1: import React from 'react';
   2: import openhwLed from '@openhw/emulator/src/components/openhw-led';
   3: import openhwRGBLED from '@openhw/emulator/src/components/openhw-rgb-led';
   4: import openhwBuzzer from '@openhw/emulator/src/components/openhw-buzzer';
   5: import openhwPotentiometer from '@openhw/emulator/src/components/openhw-potentiometer';
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 5**
> *Keyword match: "led"*

```typescript
   3: const COMPONENT_COLORS = {
   4:   'openhw-arduino-uno': '#1a5276',
   5:   'openhw-led': '#e74c3c',
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
```

**`OpenHW-studio-frontend\src\components\guided\CircuitCanvas.jsx` — Line 6**
> *Keyword match: "led"*

```typescript
   4:   'openhw-arduino-uno': '#1a5276',
   5:   'openhw-led': '#e74c3c',
   6:   'openhw-rgb-led': '#8e44ad',
   7:   'openhw-resistor': '#f39c12',
   8:   'openhw-buzzer': '#27ae60',
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 40**
> *Keyword match: "led"*

```typescript
  38:   const t = title ? title.toLowerCase() : ''
  39:   
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
```

**`OpenHW-studio-frontend\src\components\student\GuidedProjectsSection.jsx` — Line 41**
> *Keyword match: "led"*

```typescript
  39:   
  40:   if (t.includes('rgb led')) return Palette
  41:   if (t.includes('led') || s.includes('led')) return Microchip
  42:   if (t.includes('buzzer') || t.includes('alarm') || t.includes('sound')) return Megaphone
  43:   if (t.includes('traffic light') || s.includes('traffic')) return TrafficLight
```

**`OpenHW-studio-frontend\src\esp32\components\SimulatorWorkspace.jsx` — Line 41**
> *Keyword match: "led"*

```typescript
  39:   { type: 'button', pin: 0,  label: 'BOOT'  },
  40:   { type: 'button', pin: 2,  label: 'BTN 2' },
  41:   { type: 'led',    pin: 2,  label: 'LED 2', color: '#00ff88' },
  42:   { type: 'led',    pin: 4,  label: 'LED 4', color: '#00d4ff' },
  43:   { type: 'led',    pin: 13, label: 'LED 13', color: '#f59e0b' },
```

**`OpenHW-studio-frontend\src\esp32\components\SimulatorWorkspace.jsx` — Line 42**
> *Keyword match: "led"*

```typescript
  40:   { type: 'button', pin: 2,  label: 'BTN 2' },
  41:   { type: 'led',    pin: 2,  label: 'LED 2', color: '#00ff88' },
  42:   { type: 'led',    pin: 4,  label: 'LED 4', color: '#00d4ff' },
  43:   { type: 'led',    pin: 13, label: 'LED 13', color: '#f59e0b' },
  44: ];
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 4**
> *Keyword match: "led"*

```typescript
   2: 
   3: import { BaseComponent } from '@openhw/emulator/src/components/BaseComponent.ts';
   4: import { LEDLogic } from '@openhw/emulator/src/components/wokwi-led/logic.ts';
   5: import { UnoLogic } from '@openhw/emulator/src/components/wokwi-arduino-uno/logic.ts';
   6: import { ResistorLogic } from '@openhw/emulator/src/components/wokwi-resistor/logic.ts';
```

**`OpenHW-studio-frontend\src\esp32\worker\execute.ts` — Line 54**
> *Keyword match: "led"*

```typescript
  52: 
  53: export const LOGIC_REGISTRY: Record<string, any> = {
  54:     'wokwi-led': LEDLogic,
  55:     'wokwi-arduino-uno': UnoLogic,
  56:     'wokwi-resistor': ResistorLogic,
```

**`OpenHW-studio-frontend\src\pages\simulationpage\components\CanvasSceneLayer.jsx` — Line 476**
> *Keyword match: "led"*

```typescript
 474:           <p style={{ fontSize: 16, marginBottom: 8 }}>Drag components from the left panel</p>
 475:           <p style={{ fontSize: 12, color: 'var(--text3)', fontFamily: 'JetBrains Mono, monospace' }}>
 476:             Arduino Uno · LED · Resistor · Button · Servo · LCD
 477:           </p>
 478:         </div>
```

**`OpenHW-studio-frontend\src\pages\simulationpage\components\TourGuide.jsx` — Line 364**
> *Keyword match: "led"*

```typescript
 362:     if (step.id === 'wiring') {
 363:       if (demoPhase <= 2) selector = '[id*="pin-dot-demo-comp-tour-13"]';
 364:       else if (demoPhase <= 4) selector = '[id*="pin-dot-demo-led-tour-A"]';
 365:       else if (demoPhase <= 6) selector = '[id*="pin-dot-demo-comp-tour-gnd_3"]';
 366:       else selector = '[id*="pin-dot-demo-led-tour-K"]';
```

**`OpenHW-studio-frontend\src\pages\simulationpage\components\TourGuide.jsx` — Line 366**
> *Keyword match: "led"*

```typescript
 364:       else if (demoPhase <= 4) selector = '[id*="pin-dot-demo-led-tour-A"]';
 365:       else if (demoPhase <= 6) selector = '[id*="pin-dot-demo-comp-tour-gnd_3"]';
 366:       else selector = '[id*="pin-dot-demo-led-tour-K"]';
 367:     }
 368:     if (step.id === 'autowiring') {
```

**`OpenHW-studio-frontend\src\pages\simulationpage\utils\componentVisibilityConfig.js` — Line 90**
> *Keyword match: "led"*

```typescript
  88:     working: [
  89:       'ESP32 GPIO & Flash Memory',
  90:       'Onboard Flashlight LED'
  91:     ],
  92:     inProgress: [
```

**`OpenHW-studio-frontend\src\worker\autofix.worker.ts` — Line 25**
> *Keyword match: "led"*

```typescript
  23:   'openhw-resistor':    [['p1', 'p2'], ['1', '2']],
  24:   'wokwi-resistor':     [['p1', 'p2'], ['1', '2']],
  25:   'openhw-led':         [['A', 'K']],
  26:   'wokwi-led':          [['A', 'K']],
  27:   'openhw-pushbutton':  [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\src\worker\autofix.worker.ts` — Line 26**
> *Keyword match: "led"*

```typescript
  24:   'wokwi-resistor':     [['p1', 'p2'], ['1', '2']],
  25:   'openhw-led':         [['A', 'K']],
  26:   'wokwi-led':          [['A', 'K']],
  27:   'openhw-pushbutton':  [['1l', '1r'], ['2l', '2r']],
  28:   'wokwi-pushbutton':   [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 801**
> *Keyword match: "led"*

```typescript
 799:   const components = [
 800:     makePicoBoard('pico1'),
 801:     { id: 'led1', type: 'wokwi-led', attrs: { color: 'green' } },
 802:   ];
 803: 
```

**`OpenHW-studio-frontend\src\worker\cli-hardware-compat-matrix.ts` — Line 816**
> *Keyword match: "led"*

```typescript
 814:   const components = [
 815:     makePicoBoard('pico1'),
 816:     { id: 'led1', type: 'wokwi-led', attrs: { color: 'red' } },
 817:     { id: 'pot1', type: 'wokwi-slide-potentiometer', attrs: { value: 64 } },
 818:     { id: 'servo1', type: 'wokwi-servo', attrs: {} },
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 6**
> *Keyword match: "led"*

```typescript
   4: 
   5: import { BaseComponent } from '@openhw/emulator/src/components/BaseComponent.ts';
   6: import { LEDLogic } from '@openhw/emulator/src/components/wokwi-led/logic.ts';
   7: import { UnoLogic } from '@openhw/emulator/src/components/wokwi-arduino-uno/logic.ts';
   8: import { PicoLogic } from './pico-logic.ts';
```

**`OpenHW-studio-frontend\src\worker\execute_old.ts` — Line 34**
> *Keyword match: "led"*

```typescript
  32: import { ClockGeneratorLogic } from '@openhw/emulator/src/components/logic-clock-generator/logic.ts';
  33: import { WokwiTM1637Logic } from '@openhw/emulator/src/components/wokwi-tm1637-7segment/logic.ts';
  34: import { RGBLEDLogic } from '@openhw/emulator/src/components/wokwi-rgb-led/logic.ts';
  35: import { Nokia5110Logic } from '@openhw/emulator/src/components/wokwi-nokia-5110/logic.ts';
  36: import { L293DLogic } from '@openhw/emulator/src/components/wokwi-l293d/logic.ts';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 2**
> *Keyword match: "led"*

```typescript
   1: import { BaseComponent } from '@openhw/emulator';
   2: import { LEDLogic } from '@openhw/emulator/src/components/openhw-led/logic';
   3: import { UnoLogic } from '@openhw/emulator/src/components/openhw-arduino-uno/logic';
   4: import { Esp32Logic } from '@openhw/emulator/src/components/ESP32/logic';
```

**`OpenHW-studio-frontend\src\worker\registries\component-registry.ts` — Line 37**
> *Keyword match: "led"*

```typescript
  35: import { ClockGeneratorLogic } from '@openhw/emulator/src/components/logic-clock-generator/logic';
  36: import { WokwiTM1637Logic } from '@openhw/emulator/src/components/openhw-tm1637-7segment/logic';
  37: import { RGBLEDLogic } from '@openhw/emulator/src/components/openhw-rgb-led/logic';
  38: import { RotaryEncoderLogic } from '@openhw/emulator/src/components/openhw-rotary-encoder/logic';
  39: import { Nokia5110Logic } from '@openhw/emulator/src/components/openhw-nokia-5110/logic';
```

**`OpenHW-studio-frontend\src\worker\rp2040-smoke-matrix.ts` — Line 88**
> *Keyword match: "led"*

```typescript
  86:     {
  87:       id: 'led1',
  88:       type: 'openhw-led',
  89:       attrs: { color: 'red' },
  90:     },
```

**`OpenHW-studio-frontend\src\worker\rp2040-smoke-matrix.ts` — Line 154**
> *Keyword match: "led"*

```typescript
 152:     { from: 'pico1:3V3', to: 'tft1:VCC' },
 153:     { from: 'pico1:GND', to: 'tft1:GND' },
 154:     { from: 'pico1:3V3', to: 'tft1:LED' },
 155:     { from: 'pico1:GP17', to: 'tft1:CS' },
 156:     { from: 'pico1:GP21', to: 'tft1:RESET' },
```

**`OpenHW-studio-frontend\src\worker\runners\avr-runner.ts` — Line 593**
> *Keyword match: "led"*

```typescript
 591:             inst.setPinVoltage(otherPin, nextVoltage);
 592:             visit(`${compId}:${otherPin}`, nextVoltage);
 593:         } else if (inst.type === 'openhw-led' || inst.type === 'wokwi-led') {
 594:             // Forward bias: Anode to Cathode
 595:             if (pinId === 'A') {
```

**`OpenHW-studio-frontend\src\worker\runners\rp2040-runner.ts` — Line 1284**
> *Keyword match: "led"*

```typescript
1282:         this.debugLastPc = pc;
1283: 
1284:         const firstLed = Array.from(this.instances.values()).find((inst) => inst.type === 'openhw-led' || inst.type === 'openhw-led');
1285:         const ledAnodeV = firstLed ? Number(firstLed.getPinVoltage('A') || 0) : null;
1286:         const ledCathodeV = firstLed ? Number(firstLed.getPinVoltage('K') || 0) : null;
```

**`OpenHW-studio-frontend\src\worker\runners\rp2040-runner.ts` — Line 2762**
> *Keyword match: "led"*

```typescript
2760:             inst.setPinVoltage(otherPin, voltage);
2761:             visit(`${compId}:${otherPin}`);
2762:         } else if (inst.type === 'openhw-led' || inst.type === 'wokwi-led') {
2763:             if (pinId === 'A') {
2764:                 const nextV = Math.max(0, voltage - 1.8);
```

**`OpenHW-studio-frontend\src\workers\autowiring.worker.ts` — Line 54**
> *Keyword match: "led"*

```typescript
  52:     'openhw-resistor': [['p1', 'p2']],
  53:     'wokwi-resistor': [['p1', 'p2']],
  54:     'openhw-led': [['A', 'K']],
  55:     'wokwi-led': [['A', 'K']],
  56:     'openhw-pushbutton': [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\src\workers\autowiring.worker.ts` — Line 55**
> *Keyword match: "led"*

```typescript
  53:     'wokwi-resistor': [['p1', 'p2']],
  54:     'openhw-led': [['A', 'K']],
  55:     'wokwi-led': [['A', 'K']],
  56:     'openhw-pushbutton': [['1l', '1r'], ['2l', '2r']],
  57:     'wokwi-pushbutton': [['1l', '1r'], ['2l', '2r']],
```

**`OpenHW-studio-frontend\tests\unit\components\AutofixPreviewPanel.test.jsx` — Line 11**
> *Keyword match: "led"*

```typescript
   9: 
  10:     const autofixPlan = {
  11:       description: 'Connect the LED to ground',
  12:       confidence: 0.9,
  13:       reasoning: ['The cathode is floating.', 'Adding a GND connection resolves the violation.'],
```

---


*Report generated by OpenHW CI Diagnostic Analyzer — Vitest*
