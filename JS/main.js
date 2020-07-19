var n;

function setup() {
  canv = createCanvas(400, 200);
  canv.parent("#network-container");
  network = new Network(2);
}

function draw() {
  background(238, 226, 223);
  network.draw();
}