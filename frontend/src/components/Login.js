import React, { Component } from "react";
import '../styles/Login.css';
// import logo from '../assets/CMP_Logo_White.png'

class Login extends Component {
  // handleClick = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3000/auth/register')
  // }

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    console.log(e.currentTarget)
    this.setState({ [id] : value })
  }

  render() {
    console.log(this.state)
    return (
      <div class="Login">
        <form>
          <input class="inputbox" placeholder="Username" type="text" id="username" onChange={this.handleInputChange} />
          <br></br>
          <input class="inputbox" placeholder="Password" type="password" id="password"
          onChange={this.handleInputChange}  />
          <br></br>
          <button onClick={this.handleClick} class="loginbutton" type="submit">LOG IN</button>
          <br></br>
          <p class="passwordForgot"><a href="#">Forgot my Password</a></p>  
        </form>
      </div>
    )
  }
}

export default Login;
