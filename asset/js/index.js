//Gif


// Api web audio
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();
var mixGain = audioContext.createGain();


const hithat = document.querySelector('#hihat');
const saucer1 = document.querySelector('#saucer1')
const saucer2 = document.querySelector('#saucer2')
const tom1 = document.querySelector('#tom1')
const tom2 = document.querySelector('#tom2')
const tombase = document.querySelector('#tombase')
const drummers = document.querySelector('#drummer')
const drum = document.querySelector('#drum');


// evento click

hithat.addEventListener('click', function() {
    hihat();
})
drum.addEventListener('click', function() {
    drums();
});

drummers.addEventListener('click', function() {
    drummer();

})

tombase.addEventListener('click', function() {
    tombases();

})

tom1.addEventListener('click', function() {
    tom1s();

})

tom2.addEventListener('click', function() {
    tom2s();

})

// evento keydown
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 78) {
        hihat();
    }

    if (event.keyCode === 66) {
        drums();
    }

    if (event.keyCode === 86 || event.keyCode === 67) {
        drummer();
    }

    if (event.keyCode === 68 || event.keyCode === 70) {
        tom1s();
    }
    if (event.keyCode === 71 || event.keyCode === 72) {
        tom2s();
    }


    if (event.keyCode === 74 || event.keyCode === 75) {
        tombases();
    }


    if (event.keyCode === 82 || event.keyCode === 84) {
        saucer1s();
    }

    if (event.keyCode === 89 || event.keyCode === 85) {
        saucer2s();
    }

});


//SOUNDS

