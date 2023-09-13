const ingredientBtn = document.getElementById('addIngredient')
const ingredientName = document.getElementById('ingredientName')
const ingredientAmount = document.getElementById('ingredientAmount')
const ingredientInputs = document.getElementById('ingredientInputs')
const nameDiv = document.getElementById('nameDiv')
const amountDiv = document.getElementById('amountDiv')

console.log("hello")

ingredientBtn.addEventListener('click', (e) => {
  // e.preventDefault()
  const nameEl = document.createElement('input')
  // const amountEl = document.createElement('input')

  nameEl.setAttribute('type', 'text')
  nameEl.classList.addClass('form-control col')





  nameDiv.appendChild(nameEl)
  // amountDiv.appendChild(amountEl)

})

