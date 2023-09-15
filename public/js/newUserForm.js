const usernameEl = document.getElementById('username')
const firstNameEl = document.getElementById('firstName')
const lastNameEl = document.getElementById('lastName')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const formEl = document.getElementById('user-form')

const specChar = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/
const nameChar = /[`!@#$%^&*()_\+=\[\]{};:"\\|,.<>\/?~0123456789]/


formEl.addEventListener('submit', async e => {
    e.preventDefault()
    
    console.log(usernameEl, firstNameEl,lastNameEl, emailEl, passwordEl)
    console.log(formEl)

    if (!usernameEl.value || !firstNameEl.value || !lastNameEl.value || !emailEl.value || !passwordEl.value) {
        alert('Fill out the entire form to continue')
        return
    }
    
    const usernameTest = specChar.test(usernameEl.value)
    //checks for special characters in username
    if (usernameTest) {
            alert("Username can only be letters and numbers")
            return
        }

    const userLen = usernameEl.value.length
    //checks len for username
    if (userLen < 4 || userLen > 100) {
        alert("Username must be between 4 and 100 characters")
        return
    }

    const firstNameTest = nameChar.test(firstNameEl.value)
    const lastNameTest = nameChar.test(lastNameEl.value)
    //checks if firstName and lastName are only letters 
    if (firstNameTest || lastNameTest) {
        alert("Name can only be letters")
        return
     }


    const firstNameLen = firstNameEl.value.length
    const lastNameLen = lastNameEl.value.length
    //checks first and last name len
    if (firstNameLen > 255 || lastNameLen > 255) {
        alert(`First and last name have a max length of 255 characters each`)
    }

    const emailLen = emailEl.value.length
    //check email len
    if (emailLen > 255) {
        alert ("Email cannot exceed more than 255 characters. Use a different email address if needed.")
    }
    
    //check length for password

    const passLen = passwordEl.value.length
    if (passLen < 8 || passLen > 128) {
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