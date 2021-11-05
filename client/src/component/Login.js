import React from "react";
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            userName:"",
            passWord:"",
            loginStatus:false
        }

        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.loginOnClike = this.loginOnClike.bind(this);
    }

    handleUserName(e){
        this.setState({
            userName:e.target.value
        })
    }

    handlePassword(e){
        this.setState({
            passWord:e.target.value
        })
    }


    loginOnClike = (e) => {
        const name = this.state.userName;
        console.log(name);
        const password = this.state.passWord;
        console.log(password);
        // this.loginOnClike(data)
        //     .then(data) => {
        //         this.setState({
        //             loginStatus: true,
        //         })
        //     }).catch(err) => {
        //         console.log("ERROR");
        //     }
        // }
        e.preventDefault();
    }




    render = () =>{
        const {userName, passWord, loginStatus} = this.state;

        return (
            <div className="Main">
                <form className="Login_Form">
                    <div className="login_title"> Welcome to Titan Talks</div>
                    <div class="mb-8">
                        <label className = "login_label">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  value={this.state.userName}  onChange={this.handleUserName} type="text" placeholder="Username"/>
                    </div>
                    <div class="mb-6">
                        <label className = "login_label">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={this.state.passWord}  onChange={this.handlePassword} type="password" placeholder="Password"/>
                    </div>
                    <div className ="buttons">
                        <button className="login_button" type="submit" onClick = {this.loginOnClike}>
                            Login
                        </button>
                        <button className="register_button" type="button">
                        <Link to= "/register" > 
                        <li> Register</li>
                    </Link>
                        </button>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
}

export default Login;