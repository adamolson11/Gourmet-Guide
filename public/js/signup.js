document.querySelector('#signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('input[name="username"]').value;
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, firstName, lastName, email, password }),
      });
  
      if (response.ok) {
        //this means the user did it yaaaaay!!!!
        
      } else {
      
      }
    } catch (error) {
      console.error('Registration error:', error); //yall messed up.
    }
  });
  