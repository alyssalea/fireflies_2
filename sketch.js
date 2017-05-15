function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
  
}

function draw() {
  textSize (32)
  fill (155)
  text ("Resize the window (drag bottom corner)",10,50)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0)
  fill(255,255,0)
  ellipse(random(windowWidth),random(windowHeight),25,25)
  
  
}