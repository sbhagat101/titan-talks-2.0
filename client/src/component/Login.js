import React, {useState, useEffect} from "react";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './logo.svg';

import Axios from 'axios'

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setloginStatus] =  useState("")


    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response) => {
            if(response.data.message){
                setloginStatus(response.data.message)
            } else {
                setloginStatus(response.data[0].userName)
            }
            
        })
    };

  return (
    <section className= "Main">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      </div>
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0" className = "register"></div>
      <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Welcome to Titan Talks</h2>
        <div class="relative mb-4">
          <label for="Username" class="leading-7 text-sm text-gray-600">Username</label>
          <input type="text" id="Username" name="Username" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange = {(e) =>{
            setUsername(e.target.value)
          }}></input>
        </div>
        <div class="relative mb-4">
        <label for="Password" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="Password" id="Password" name="Password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange = {(e) =>{
          setPassword(e.target.value)
        }}></input>
        </div>
        <button  onClick={login} className="button">Login</button>
        &nbsp;
        <button className="button"   type="button">
        <Link to= "/register" > 
        <li> Register</li>
        </Link>
        </button>
        <h1 class="text-gray-900 text-lg font-medium title-font mb-5">{loginStatus}</h1>
      </div>
      <Footer />
      </div>
      </section>
)
}

export default Register;