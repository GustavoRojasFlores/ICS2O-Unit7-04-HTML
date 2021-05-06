document.getElementById('btn').addEventListener('click', check)
const ageinput = document.getElementById('age')
const dayinput = document.getElementById('day')
const text = document.getElementById('txt')

function check () {
  const age = parseInt(ageinput.value)
  const day = dayinput.value
  ageinput.value = null
  dayinput.value = null
  if ((day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday' || day == 'Saturday' || day == 'Sunday') && (age * 0 === 0)) {
    if ((day == 'Tuesday' || day == 'Thursday') || (age > 12 && age < 21)) {
      text.innerHTML = 'You are eligible for student pricing!'
    } else {
      text.innerHTML = 'You must pay the regular price.'
    }
  } else {
    text.innerHTML = 'Please enter a valid number and a valid day.'
  }
}
