#include <Adafruit_NeoPixel.h>


#define LED_PIN PA10
#define LED_COUNT 64
Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

#define INPUT_SIZE 14
int Rain;
int Flag;
int CarLeft;
int CarRight;
int BLKDSQ;
float bright;
char* Ra;
char* Fl;
char* CarR;
char* CarL;
char* Bl;
bool frame = true;
int FrameSwitch = 200;
int Ready = false;
int FlagCheck = 0;
int SetSwitch = 760;
int StepGreenSet = 0;
int Set = false;


const PROGMEM int MeatballFrame[] = {
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 255, 255, 255, 255, 0, 0,
  0, 255, 255, 255, 255, 255, 255, 0,
  0, 255, 255, 255, 255, 255, 255, 0,
  0, 255, 255, 255, 255, 255, 255, 0,
  0, 255, 255, 255, 255, 255, 255, 0,
  0, 0, 255, 255, 255, 255, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0
};
const PROGMEM int HalfFrame[] = {
  255, 255, 255, 255, 0, 0, 0, 0,
  0, 0, 0, 0, 255, 255, 255, 255,
  255, 255, 255, 255, 0, 0, 0, 0,
  0, 0, 0, 0, 255, 255, 255, 255,
  255, 255, 255, 255, 0, 0, 0, 0,
  0, 0, 0, 0, 255, 255, 255, 255,
  255, 255, 255, 255, 0, 0, 0, 0,
  0, 0, 0, 0, 255, 255, 255, 255
};
const PROGMEM int HalfFrame2[] = {
  0,0,0,0,255,255,255,255,
  255,255,255,255,0,0,0,0,
  0,0,0,0,255,255,255,255,
  255,255,255,255,0,0,0,0,
  0,0,0,0,255,255,255,255,
  255,255,255,255,0,0,0,0,
  0,0,0,0,255,255,255,255,
  255,255,255,255,0,0,0,0,
};
const PROGMEM int CheckeredFlagFrame1[] = {
  255,255,0,0,255,255,0,0,
  0,0,255,255,0,0,255,255,
  0,0,255,255,0,0,255,255,
  255,255,0,0,255,255,0,0,
  255,255,0,0,255,255,0,0,
  0,0,255,255,0,0,255,255,
  0,0,255,255,0,0,255,255,
  255,255,0,0,255,255,0,0,
};

void setup() {
  Serial.begin(916200);
  Serial.setTimeout(10);
  pinMode(PC13, OUTPUT);
  digitalWrite(PC13, LOW);
  strip.begin();  // INITIALIZE NeoPixel strip object (REQUIRED)
  strip.show();   // Turn OFF all pixels ASAP
  delay(1000);
  digitalWrite(PC13, HIGH);
}

void loop() {
  static uint32_t task2Counter = 0;
  static uint32_t task1Counter = 0;
  static uint32_t task3Counter = 0;
  static uint32_t lastTime = millis();

  if (millis() - lastTime) {
    lastTime = millis();
    ++task1Counter;
    if (task1Counter == FrameSwitch) {
      frame = !frame;
      task1Counter = 0;
    }
    if (Flag == 9) {
      ++task3Counter;
      Serial.println(task3Counter);
    }
    if (task3Counter >= SetSwitch) {
      task3Counter = 0;

      if (StepGreenSet <= 2) {
        StepGreenSet++;
      }
    }
  }

  if (Serial.available()) {
    digitalWrite(PC13, LOW);
    char input[INPUT_SIZE + 1];
    byte size = Serial.readBytes(input, INPUT_SIZE);
    // Add the final 0 to end the C string
    input[size] = 0;
    Fl = strtok(input, ":");
    Ra = strtok(0, ":");
    CarL = strtok(0, ":");
    CarR = strtok(0, ":");
    Bl = strtok(0, ":");
    Rain = atoi(Ra);
    Flag = atoi(Fl);
    BLKDSQ = atoi(Bl);
    CarLeft = atoi(CarL);
    CarRight = atoi(CarR);
    if (Rain == 99 && Flag == 99 && BLKDSQ == 99 && CarLeft == 99 && CarRight == 99) {
      NVIC_SystemReset();
    }
    digitalWrite(PC13, HIGH);
  }
  if (FlagCheck != Flag) {
    Noflag();
  }
  switch (Flag) {
    case 1:
      Checkeredflag();
      break;
    case 2:
      Greenflag();
      break;
    case 3:
      Meatballflag();
      break;
    case 4:
      Whiteflag();
      break;
    case 5:
      Redflag();
      break;
    case 6:
      FullYellowflag();
      break;
    case 7:
      LocalYellowflag();
      break;
    case 8:
      Blueflag();
      break;
    case 9:
      GreenSet();
      break;
    default:
      Noflag();
      break;
  }

  if (BLKDSQ == 1) {
    Dsqflag();
  }

  if (Rain == 1) {
    RainBars();
  }
  if (CarLeft == 1) {
    CarLeftBar();
  }
  if (CarRight == 1) {
    CarRightBar();
  }
  if (CarLeft == 1 && CarRight == 1) {
    CarCenterBar();
  }
  if (Flag != 9) {
    StepGreenSet = 0;
  }
  strip.show();
}

