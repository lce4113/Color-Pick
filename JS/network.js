class Network {

  constructor(_numNeurons) {
    this.numNeurons = _numNeurons;
    this.neurons = [
      [...Array(3)].map(() => new Neuron(3)),
      [...Array(this.numNeurons)].map(() => new Neuron(this.numNeurons, 3)),
      [...Array(2)].map(() => new Neuron(2, this.numNeurons))
    ];
  }

  draw() {
    this.neurons.forEach((layer, i) => {
      layer.forEach((neuron, j) => {
        neuron.draw(i, j);
      });
    });
  }

  feedforward(red, green, blue) {
    for (neuron of this.neurons[1]) {
      neuron.feedforward(arguments);
    }
    for (neuron of this.neurons[2]) {
      neuron.feedforward(this.neurons[0]);
    }
  }

}
