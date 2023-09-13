const ingredientBtn = document.getElementById('addIngredient')
const stepsBtn = document.getElementById('stepsBtn')
const nameDiv = document.getElementById('nameDiv')
const amountDiv = document.getElementById('amountDiv')
const stepDiv = document.getElementById('stepDiv')

ingredientBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const nameEl = document.createElement('input')
  const amountEl = document.createElement('input')

  nameEl.setAttribute('type', 'text')
  nameEl.classList.add('form-control')
  nameEl.classList.add('col')
  nameEl.classList.add('mt-1')

  amountEl.setAttribute('type', 'text')
  amountEl.classList.add('form-control')
  amountEl.classList.add('col')
  amountEl.classList.add('mt-1')





  nameDiv.appendChild(nameEl)
  amountDiv.appendChild(amountEl)

})

stepsBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const stepEl = document.createElement('input')

  stepEl.setAttribute('type', 'text')
  stepEl.classList.add('form-control')
  stepEl.classList.add('mt-1')

  stepDiv.appendChild(stepEl)
})
