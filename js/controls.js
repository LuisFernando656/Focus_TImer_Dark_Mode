import {
  buttonPlay
} from './config.js'

export default function controls () {

  const reset = () => {
    buttonPlay.disabled = false
  }

  const lockButtonPlay = () => {
    buttonPlay.disabled = true
  }

  return{
    reset,
    lockButtonPlay
  }
  
}
