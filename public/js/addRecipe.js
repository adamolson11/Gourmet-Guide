const ingredientBtn = document.getElementById('addIngredient')
const stepsBtn = document.getElementById('stepsBtn')
const nameDiv = document.getElementById('nameDiv')
const amountDiv = document.getElementById('amountDiv')
const stepDiv = document.getElementById('stepDiv')
const submitBtn = document.getElementById('submit')
const recipeName = document.getElementById('recipeName')
const description = document.getElementById('recipeDescription')
const ingredientAmount = document.getElementById('ingredientAmount')



ingredientBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const nameEl = document.createElement('input')
  const amountEl = document.createElement('input')

  nameEl.setAttribute('type', 'text')
  nameEl.classList.add('form-control', 'col', 'mt-1', 'ingredientName')



  amountEl.setAttribute('type', 'text')
  amountEl.classList.add('form-control', 'col', 'mt-1', 'amount')



  nameDiv.appendChild(nameEl)
  amountDiv.appendChild(amountEl)

})

stepsBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const stepEl = document.createElement('input')

  stepEl.setAttribute('type', 'text')
  stepEl.classList.add('form-control', 'mt-1', 'steps')


  stepDiv.appendChild(stepEl)
})

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const ingredientNameInputs = document.querySelectorAll('.ingredientName')
  const amountInputs = document.querySelectorAll('.amount')
  const ingredients = []
  let index = 0
  for (const ingredientNameInput of ingredientNameInputs) {
    ingredients.push({
      ingredientNumber: index + 1,
      ingredientName: ingredientNameInput.value,
      ingredientAmount: amountInputs[index].value
    })
    index++
  }

  const stepInputs = document.querySelectorAll('.steps')
  const steps = []
  index = 0
  for (const stepInput of stepInputs) {
    steps.push({
      stepNumber: index + 1,
      stepText: stepInput.value
    })
    index++
  }

  const recipeData = {
    name: recipeName.value,
    description: description.value,
    ingredients,
    steps,
  }
  console.log(recipeData)
  fetch('/api/recipes/add-recipe', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipeData)
  })
    .then(response => {
      if (response.status === 200) {
        window.location.assign("/recipes")
      }
    })
    .catch(err => console.log(err))


})

