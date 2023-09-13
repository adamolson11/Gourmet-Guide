const usernameEl = document.getElementById('username')
const firstNameEl = document.getElementById('firstName')
const lastNameEl = document.getElementById('lastName')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const formEl = document.querySelector('form')

formEl.addEventListener('submit', async e => {
    e.preventDefault()

    if (usernameEl.value.length<3 || usernameEl.value.length>25) {
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

    console.log(newUserData)

    try{
        const response = await fetch("/api/users/new-user", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserData)
        })

        console.log(response)

        if (response.ok) {
            // Redirect to the new page upon successful registration
            alert('User created successfully!')
            window.location.href = `/`
          } else {
            const errorResponse = await response.json()
            alert(errorResponse.message)
          }

          req.json(response)
    }
    catch (err) {
        console.log(err)
    }

})