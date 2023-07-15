"use client";
// Import React, fetch, use, useState, and useEffect
import React, { useState, useEffect } from "react";
// import fetch from "next/fetch";
import { use } from "react";

// Define an interface for the request body
interface User {
  email: string;
  id: string;
  password: string;
  userName: string;
}
interface ErrorResposne {
  errorMsg: string;
  actionRequired: string;
}
// Define the API endpoint
const url:string  = "http://localhost:8099/todo/v1/user";

// Define the request options
const options: RequestInit = {
  method: "POST", // Specify the HTTP method
  headers: {
    "Content-Type": "application/json",
    country: "AE", // Specify the content type
  },
};

// Create a Next 13 component that uses use and fetch
export default function UserComponent() {
  // Use useState to manage the user data and the loading state
  const [user, setUser] = useState<User>({
    email: "",
    id: "",
    password: "",
    userName: "",
  });
  const [userResposne, setUserResposne] = useState<User>({
    email: "",
    id: "",
    password: "",
    userName: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");

  //   // Use useEffect to set the loading state when the user data changes
  //   useEffect(() => {
  //     // Check if the user data is not empty
  //     if (user.email && user.id && user.password && user.userName) {
  //       // Set the loading state to true
  //       setLoading(true);
  //     } else {
  //       // Set the loading state to false
  //       setLoading(false);
  //     }
  //   }, [user]);
  function createUser1() {
    if (user.email && user.id && user.password && user.userName) {
      alert(user.email);
      // const response:any = fetch(url, { ...options, body: JSON.stringify(user) });
      const resposne: any = fetch(url, {}).then(res =>{
        setUserResposne(resposne.json());
        alert("id " + userResposne.id);

      })
     
    }
  }

  const createUser = async () => {
    // if(!user.email==="" && user.id && user.password && user.userName){
    alert(user.email);
    setLoading(true);
    const datas = JSON.stringify(user);
    console.log(datas);

  
    //  await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", "country": "AE" },
    //   body: datas,
    // }).then(response =>{
    //   if(response.ok){
    //   const data:User =  response.json() ;
    //   alert("id " + data.id);
    //   setUser({ ...user, id:data.id })
    //   setLoading(false);
    //   }
     
    // }).catch(err=>{alert(err)})
    
    
  };

  // Return a JSX element with a sign up form and a loading indicator
  return (
    <div>
      <h1>Sign up</h1>
      <div>
        {/* <form > */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          required
        />
        <button
          type="button"
          //  disabled={loading}
          onClick={createUser}
        >
          Sign up
        </button>
        {/* </form> */}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}
