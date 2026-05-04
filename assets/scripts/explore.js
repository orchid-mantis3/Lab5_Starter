// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImg = document.querySelector('#explore img');
  const textArea = document.querySelector("#text-to-speak");
  const voiceSelect = document.querySelector('#voice-select');
  const talkBttn = document.querySelector('button');
  const synth = window.speechSynthesis;
  let voices= [];

  //load voices func
  function loadVoices() {
    voices = synth.getVoices();
    voices.forEach((voice,i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = '${voice.name} (${voice.lang})';
      voiceSelect.appendChild(opt);
    });
  }
  //load voice in browser
  loadVoices();
  if (synth.onvoiceschanged != undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  //talk bttn interaction
  talkBttn.addEventListener('click', () => {
    const text = textArea.value.trim();
    if (!text) return;
    synth.cancel;
    const utter = new SpeechSynthesisUtterance(text);

    //setting voice
    const selectedVoice = voiceSelect.value;
    if (selectedVoice !== 'select') {
      utter.voice = voices[selectedVoice];
    }

    //swap img to indic. talking when speech
    utter.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
      faceImg.alt = 'talking face';
    }

    //swap to neutral when doe talking
    utter.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
      faceImg.alt = 'smiling face'
    };
    //activate speaking now
    synth.speak(utter);
  });
}