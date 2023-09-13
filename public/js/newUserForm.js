const usernameEl = document.getElementById('username')
const firstNameEl = document.getElementById('firstName')
const lastNameEl = document.getElementById('lastName')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const formEl = document.querySelector('form')

formEl.addEventListener('submit', e => {
    e.preventDefault()

    if (username.length<3 || username.length>25) {
        alert("Username must be between 4 and 25 characters")
    }

    if (passwordEl.value.length<8 || passwordEl.value.length>128) {
        alert("Password must be between 8 and 128 characters")
    }

    const newUserData = {
        username: usernameEl.value,
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        email: emailEl.value,
        password: passwordEl.value
    }

    fetch("/api/new-user", {
        
    })

})