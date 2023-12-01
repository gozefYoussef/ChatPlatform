export async function httploginRequest({ loginEmail, loginPassword }) {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        })
      });
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const data = await response.json();
        // Process the data or return it as needed
        return data;
      } else {
        // Handle errors, e.g., log them or throw an error
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error during login request:', error);
    }
  }

  export async function httpRegisterRequest(registerEmail,registerPassword) {
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword
        })
      });
      console.log(`${registerEmail},${registerPassword}`)
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const data = await response.json();
        // Process the data or return it as needed
        return data;
      } else {
        // Handle errors, e.g., log them or throw an error
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error during registration request:', error);
    }
  }
  