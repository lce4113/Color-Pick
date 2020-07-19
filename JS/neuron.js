class Neuron {

  constructor(_num, _prev = 0) {
    this.value = 0;
    this.bias = random(-1, 1);
    this.num = _num;
    this.prev = _prev
    this.weights = [];
    for (let i = 0; i < this.prev; i++) {
      this.weights.push(random(-1, 1));
    }
  }

  // Provide an output using the weights, previous neuron values, and bias
  feedforward(prevVals) {
    this.value = this.bias;
    weights.forEach((weight, i) => {
      this.value += weight * prevVals;
    });
  }

  // Draw the neuron and its weights
  draw(layer, pos) {
    // Neurons
    stroke(0);
    strokeWeight(2);
    fill(0, 0, map(this.bias, -1, 1, 255, 100));
    circle(
      width / 8 + width * 3 / 8 * layer,
      (pos + 0.5) / this.num * height,
      min(height / this.num / 2, height / 6)
    );
    // Weights
    strokeWeight(5);
    for (let i = 0; i < this.prev; i++) {
      stroke(map(this.weights[i], -1, 1, 100, 255), 0, 0);
      line(
        width / 8 + width * 3 / 8 * layer - min(height / this.num / 4, height / 12),
        (pos + 0.5) / this.num * height,
        width / 8 + width * 3 / 8 * (layer - 1) + min(height / this.num / 4, height / 12),
        (i + 0.5) / this.prev * height
      );
    }
  }

}