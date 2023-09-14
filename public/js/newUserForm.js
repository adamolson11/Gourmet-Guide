const usernameEl = document.getElementById('username')
const firstNameEl = document.getElementById('firstName')
const lastNameEl = document.getElementById('lastName')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const formEl = document.querySelector('form')

const specChar = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/
const nameChar = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ 0123456789]/

formEl.addEventListener('submit', async e => {
    e.preventDefault()
    
    const firstNameTest = nameChar.test(firstNameEl.value)
    const lastNameTest = nameChar.test(lastNameEl.value)
    const usernameTest = specChar.test(usernameEl.value)

    //checks for special characters in username
    if (usernameTest) {
            alert("Username can only be letters and numbers")
            return
        }

    //checks if firstName and lastName are only letters 
    if (firstNameTest || lastNameTest) {
        alert("Name can only be letters")
        return
     }
    
    //check length for username and password
    if (usernameEl.value.length<3 || usernameEl.value.length>25) {
        alert("Username must be between 4 and 25 characters")
        return
    }

    if (passwordEl.value.length<8 || passwordEl.value.length>128) {
        alert("Password must be between 8 and 128 characters")
        return
        }
    


    const newUserData = {
        username: usernameEl.value,
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        email: emailEl.value,
        password: passwordEl.value
    }

    try{
        const response = await fetch("/api/users/new-user", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserData)
        })

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
        req.status(500).json(err)
    }

})