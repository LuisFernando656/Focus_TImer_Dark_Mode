import {
  buttonPlay,
  minutesDisplay,
  secondsDisplay,
  buttonAdd,
  buttonDec,
  buttonStop,
  buttonTree,
  buttonRain,
  buttonCafe,
  buttonFire,
  buttonMoon,
  buttonSun
} from './config.js'
import Customize from './customize.js'
import Timer from './timer.js'
import Controls from './controls.js'

const controls = Controls({buttonPlay})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const customize = Customize({
  buttonCafe,
  buttonRain,
  buttonFire,
  buttonSun,
  buttonMoon
})

buttonPlay.addEventListener('click', function(){
  timer.countdown()
  timer.deefaultMinutes()
  controls.lockButtonPlay()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
})

buttonAdd.addEventListener('click', timer.addMinutes)

buttonDec.addEventListener('click', timer.decrementMinutes)

buttonTree.addEventListener('click', customize.buttonTreeClick)

buttonRain.addEventListener('click', customize.buttonRainClick)

buttonCafe.addEventListener('click', customize.buttonCafeClick)

buttonFire.addEventListener('click', customize.buttonFireClick)

buttonMoon.addEventListener('click', customize.turnBlackorWhite)

buttonSun.addEventListener('click', customize.turnBlackorWhite)