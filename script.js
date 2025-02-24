//create the web audio context
const myAudCtx = new AudioContext();

//make an oscillator
let myOsc = myAudCtx.createOscillator();

//make a modulator
let myMod = myAudCtx.createOscillator();

//set freq and waveform of myOsc
myOsc.frequency.value = 100;
myOsc.type = "sawtooth";

//make a gain node
let myGain = myAudCtx.createGain();
myGain.gain.value = 0.5;

//set freq and waveform of myOsc
myOsc.connect(myGain);
myOsc.connect(myAudCtx.destination);

//Start the osc (want this to happen when I click the button)

const startAudio = function () {
  myAudCtx.resume;
  myOsc.start();
};
const stopAudio = function () {
  myOsc.stop();
};

let theStartButton = document.getElementById("startButton");
let theStopButton = document.getElementById("stopButton");
theStartButton.addEventListener("click", startAudio);
theStopButton.addEventListener("click", stopAudio);