void Checkeredflag() {
  int color;
  if (frame == true) {
    for (int i = 0; i < 64; i++) {
      color = CheckeredFlagFrame1[i];
      strip.setPixelColor(i, color, color, color);
    }
  }
  if (frame == false) {
    for (int i = 0; i < 64; i++) {
      color = CheckeredFlagFrame1[64 - 1 - i];
      strip.setPixelColor(i, color, color, color);
    }
  }
}

void Noflag() {
  for (int i = 0; i < 64; i++) {
    strip.setPixelColor(i, 0, 0, 0);
  }
}

void Greenflag() {
  for (int i = 0; i < 64; i++) {
    strip.setPixelColor(i, 0, 128, 0);
  }
}

void Meatballflag() {
  for (int i = 0; i < 64; i++) {
    int color = MeatballFrame[i];
    strip.setPixelColor(i, color, (color / 3.2), 0);
  }
}

void Whiteflag() {
  for (int i = 0; i < 64; i++) {
    strip.setPixelColor(i, 128, 128, 128);
  }
}

void FullYellowflag() {
  if (frame == true) {
    for (int i = 0; i < 64; i++) {
      strip.setPixelColor(i, 255, 128, 0);
    }
  }
  if (frame == false) {
    Noflag();
  }
}

void LocalYellowflag() {
  if (frame == true) {
    for (int i = 0; i < 64; i++) {
      int color = HalfFrame[i];
      strip.setPixelColor(i, color, (color / 2), 0);
    }
  }
  if (frame == false) {
    for (int i = 0; i < 64; i++) {
      int color = HalfFrame2[i];
      strip.setPixelColor(i, color, (color / 2), 0);
    }
  }
}

void RainBars() {
  for (int i = 0; i < 8; i++) {
    strip.setPixelColor(i, 0, 0, 255);
    strip.setPixelColor((i + 56), 0, 0, 128);
  }
}

void Dsqflag() {
  for (int i = 0; i < 6; i++) {
    strip.setPixelColor((i + 9), 255, 0, 0);
    strip.setPixelColor((i + 49), 255, 0, 0);
  }
}
void Redflag() {
  int color;
  for (int i = 0; i < 64; i++) {
    strip.setPixelColor(i, 255, 0, 0);
  }
}

void Blueflag() {
  int color;
  if (frame == true) {
    for (int i = 0; i < 64; i++) {
      strip.setPixelColor(i, 0, 0, 255);
    }
    for (int i = 0; i < 16; i++) {
      strip.setPixelColor((i + 24), 255, 128, 0);
    }
  }
  if (frame == false) {
    Noflag();
  }
}
void CarLeftBar() {
  strip.setPixelColor(16, 255, 0, 128);
  strip.setPixelColor(31, 255, 0, 128);
  strip.setPixelColor(32, 255, 0, 128);
  strip.setPixelColor(47, 255, 0, 128);
}
void CarRightBar() {
  strip.setPixelColor(23, 255, 0, 128);
  strip.setPixelColor(24, 255, 0, 128);
  strip.setPixelColor(39, 255, 0, 128);
  strip.setPixelColor(40, 255, 0, 128);
}
void CarCenterBar() {
  strip.setPixelColor(28, 255, 0, 128);
  strip.setPixelColor(27, 255, 0, 128);
  strip.setPixelColor(35, 255, 0, 128);
  strip.setPixelColor(36, 255, 0, 128);
}
void GreenReady() {
}
void GreenSet() {
  if (StepGreenSet == 0) {
    strip.setPixelColor(30, 128, 0, 2);
    strip.setPixelColor(31, 128, 0, 2);
    strip.setPixelColor(32, 128, 0, 2);
    strip.setPixelColor(33, 128, 0, 2);
  }
  if (StepGreenSet == 1) {
    strip.setPixelColor(30, 128, 0, 2);
    strip.setPixelColor(31, 128, 0, 2);
    strip.setPixelColor(32, 128, 0, 2);
    strip.setPixelColor(33, 128, 0, 2);
    strip.setPixelColor(27, 128, 0, 2);
    strip.setPixelColor(28, 128, 0, 2);
    strip.setPixelColor(35, 128, 0, 2);
    strip.setPixelColor(36, 128, 0, 2);
  }
  if (StepGreenSet >= 2) {
    strip.setPixelColor(24, 128, 0, 2);
    strip.setPixelColor(25, 128, 0, 2);
    strip.setPixelColor(27, 128, 0, 2);
    strip.setPixelColor(28, 128, 0, 2);
    strip.setPixelColor(30, 128, 0, 2);
    strip.setPixelColor(31, 128, 0, 2);
    strip.setPixelColor(32, 128, 0, 2);
    strip.setPixelColor(33, 128, 0, 2);
    strip.setPixelColor(35, 128, 0, 2);
    strip.setPixelColor(36, 128, 0, 2);
    strip.setPixelColor(38, 128, 0, 2);
    strip.setPixelColor(39, 128, 0, 2);
  }
}
