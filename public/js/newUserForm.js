const usernameEl = document.getElementById('username')
const firstNameEl = document.getElementById('firstName')
const lastNameEl = document.getElementById('lastName')
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password')
const formEl = document.querySelector('form')

const specChar = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/
// /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/
formEl.addEventListener('submit', async e => {
    e.preventDefault()
    // 
    // const firstNameTest = /^[a-zA-Z]/.test(firstNameEl.value)
    // const lastNameTest = /^[a-zA-Z]/.test(lastNameEl.value)
    const usernameTest = specChar.test(usernameEl.value)
    

    console.log(usernameTest)

    //check length fior username and password
    if (usernameEl.value.length<3 || usernameEl.value.length>25) {
        alert("Username must be between 4 and 25 characters")
        return
    }

    if (passwordEl.value.length<8 || passwordEl.value.length>128) {
        alert("Password must be between 8 and 128 characters")
        return
        }

    //     //checks if firstName and lastName are only letters 
    // if (firstNameTest === false || lastNameTest === false) {
    //     alert("Name can only be letters")
    //     return
    //  }
    

     if (usernameTest) {
        alert("Username can only be letters and numbers")
        return
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
        req.status(500).json(err)
    }

})