function drums() {

    var osc = audioContext.createOscillator();
    var osc2 = audioContext.createOscillator();
    var gainOsc = audioContext.createGain();
    var gainOsc2 = audioContext.createGain();


    gainOsc.gain.setValueAtTime(1, audioContext.currentTime);
    gainOsc.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


    gainOsc2.gain.setValueAtTime(1, audioContext.currentTime);
    gainOsc2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


    osc.frequency.setValueAtTime(120, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

    osc2.frequency.setValueAtTime(80, audioContext.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

    osc.connect(gainOsc);
    osc2.connect(gainOsc2);
    gainOsc2.connect(mixGain);
    gainOsc.connect(mixGain);
    gainOsc.connect(audioContext.destination);
    gainOsc2.connect(audioContext.destination);



    osc.start(audioContext.currentTime);
    osc2.start(audioContext.currentTime);

    osc.stop(audioContext.currentTime + 0.5);
    osc2.stop(audioContext.currentTime + 0.5);

}

function tom1s() {

    var osc = audioContext.createOscillator();
    var osc2 = audioContext.createOscillator();
    var gainOsc = audioContext.createGain();
    var gainOsc2 = audioContext.createGain();

    gainOsc.gain.setValueAtTime(1, audioContext.currentTime);
    gainOsc.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


    gainOsc2.gain.setValueAtTime(1, audioContext.currentTime);
    gainOsc2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


    osc.frequency.setValueAtTime(1, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

    osc2.frequency.setValueAtTime(200, audioContext.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);

    osc.connect(gainOsc);
    osc2.connect(gainOsc2);
    gainOsc2.connect(mixGain);
    gainOsc.connect(mixGain);
    gainOsc.connect(audioContext.destination);
    gainOsc2.connect(audioContext.destination);



    osc.start(audioContext.currentTime);
    osc2.start(audioContext.currentTime);

    osc.stop(audioContext.currentTime + 0.5);
    osc2.stop(audioContext.currentTime + 0.5);

}

function tom2s() {

    var osc = audioContext.createOscillator();
    var osc2 = audioContext.createOscillator();
    var gainOsc = audioContext.createGain();
    var gainOsc2 = audioContext.createGain();

    gainOsc.gain.setValueAtTime(1, audioContext.currentTime);
    gainOsc.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


    gainOsc2.gain.setValueAtTime(1, audioContext.currentTime);
    gainOsc2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


    osc.frequency.setValueAtTime(1, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

    osc2.frequency.setValueAtTime(310, audioContext.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);

    osc.connect(gainOsc);
    osc2.connect(gainOsc2);
    gainOsc2.connect(mixGain);
    gainOsc.connect(mixGain);
    gainOsc.connect(audioContext.destination);
    gainOsc2.connect(audioContext.destination);



    osc.start(audioContext.currentTime);
    osc2.start(audioContext.currentTime);

    osc.stop(audioContext.currentTime + 0.5);
    osc2.stop(audioContext.currentTime + 0.5);

}

function tombases() {

    var osc = audioContext.createOscillator();
    var osc2 = audioContext.createOscillator();
    var gainOsc = audioContext.createGain();
    var gainOsc2 = audioContext.createGain();

    gainOsc.gain.setValueAtTime(1, audioContext.currentTime);
    gainOsc.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


    gainOsc2.gain.setValueAtTime(1, audioContext.currentTime);
    gainOsc2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);


    osc.frequency.setValueAtTime(1, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

    osc2.frequency.setValueAtTime(600, audioContext.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);

    osc.connect(gainOsc);
    osc2.connect(gainOsc2);
    gainOsc2.connect(mixGain);
    gainOsc.connect(mixGain);
    gainOsc.connect(audioContext.destination);
    gainOsc2.connect(audioContext.destination);



    osc.start(audioContext.currentTime);
    osc2.start(audioContext.currentTime);

    osc.stop(audioContext.currentTime + 0.5);
    osc2.stop(audioContext.currentTime + 0.5);

}

function drummer() {

    var osc = audioContext.createOscillator();
    var osc2 = audioContext.createOscillator();
    var gainOsc = audioContext.createGain();
    var gainOsc2 = audioContext.createGain();

    gainOsc.gain.setValueAtTime(50, audioContext.currentTime);
    gainOsc.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);


    gainOsc2.gain.setValueAtTime(80, audioContext.currentTime);
    gainOsc2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);


    osc.frequency.setValueAtTime(900, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

    osc2.frequency.setValueAtTime(200, audioContext.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

    osc.connect(gainOsc);
    osc2.connect(gainOsc2);
    gainOsc2.connect(mixGain);
    gainOsc.connect(mixGain);
    gainOsc.connect(audioContext.destination);
    gainOsc2.connect(audioContext.destination);



    osc.start(audioContext.currentTime);
    osc2.start(audioContext.currentTime);

    osc.stop(audioContext.currentTime + 0.5);
    osc2.stop(audioContext.currentTime + 0.5);

}

function saucer1s() {

    var fundamental = 100;
    var ratios = [8, 2, 4.16, 5.43, 6.79, 8.21];

    // Always useful
    var when = audioContext.currentTime;

    var gain = audioContext.createGain();

    // Bandpass
    var bandpass = audioContext.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 800;

    // Highpass
    var highpass = audioContext.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 100;

    // Connect the graph
    bandpass.connect(highpass);
    highpass.connect(gain);
    gain.connect(audioContext.destination);

    // Create the oscillators
    ratios.forEach(function(ratio) {
        var osc = audioContext.createOscillator();
        osc.type = "square";
        // Frequency is the fundamental * this oscillator's ratio
        osc.frequency.value = fundamental * ratio;
        osc.connect(bandpass);
        osc.start(when);
        osc.stop(when + 0.3);
    });

    // Define the volume envelope
    gain.gain.setValueAtTime(0.00001, when);
    gain.gain.exponentialRampToValueAtTime(1, when + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.3, when + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.00001, when + 0.3);
}

function hihat() {


    var fundamental = 50;
    var ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];

    // Always useful
    var when = audioContext.currentTime;

    var gain = audioContext.createGain();

    // Bandpass
    var bandpass = audioContext.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 7000;

    // Highpass
    var highpass = audioContext.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 2000;

    // Connect the graph
    bandpass.connect(highpass);
    highpass.connect(gain);
    gain.connect(audioContext.destination);

    // Create the oscillators
    ratios.forEach(function(ratio) {
        var osc = audioContext.createOscillator();
        osc.type = "square";
        // Frequency is the fundamental * this oscillator's ratio
        osc.frequency.value = fundamental * ratio;
        osc.connect(bandpass);
        osc.start(when);
        osc.stop(when + 0.3);
    });

    // Define the volume envelope
    gain.gain.setValueAtTime(0.00001, when);
    gain.gain.exponentialRampToValueAtTime(1, when + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.3, when + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.00001, when + 0.3);

}


function saucer1s() {


    var fundamental = 50;
    var ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];

    // Always useful
    var when = audioContext.currentTime;

    var gain = audioContext.createGain();

    // Bandpass
    var bandpass = audioContext.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 7000;

    // Highpass
    var highpass = audioContext.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 2000;

    // Connect the graph
    bandpass.connect(highpass);
    highpass.connect(gain);
    gain.connect(audioContext.destination);

    // Create the oscillators
    ratios.forEach(function(ratio) {
        var osc = audioContext.createOscillator();
        osc.type = "square";
        // Frequency is the fundamental * this oscillator's ratio
        osc.frequency.value = fundamental * ratio;
        osc.connect(bandpass);
        osc.start(when);
        osc.stop(when + 0.3);
    });

    // Define the volume envelope
    gain.gain.setValueAtTime(0.00001, when);
    gain.gain.exponentialRampToValueAtTime(1, when + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.3, when + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.00001, when + 0.3);

}


function saucer2s() {


    var fundamental = 50;
    var ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];

    // Always useful
    var when = audioContext.currentTime;

    var gain = audioContext.createGain();

    // Bandpass
    var bandpass = audioContext.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 7000;

    // Highpass
    var highpass = audioContext.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 2000;

    // Connect the graph
    bandpass.connect(highpass);
    highpass.connect(gain);
    gain.connect(audioContext.destination);

    // Create the oscillators
    ratios.forEach(function(ratio) {
        var osc = audioContext.createOscillator();
        osc.type = "square";
        // Frequency is the fundamental * this oscillator's ratio
        osc.frequency.value = fundamental * ratio;
        osc.connect(bandpass);
        osc.start(when);
        osc.stop(when + 0.3);
    });

    // Define the volume envelope
    gain.gain.setValueAtTime(0.00001, when);
    gain.gain.exponentialRampToValueAtTime(1, when + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.3, when + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.00001, when + 0.3);

}


//Menu
function mostrar() {
    document.getElementById("menu").style.width = "400px";
    document.getElementById("abrir").style.display = "none";

}

function ocultar() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("abrir").style.display = "inline";
}