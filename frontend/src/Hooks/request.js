export async function httploginRequest({loginEmail,loginPassword}){
    await fetch(`http://localhost:8000/auth/login`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: loginEmail,
            password: loginPassword
        })
    })
}

export async function httpRegisterRequest({registerEmail,registerPassword}){ 
   await fetch(`http://localhost:8000/auth/register`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: registerEmail,
            password: registerPassword
        })
    })
}


