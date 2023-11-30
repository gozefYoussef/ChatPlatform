export function httploginRequest({loginEmail,loginPassword}){
    fetch(`http://localhost:8000/login`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: loginEmail,
            password: loginPassword
        })
    })
}

export function httpRegisterRequest({registerEmail,registerPassword}){ 
    fetch(`http://localhost:8000/register`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: registerEmail,
            password: registerPassword
        })
    })
}


