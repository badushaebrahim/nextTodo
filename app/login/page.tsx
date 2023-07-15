"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

interface Userlogin{
	 userName : string ,
	 userPassword : string 
} 

export default  function login() {

	const [user, setUser] = useState<Userlogin>({
		userPassword: "",
		userName: "",
	      });
	      const [loading, setLoading] = useState(false);

function loginUser(){

	var myHeaders = new Headers();
myHeaders.append("userCountry", "JO");
myHeaders.append("uuid", "dolor");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "*/*");


// var requestOptions = {
// 	method: 'POST',
// 	headers: myHeaders,
// 	body: JSON.stringify(user),
// 	redirect: 'follow'
//       };


    var  respose: any   =  fetch("http://localhost:7832/auth-management/v1/auth/user/sign-in", {
	method: 'POST',
	headers: myHeaders,
	body: JSON.stringify(user),
	redirect: 'follow'
      })
  .then(response => response.text())
  .then(result => {console.log(result)
    const router = useRouter();
    router.push("/home")
    alert(result)

})
  .catch(error => console.log('error', error));



  console.log(respose);
  

      



}



	return (
		<div>
			login
			<form>
				
			<label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          required
        />
			<label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={user.userPassword}
          onChange={(e) => setUser({ ...user, userPassword: e.target.value })}
          required
        />

<button
          type="button"
          //  disabled={loading}
          onClick={loginUser}
        >
          Sign up
        </button>
        {/* </form> */}
        {loading && <p>Loading...</p>}


			</form>
		</div>
	)
}


