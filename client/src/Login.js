import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
      <section className="loginSize">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Login to Titan Talks</h1>
      &nbsp;
      <img src= "/images/titans2.gif" alt="" class= "image2" />
      </div>
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0" className = "login"></div>
      <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
        <div class="relative mb-4">
          <label for="Username" class="leading-7 text-sm text-gray-600">Username</label>
          <input type="text" id="Username" name="Username" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
        </div>
        <div class="relative mb-4">
          <label for="Password" class="leading-7 text-sm text-gray-600">Password</label>
          <input type="Password" id="Password" name="Password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
        </div>
        <button class="text-white bg-red-800 border-0 py-2 px-8 focus:outline-none hover:bg-bg-blue-900 rounded text-lg">Login</button>
        &nbsp;
        <ul className = "button">
        <Link to= "/register" class= "text-white bg-red-800 border-0 py-2 px-8 focus:outline-none hover:bg-bg-blue-900 rounded text-lg"> 
            <li>Not a User? Register to Titan-Talks</li>
        </Link>
     </ul>
      </div>
      </div>
      </section>
  );
}

export default Login;