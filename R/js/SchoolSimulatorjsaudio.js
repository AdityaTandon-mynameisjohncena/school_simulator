export const AudioSystem = {

    enabled:true,

    sounds:{}
};

function createBeep(
    frequency,
    duration
){

    if(
        !AudioSystem.enabled
    ){
        return;
    }

    const AudioContextClass =

        window.AudioContext ||
        window.webkitAudioContext;

    if(
        !AudioContextClass
    ){
        return;
    }

    const context =
        new AudioContextClass();

    const oscillator =
        context.createOscillator();

    const gain =
        context.createGain();

    oscillator.type =
        "square";

    oscillator.frequency.value =
        frequency;

    oscillator.connect(
        gain
    );

    gain.connect(
        context.destination
    );

    gain.gain.value =
        0.03;

    oscillator.start();

    setTimeout(()=>{

        oscillator.stop();

        context.close();

    },duration);
}

export function playSuccessSound(){

    createBeep(
        800,
        120
    );

    setTimeout(()=>{

        createBeep(
            1100,
            120
        );

    },100);
}

export function playFailSound(){

    createBeep(
        250,
        250
    );
}

export function playSelectSound(){

    createBeep(
        550,
        60
    );
}

export function initializeAudio(){

    console.log(
        "Audio System Ready"
    );
}