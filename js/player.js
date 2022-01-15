const playIconContainer = document.getElementById('play-icon');
const playIcon = document.getElementById("fa-play-icon");
const volumeSlider = document.getElementById('volume-slider');
const muteIcon = document.getElementById('mute-icon');
let playState = 'play';
let muteState = 'unmute';

class Slider {
    constructor (rangeElement, options) {
        this.rangeElement = rangeElement;
        this.options = options;

        // Attach a listener to "change" event
        this.rangeElement.addEventListener('input', this.updateSlider.bind(this));
    }

    // Initialize the slider
    init() {
        this.rangeElement.setAttribute('min', options.min);
        this.rangeElement.setAttribute('max', options.max);
        this.rangeElement.value = options.cur;

        this.updateSlider();
    }

    generateBackground(_) {
        if (this.rangeElement.value === this.options.min) {
            return;
        }

        let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100;
        return 'background: linear-gradient(to right, #E7B878, #E7B878 ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%';
    }

    updateSlider (_) {
        if(this.rangeElement.value === "0") {
            muteIcon.className = "fas fa-volume-mute";
        } else {
            muteIcon.className = "fas fa-volume-up";
        }
        this.rangeElement.style = this.generateBackground(this.rangeElement.value);
    }
}

let rangeElement = document.querySelector('input[type="range"]');

let options = {
    min: 0,
    max: 100,
    cur: 100
};

let slider = new Slider(rangeElement, options);
slider.init();

playIconContainer.addEventListener('click', () => {
    if(playState === 'play') {
        audio.load();
        audio.play();
        playState = 'pause';
        playIcon.className = "fa-solid fa-pause"
    } else {
        audio.pause();
        playState = 'play';
        playIcon.className = "fa-solid fa-play"
    }
});

let lastVolumeSliderValue = "100";

muteIcon.addEventListener('click', () => {
    if(muteState === 'unmute') {
        audio.muted = true;
        muteState = 'mute';
        lastVolumeSliderValue = volumeSlider.value;
        volumeSlider.value = "0";
        muteIcon.className = "fas fa-volume-mute";
        slider.updateSlider();
    } else {
        audio.muted = false;
        muteState = 'unmute';
        muteIcon.className = "fas fa-volume-up"
        volumeSlider.value = lastVolumeSliderValue;
        slider.updateSlider();
    }
});

/* Implementation of the functionality of the audio player */

const audio = document.querySelector('audio');

volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;

    audio.volume = value / 100;
});