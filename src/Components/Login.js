import React, { useState }from 'react'
import './Login.css'
import {Link} from 'react-router-dom'


function Login() {

  const[ email, setEmail] =useState("");
  const[ password, setPassword] =useState("");
  

  const getData =(e)=>{
    e.preventDefault();

    // const getuserArr=JSON.stringify(localStorage.getItem("user"));
    // console.log( getuserArr);

    let logdetails={
      email:email,
      password:password
    }
    if(logdetails.email===""){
      alert("Enter Your Email")
    }else if(!logdetails.email.includes("@")){
      alert("Your Email is missing an @  in it")
    }else  if(logdetails.password===""){
    alert("Enter Your Password")
    }else if(logdetails.password.length<10){
    alert("Your Password Must Have 10 Characters")
    }
    else {
      let storedUsers = JSON.parse(localStorage.getItem("user"));

      let userFound=false;
      
      for(let user of storedUsers) {
        
        if(email === user.email && password === user.password){

          alert("You have enter correct Email and password");
          userFound=true
          window.location = "/Home";
        }
       }
       if(!userFound){
        alert("You have enter wrong Email and password");
       }
    
    
      
    
    // if(email===getuserArr[email] && password===getuserArr[password]){
    //   alert("You have enter coorect Email and password");
    //   window.Location='/Home';
    // }
    // else if(getuserArr[email]==="" && getuserArr[password]===""){
    //   alert("Your email or password emp");
      
    // }
    // else{
    //   alert("Your email or password incorrect");
    //   window.Location="/Home";
    // }
      
    }

 
  }
  return (
    <div className='formcontainer1'>
        
    <form >
        <h1>Login  Here</h1>
       
       
        <div className='form-group'>
            <label>Email</label>
            <input
             type='text'
             className='=form-control'
             placeholder='Enter Email'
             onChange={(event)=>setEmail(event.target.value)}
             />
        </div>
      
        
        <div className='form-group'>
            <label>Password</label>
            <input
             type='password'
             className='=form-control'
             placeholder='Enter Password'
             onChange={(event)=>setPassword(event.target.value)}
             />
        </div>
        <button  className='btn'   onClick={ getData}>Sign In</button>
        <p>Have not registered? {" "} <Link  to="/sign-up">sign up?</Link></p>
    </form>
</div>
  )
}

export default Login