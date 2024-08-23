import { useState } from "react";


export default function SignUpForm ({token, setToken}) {

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

  const handleSubmit = async (event) => {

    event.preventDefault();

    

    try {

      if((userName.length<8)){setError("Username must be more than 8 characters!");
        return ;
      } 
      ;
      const request = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
        method:'POST',
        headers: {
          'Content-Type': 'application.json'
        },
        body: JSON.stringify(userName, password)
      });
      const response = await request.json();
      console.log(response);
      setToken(response.token);
      setUserName("");
      setPassword("");
    }
    catch(error){setError(error.message)}
  }

  return (

    <div>

    <h2>Sign Up</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <label> Username: <input value={userName} onChange={(event)=> {setUserName(event.target.value)}} />
      </label> <br/>
      <label> Password: <input value={password} type="password" onChange={(event)=> {setPassword(event.target.value)}} />
      </label> <br/>
      <button>Submit</button>
    </form>

    </div>
  )

}

