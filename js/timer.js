export default function Timer({
  minutesDisplay,
  secondsDisplay,
}) {

  let minutes = +minutesDisplay.innerHTML
  let seconds = +secondsDisplay.innerHTML
  let newMinutes
  let timerTimeOut

  function reset () {
    minutes = newMinutes
    seconds = 0
    clearTimeout(timerTimeOut)
    formatTimer(minutes, seconds)
  }

  const deefaultMinutes = () => {
    newMinutes = minutes
  }

  const countdown = () => {
    timerTimeOut = setTimeout(function () {
      if (minutes <= 0 && seconds <= 0) {
        minutes = newMinutes
        formatTimer(minutes, 0)
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        minutes--
        formatTimer(minutes, 0)
      }
  
      seconds--
      formatTimer(minutes, seconds)
  
      countdown()
    }, 1000)
  }

  const decrementMinutes = () => {
    if (minutes > 5) {
      minutes = minutes - 5
      formatTimer(minutes, seconds)
    }
  }

  const addMinutes = () => {
      minutes = minutes + 5
      formatTimer(minutes, seconds)
  }
  
  const formatTimer = (minutes, seconds) => {
    secondsDisplay.innerHTML = String(seconds).padStart(2, 0)
    minutesDisplay.innerHTML = String(minutes).padStart(2, 0)
  }

  return{
    countdown,
    formatTimer,
    reset,
    deefaultMinutes,
    decrementMinutes,
    addMinutes
  }
}
