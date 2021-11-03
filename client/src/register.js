import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

function Register() {

  const [Firstname, setFirstname] = useState('')
  const [Lastname, setLastname] = useState('')
  const [Username, setUsername] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const registerAccount = () => {
    Axios.post('http://localhost:3001/api/insert', {FirstName: Firstname, LastName: Lastname, UserName:Username, Email:Email, Password:Password}).then(()=> {
      alert('Your account was successdully created')
    });
    
  };

  return (
      <section className= "registerSize">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Register to Titan Talks</h1>
      &nbsp;
      <img src= "/images/titans2.gif" alt="" class= "image2" />
      </div>
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0" className = "register"></div>
      <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <div class="relative mb-4">
          <label for="Firstname" class="leading-7 text-sm text-gray-600">First Name</label>
          <input type="text" id="Firstname" name="Firstname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange = {(e) =>{
            setFirstname(e.target.value)
          }}></input>
        </div>
        <div class="relative mb-4">
          <label for="Lastname" class="leading-7 text-sm text-gray-600">Last Name</label>
          <input type="text" id="Lastname" name="Lastname" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange = {(e) =>{
            setLastname(e.target.value)
          }}></input>
        </div>
        <div class="relative mb-4">
          <label for="Username" class="leading-7 text-sm text-gray-600">Username</label>
          <input type="text" id="Username" name="Username" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange = {(e) =>{
            setUsername(e.target.value)
          }}></input>
        </div>
        <div class="relative mb-4">
          <label for="Email" class="leading-7 text-sm text-gray-600">Email</label>
          <input type="Email" id="Email" name="Email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange = {(e) =>{
            setEmail(e.target.value)
          }}></input>
        </div>
        <div class="relative mb-4">
        <label for="Password" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="Password" id="Password" name="Password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange = {(e) =>{
          setPassword(e.target.value)
        }}></input>
        </div>
        <button  onClick={registerAccount} class="text-white bg-red-800 border-0 py-2 px-8 focus:outline-none hover:bg-bg-blue-900 rounded text-lg">Register</button>
        &nbsp;
      </div>
      </div>
      </section>
  );
}

export default Register;