import React, { Component } from 'react'
import '../styles/Login.css'
import logo from '../assets/CMP_Logo_White.png'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// axios.defaults.withCredentials = true

class Login extends Component {
  state = {}

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    this.setState({ [id]: value } )
  }

  submitForm = (e) => {
    e.preventDefault()
    const { username, password } = (this.state)
    const url = "http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/auth/login";
    const data = {
      username, 
      password
    }

    axios.post(url, data)
      .then(resp => {
        const { token } = resp.data
        // console.log(resp.data)
        console.log("token: ", token)
        sessionStorage.setItem("token", token)
        this.setState({ message: 'Successful login', error: undefined })
      })
      .catch(error => {
        const { status } = error.response;
        if (status === 403) {
          this.setState({ error: 'Incorrect username or password. Please try again.', message: undefined })
        }
      })

      
  }

  render() {
    const { error, message } = this.state;
    const token = sessionStorage.getItem('token');
    // console.log(token)
    if (!token) {
      return ( 
        <div className="LoginPage">
          <div className="top-rectangle">
            <div className="logo-text">                   
              <img className="logo-img" src={logo} alt={"logo"}/>
                  <h1 className="captureplus">Capture</h1>
                  <h1 className="mortgage">Mortgage</h1>
                  <h1 className="captureplus">+</h1>
                  <br></br>
            </div>
              <h1 className="crmSys">CRM System</h1>
          </div>

          <div className="loginInput">
            <h2 className="LoginHeader"> LOGIN </h2>

            <form>
              <input name="Username" className='inputbox' type="text" id="username" placeholder="Username" onChange={this.handleInputChange}></input>
              <br></br>
              <input name="Password" className='inputbox' type="password" id="password" placeholder="Password" onChange={this.handleInputChange}></input>
              <br></br>
              <button className="loginbutton" onClick={this.submitForm}>
                LOG IN
              </button>
            </form>
            { message && <p>{ message }</p> }
            { error && <p>{ error }</p> }

          </div>
        </div>

      )
    }
    else {
      return (
        <Redirect to="/dashboard" />
      )
    }
  }
}

export default Login;