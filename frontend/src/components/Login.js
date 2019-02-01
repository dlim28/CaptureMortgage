import React, { Component } from "react";
import '../styles/Login.css';
import logo from '../assets/CMP_Logo_White.png'

class Login extends Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log(e)
  }
  render() {
    return (

      <div class="Login">
        <form>
          <input class="inputbox" placeholder="Username" type="text" id="username" />
          <br></br>
          <input class="inputbox" placeholder="Password" type="password" id="password" />
          <br></br>
          <button onClick={this.handleClick} class="loginbutton" type="submit">LOG IN</button>
          <br></br>
          <p class="passwordForgot"><a href="#">Forgot my Password</a></p>  
        </form>
      </div>
    )
  }
}

//       <div class="LoginPage">

//         <div class="top-rectangle">
//           <div class="logo-text">                   
//             <img class="logo-img" src={logo} alt={"logo"}/>
//                 <h1 class="captureplus">Capture</h1><h1 class="mortgage">Mortgage</h1><h1 class="captureplus">+</h1>
//                 <br></br>
//           </div>
//             <h1 class="crmSys">CRM System</h1>
//         </div>

export default Login;
