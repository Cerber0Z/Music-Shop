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


// evento keydown
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 72) {
        hihat();
    }

    if (event.keyCode === 66) {
        drums();
    }

    if (event.keyCode === 86) {
        drummer();
    }
    if (event.keyCode === 67) {
        drummer();
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



function hihat() {


    var fundamental = 50;
    var ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];

    // Always useful
    var when = audioContext.currentTime;

    var gain = audioContext.createGain();

    // Bandpass
    var bandpass = audioContext.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 9000;

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
    document.getElementById("contenido").style.marginLeft = "400px";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("contenido").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}