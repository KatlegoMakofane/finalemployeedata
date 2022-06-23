import './Registeration.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Login from './Login';

function Registeration() {

    const[ name, setName] =useState("");
    const[ surname, setSurname] =useState("");
    const[ email, setEmail] =useState("");
    const[ contact, setContact] =useState("");
    const[ employeenumber, setEmployeenumber] =useState("");
    const[ password, setPassword] =useState("");
    const[ image, setImage]=useState("");
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    


    function setPic(image){
        const imgPath = document.querySelector("#userImage1").files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function() {
            localStorage.setItem('image', reader.result);
        }, false);
        reader.readAsDataURL(imgPath);
    }


    const register=(e)=>{
        e.preventDefault();
        let employeeDetails={
            name:name,
            surname:surname,
            email:email,
            contact:contact,
            employeenumber:employeenumber,
            password:password,
            image:localStorage.getItem('image'),
            date: new Date



        };
        if(employeeDetails.name===""){
            alert("Enter Your Name")
        }else if(employeeDetails.surname===""){
            alert("Enter Your Surname")
        }else if(employeeDetails.email===""){
            alert("Enter Your Email")
        }else if(!employeeDetails.email.includes("@")){
            alert("Your Email is missing an @  in it")
        }else if(employeeDetails.image===""){
            alert("Choose Your picture")
        }else if(employeeDetails.contact===""){
            alert("Enter Your Contact Number")
        }else if(employeeDetails.employeenumber===""){
            alert("Enter Your Employee number")
        }else if(employeeDetails.password===""){
            alert("Enter Your Password")
        }else if(employeeDetails.password.length<10){
            alert("Your Password Must Have 10 Characrters")
        }else if(!employeeDetails.password.match(numbers)){
            alert("Enter add 1 number");
        }else if(!employeeDetails.password.match(lowerCaseLetters)){
            alert("Enter 1 lower case letter")
        }else if(!employeeDetails.password.match(upperCaseLetters)){
            alert("Enter 1 upper case letter");
        }

        else {
            let storedEmpolyeeDetails =new Array();
            let storedEmployeeUsers=JSON.parse(localStorage.getItem("user"));
            if(storedEmployeeUsers){
                storedEmpolyeeDetails=storedEmployeeUsers;
                storedEmpolyeeDetails.push(employeeDetails);
                console.log(employeeDetails);

            }else{
                storedEmpolyeeDetails.push(employeeDetails);
            }
            alert("Your Account have been created");
            window.location="/"
            localStorage.setItem("user",JSON.stringify(storedEmpolyeeDetails));
           
            
        }
  
    }
    
  return (
    <div className='formcontainer'>
        
    <form >
        <h1>Regiser Employee Here</h1>
       
        <div className='form-group'>
            <label>Name</label>
            <input
             type='text'
             className='=form-control'
             placeholder='Enter Full Name'
             onChange={(event)=>setName(event.target.value)}
             />
        </div>
        <div className='form-group'>
            <label>Surname</label>
            <input
             type='text'
             className='=form-control'
             placeholder='Enter Full Name'
             onChange={(event)=>setSurname(event.target.value)}
             />
        </div>
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
            <label>Image</label>
            <input
             type='file'
             accept='image/png ,image/jpg'
             className='=form-control'
             placeholder='Enter Contact Number'
             id='userImage1' 
             onChange={(event)=>setPic  (setImage(event.target.value))}
             />
        </div>
        <div className='form-group'>
            <label>Contact Number</label>
            <input
             type='phone'
             className='=form-control'
             placeholder='Enter Contact Number'
             onChange={(event)=>setContact (event.target.value)}
             />
        </div>
        <div className='form-group'>
            <label>Employee Number</label>
            <input
             type='number'
             className='=form-control'
             placeholder='Enter Employee Number'
             onChange={(event)=>setEmployeenumber(event.target.value)}
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
        <button  className='btn'  onClick={ register} >register</button>
        <p>Already registered {" "} <Link to="/">login in?</Link></p>
    </form>
</div>
  )
}

export default Registeration