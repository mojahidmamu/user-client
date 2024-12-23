import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { data } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  
const handleUser = event => {
   event.preventDefault();
   const form = event.target;
   const name = form.name.value;
   const address = form.address.value;
   const user = {name, address}
   console.log(user)

   fetch('http://localhost:3000/users', {
    method: 'POST',
    headers:{
       'content-type' : 'aplication/json'
    },
    body: JSON.stringify(user)
   })
   .then()
}

  return (
    <>
      <h2>Users Managment System...</h2>
      <h3>Users: {users.length} </h3>

      <form onSubmit={handleUser}>
        <input type="text" name="name" id="" /><br />
        <input type="text" name="address" id="" />
        <br />
        <input type="submit" id="" />
      </form>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            ID: {user.id}, Name: {user.name}.Address:{user.address} 
          </p>
        ))}
        {/* {users.map(user => (
          <p key={user.id}>Address: {user.address} </p>
          ))} */}
      </div>
    </>
  );
}

export default App;
