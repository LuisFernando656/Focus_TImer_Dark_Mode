import { volTree,volCafe,volFire,volRain } from "./config.js"

export const sounds = {
  rainSound: new Audio('./sounds/Chuva.wav'),
  forestSound: new Audio('./sounds/Floresta.wav'),
  cafeteriaSound: new Audio('./sounds/Cafeteria.wav'),
  fireSound: new Audio('./sounds/Lareira.wav'),

  stopSounds(sound1, sound2, sound3) {
    sound1.pause()
    sound2.pause()
    sound3.pause()
  }
}

volTree.addEventListener('input', function(){
  sounds.forestSound.volume = volTree.value/100
})

volCafe.addEventListener('input', function() {
  sounds.cafeteriaSound.volume = volCafe.value/100
})

volFire.addEventListener('input', function(){
  sounds.fireSound.volume = volFire.value/100
})

volRain.addEventListener('input', function(){
  sounds.rainSound.volume = volRain.value/100
})

sounds.rainSound.loop = true
sounds.cafeteriaSound.loop = true
sounds.fireSound.loop = true
sounds.forestSound.loop = true
