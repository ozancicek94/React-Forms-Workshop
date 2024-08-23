import { useState } from "react";

export default function Authenticate ({token}) {

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [userData, setUserData] = useState("");

  const handleClick = async () => {

    try {
      const request = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
        method: "GET",
        headers: {
          "Content-Type": "application.json",
          Authorization:`Bearer ${token}`,
        }
    })
    const response = await request.json();
    setSuccessMessage(response.message);
    setUserData(response.data.username);
    console.log(response);

    }
    catch(error) {setError(error.message)}

  }
  return (
    <div>
    <h2>Authenticate</h2>
    {successMessage && <p>{successMessage}</p>}
    {userData}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>
    </div>
  )
}