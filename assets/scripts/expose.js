// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const hornSelect = document.querySelector('#horn-select');

  const hornImage = document.querySelector('#expose img');

  const volSlider = document.querySelector('#volume');

  const volIcon = document.querySelector('#volume-controls img');

  const playBttn = document.querySelector('button');

  const audio = document.querySelector('audio');

  const jsConfetti = new JSConfetti();

  //horn select listener

  hornSelect.addEventListener('change', () => {

    const horn = hornSelect.value;

    hornImage.src = `assets/images/${horn}.svg`;

    hornImage.alt = horn;

    audio.src = `assets/audio/${horn}.mp3`;

  });

  //volume slider listener

  volSlider.addEventListener('input', () => {

    const vol = parseInt(volSlider.value);

    if (vol === 0) {

      volIcon.src = 'assets/icons/volume-level-0.svg';

      volIcon.alt = 'Volume level 0';

    } else if (vol < 33) {

      volIcon.src = 'assets/icons/volume-level-1.svg';

      volIcon.alt = 'Volume level 1';

    } else if (vol < 67) {

      volIcon.src = 'assets/icons/volume-level-2.svg';

      volIcon.alt = 'Volume level 2';

    } else {

      volIcon.src = 'assets/icons/volume-level-3.svg';

      volIcon.alt = 'Volume level 3';

    }

    audio.volume = vol / 100;

  });

  //play button listener

  playBttn.addEventListener('click', () => {

    if (hornSelect.value === 'select' || hornSelect.value === '') return;

    audio.currentTime = 0;

    audio.play();

    if (hornSelect.value === 'party-horn') {

      jsConfetti.addConfetti();

    }

  });

}