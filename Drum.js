function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
    if(!audio) return; // stops the function from running altogether
    audio.currentTime = 0; // rewind sound to the start, when same key is hit repeatedly
    audio.play();
    key.classList.add('playing');
  
  }
  
  function drumTranslate(e) {
  
    const drumkick = document.querySelector('.drum-kick');
    const drumbeater = document.querySelector('.drum-beater');
    const drumpedal = document.querySelector('.drum-pedal');
  
    const drumtom = document.querySelector('.drum-tom');
    const drumsnare = document.querySelector('.drum-snare');
    const drumtom2 = document.querySelector('.drum-tom2');
    const drumboom = document.querySelector('.drum-boom');
    const cymbalhihat = document.querySelector('.cymbal-hihat');
    const cymbalopenhat = document.querySelector('.cymbal-openhat');
    const cymbalride = document.querySelector('.cymbal-ride');
  
     if (e.keyCode == 71) {
  
       drumkick.classList.add('moveUp');
       drumkick.addEventListener('animationend', function() {
         drumkick.classList.remove('moveUp');
       })
       drumpedal.classList.add('pedalDown');
       drumpedal.addEventListener('animationend', function() {
         drumpedal.classList.remove('pedalDown');
       })
       drumbeater.classList.add('beaterHit');
       drumbeater.addEventListener('animationend', function() {
         drumbeater.classList.remove('beaterHit');
       })
  
     } else if (e.keyCode == 65) {
  
         cymbalhihat.classList.add('moveDown');
         cymbalhihat.addEventListener('animationend', function() {
           cymbalhihat.classList.remove('moveDown');
         })
  
       } else if (e.keyCode == 83) {
  
           cymbalopenhat.classList.add('moveDown');
           cymbalopenhat.addEventListener('animationend', function() {
             cymbalopenhat.classList.remove('moveDown');
           })
  
         } else if (e.keyCode == 68) {
  
             drumsnare.classList.add('moveDown');
             drumsnare.addEventListener('animationend', function() {
               drumsnare.classList.remove('moveDown');
             })
  
  
           } else if (e.keyCode == 70) {
  
               drumtom.classList.add('moveDown');
               drumtom.addEventListener('animationend', function() {
                 drumtom.classList.remove('moveDown');
               })
  
  
             } else if (e.keyCode == 72) {
  
                 drumtom2.classList.add('moveDown');
                 drumtom2.addEventListener('animationend', function() {
                   drumtom2.classList.remove('moveDown');
                 })
  
  
               } else if (e.keyCode == 74) {
  
                   cymbalride.classList.add('moveDown');
                   cymbalride.addEventListener('animationend', function() {
                     cymbalride.classList.remove('moveDown');
                   })
  
  
                 } else if (e.keyCode == 75) {
  
                     drumboom.classList.add('moveDown');
                     drumboom.addEventListener('animationend', function() {
                       drumboom.classList.remove('moveDown');
                     })
  
                   } // closes final else if
  
  } // closes function drumTranslate
  
  function combineFunctions(e) {
    playSound(e);
    drumTranslate(e);
  };
  
  window.addEventListener('keydown', combineFunctions);
  
  
  function removeTransition(e) {
  
    if(e.propertyName !== 'transform') return; // skip it if not a transform
  
    this.classList.remove('playing');
  
  }
  
  const keys = document.querySelectorAll('.key');
  
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  