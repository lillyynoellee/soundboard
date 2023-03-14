let audio1 = new Audio('../assets/audio/sound1.wav'); 
let audio2 = new Audio('../assets/audio/sound2.ogg'); 
let audio3 = new Audio('../assets/audio/sound3.wav'); 
let audio4 = new Audio('../assets/audio/sound4.ogg'); 
let audio5 = new Audio('../assets/audio/sound5.ogg'); 
let audio6 = new Audio('../assets/audio/sound6.wav'); 
let audio7 = new Audio('../assets/audio/sound7.wav'); 
let audio8 = new Audio('../assets/audio/sound8.wav'); 
let audio9 = new Audio('../assets/audio/sound9.wav'); 
let audio10 = new Audio('../assets/audio/sound10.wav'); 
console.log('audio1');

function buttonAudio(sound) {
    if (sound == 1) {
        audio1.cloneNode().play()
    } else if (sound == 2) {
        audio2.cloneNode().play()
    } else if (sound == 3) {
        audio3.cloneNode().play()
    } else if (sound == 4) {
        audio4.cloneNode().play()
    } else if (sound == 5) {
        audio5.cloneNode().play()
    } else if (sound == 6) {
        audio6.cloneNode().play()
    } else if (sound == 7) {
        audio7.cloneNode().play()
    } else if (sound == 8) {
        audio8.cloneNode().play()
    } else if (sound == 9) {
        audio9.cloneNode().play()
    } else if (sound == 10) {
        audio10.cloneNode().play()
    }
}