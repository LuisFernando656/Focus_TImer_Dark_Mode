import { containerCafe,containerRain,containerTree,containerFire,volCafe, volFire, volRain, volTree } from './config.js'
import { sounds } from './sounds.js'

export default function Customize({
  buttonSun,
  buttonMoon
}) {
  const buttonTreeClick = () => {
    buttonSelected(containerTree, containerCafe, containerFire, containerRain)
    sounds.forestSound.play()
    sounds.stopSounds(sounds.cafeteriaSound, sounds.fireSound, sounds.rainSound)
    btnBgDarkRemove(containerTree, containerCafe, containerFire, containerRain)
    volTree.value = 50
    sounds.forestSound.volume = volTree.value/100
  }

  const buttonRainClick = () => {
    buttonSelected(containerRain, containerFire, containerCafe, containerTree)
    sounds.rainSound.play()
    sounds.stopSounds(
      sounds.cafeteriaSound,
      sounds.fireSound,
      sounds.forestSound
    )
    btnBgDarkRemove(containerRain, containerCafe, containerFire, containerTree)
    volRain.value = 50
    sounds.rainSound.volume = volRain.value/100
  }

  const buttonCafeClick = () => {
    buttonSelected(containerCafe, containerFire, containerRain, containerTree)
    sounds.cafeteriaSound.play()
    sounds.stopSounds(sounds.rainSound, sounds.fireSound, sounds.forestSound)
    btnBgDarkRemove(containerCafe, containerRain, containerFire, containerTree)
    volCafe.value = 50
    sounds.cafeteriaSound.volume = volCafe.value/100
  }

  const buttonFireClick = () => {
    buttonSelected(containerFire, containerRain, containerCafe, containerTree)
    sounds.fireSound.play()
    sounds.stopSounds(
      sounds.cafeteriaSound,
      sounds.rainSound,
      sounds.forestSound
    )
    btnBgDarkRemove(containerFire, containerCafe, containerRain, containerTree)
    volFire.value = 50
    sounds.fireSound.volume = volFire.value/100
  }

  const buttonSelected = (bt1, bt2, bt3, bt4) => {
      bt1.classList.add('selected')
      bt2.classList.remove('selected')
      bt3.classList.remove('selected')
      bt4.classList.remove('selected')
  }

  const btnBgDarkRemove = (bt1, bt2, bt3, bt4) => {
    if(buttonSun.classList.contains('hide')){
      bt1.classList.remove('btn_bg_dark')
      bt2.classList.add('btn_bg_dark')
      bt3.classList.add('btn_bg_dark')
      bt4.classList.add('btn_bg_dark')
    }
  }

  const buttonRemoveSelectedandBgDark = () => {
    if(!containerCafe.classList.contains('selected')){
      containerCafe.classList.remove('selected','btn_bg_dark')
    }else{
      containerCafe.classList.remove('btn_bg_dark')
    }

    if(!containerRain.classList.contains('selected')){
      containerRain.classList.remove('selected','btn_bg_dark')
    }else{
      containerRain.classList.remove('btn_bg_dark')
    }

    if(!containerFire.classList.contains('selected')){
      containerFire.classList.remove('selected','btn_bg_dark')
    }else{
      containerFire.classList.remove('btn_bg_dark')
    }

    if(!containerTree.classList.contains('selected')){
      containerTree.classList.remove('selected','btn_bg_dark')
    }else{
      containerTree.classList.remove('btn_bg_dark')
    }
  }

  const changeButtonBgColor = () => {
    if(!containerCafe.classList.contains('selected')){
      containerCafe.classList.add('btn_bg_dark')
    }
    if(!containerRain.classList.contains('selected')){
      containerRain.classList.add('btn_bg_dark')
    }
    if(!containerFire.classList.contains('selected')){
      containerFire.classList.add('btn_bg_dark')
    }
    if(!containerTree.classList.contains('selected')){
      containerTree.classList.add('btn_bg_dark')
    }
  }

  const changeColor = (blackwhitetext, blackwhitebg, darkButton) => {
    document.documentElement.style.setProperty(
      '--black-white-text',
      blackwhitetext
    )
    document.documentElement.style.setProperty('--black-white-bg', blackwhitebg)
    document.documentElement.style.setProperty('--dark-button', darkButton)
  }

  const changeinputRangeColor = (color) => {
    document.documentElement.style.setProperty('--input-range-color', color)
  }

  const turnBlackorWhite = () => {
    buttonMoon.classList.toggle('hide')
    buttonSun.classList.toggle('hide')

    if (buttonMoon.classList.contains('hide')) {
      buttonRemoveSelectedandBgDark()
      changeColor('0%', '100%', '31%')
      changeinputRangeColor('#323238')
    } else {
      changeButtonBgColor()
      changeColor('100%', '0%', '15%')
      changeinputRangeColor('white')
    }
  }

  return {
    buttonCafeClick,
    buttonFireClick,
    buttonRainClick,
    buttonTreeClick,
    turnBlackorWhite
  }
}
