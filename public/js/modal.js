const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal?.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const signupBtn = document.getElementById("modal-signup-btn")

signupBtn.addEventListener("click", () => {
  window.location.assign("/signup")
})