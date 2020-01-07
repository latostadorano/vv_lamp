var backR, backG, backB;
var rectR, rectG, rectB;

var eyes, eyesBlink, eyesStatus;
var tint;

var bw = 0; // color vampiro elements
var bwDir = 0.2;

var rDir = 0.1;
var gDir = 0.2;
var bDir = 0.3;

var rrDir = -0.1;
var ggDir = -0.3;
var bbDir = -0.5;

var hr = hour(); // Clock variables
var mn = minute();
var sc = second();

var timer = -300; // timer


function setup() {
  createCanvas(600, 400);
  background(backR, backG, backB);

  backR = random(255);
  backG = random(255);
  backB = random(255);
  rectR = random(255);
  rectG = random(255);
  rectB = random(255);

  eyes = 50;
  evesStatus = eyes;
  eyesBlink = 5;

  tint = 0;
}

function draw() {
  backR = backR + rDir;
  backG = backG + gDir;
  backB = backB + bDir;

  rectR = rectR + rrDir;
  rectG = rectG + ggDir;
  rectB = rectB + bbDir;

  //bw = bw + bwDir;          // Color elementos vampiro

  hr = hour();
  mn = minute();
  sc = second();

  background(backR, backG, backB);

  push();
  translate(300, 200);
  rectMode(CENTER);
  stroke(bw);
  strokeWeight(4);
  fill(rectR, rectG, rectB);
  rect(0, 0, 450, 300);
  fill(bw);
  ellipse(-100, -35, 50, eyesStatus); // Ojos
  ellipse(100, -35, 50, eyesStatus);
  pop();

  noStroke();
  fill(255, 0, 0, tint);
  rectMode(CORNERS);
  rect(240 + (random(-1, 1)), 265, 260 + (random(-1, 1)), height);
  rect(340 + (random(-1, 1)), 265, 360 + (random(-1, 1)), height);

  strokeWeight(4);
  stroke(bw);
  line(230, 250, 250, 280); // Colmillos
  line(270, 250, 250, 280);
  line(370, 250, 350, 280);
  line(330, 250, 350, 280);

  clock(width / 2, 33); // Posición del reloj

  if ((keyIsPressed === true) || (sc %10 === 0)) { // Parpadeo
    blink();
  } else {
    eyesStatus = eyes;
  }

  if (millis() - timer < 300) {
    eyesStatus = eyesBlink;
  } else if (millis() - timer > 300) {
    eyesStatus = eyes;
  }

  if ((mouseIsPressed) || (sc %20 === 0)) {         //Sangre
    tint = 255;
  } else {
    tint = 0;
  }

  if (backR < 20 || backR > 230) {
    rDir *= -1;
  }
  if (backG < 20 || backG > 230) {
    gDir *= -1;
  }
  if (backB < 20 || backB > 230) {
    bDir *= -1;
  }
  if (rectR < 20 || rectR > 220) {
    rrDir *= -1;
  }
  if (rectG < 20 || rectG > 220) {
    ggDir *= -1;
  }
  if (rectB < 20 || rectB > 220) {
    bbDir *= -1;
  }

  if (bw < 0 || bw > 255) {
    bwDir *= -1;
  }
  print(mouseX + ", " + mouseY);

}

function blink() {
  timer = millis();
}

function clock(clockW, clockH) {

  fill(255);
  noStroke();
  textAlign(CENTER);
  text(hr + ':' + mn + ':' + sc, clockW, clockH);

}