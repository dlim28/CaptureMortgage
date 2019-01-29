import React from 'react';
import './Login.css';
import logo from './assets/CMP_Logo_White.png'


const Login = () => {
    return (
      // <div class="main-grid">
        <div class="LoginPage">

        <div class="top-rectangle">
        <div class="logo-text">                   
                <img class="logo-img" src={logo} alt={"logo"}/>
                    <h1 class="captureplus">Capture</h1><h1 class="mortgage">Mortgage</h1><h1 class="captureplus">+</h1>
                    <br></br>
                </div>
                <h1 class="crmSys">CRM System</h1>
        </div>

      <div class="loginInput">
          <h2 class="LoginHeader"> LOGIN </h2>
            <input name="UserName" className='inputbox'  type="text" id="username" placeholder="Username"></input>
              <br></br>
            <input name="PassName" className='inputbox'  type="password" id="password" placeholder="Password"></input>
              <br></br>
            <button className="loginbutton">
              LOG IN
            </button>
            <p class="passwordForgot"><a href="#">Forgot my Password</a></p>

      </div>
      </div>


// </div>
    
    );
  }

  export default Login;