import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import UpdateForm from './UpdateForm'
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';



class App extends Component {
  render() {
    return (
      <div>
      <UpdateForm/>
      </div>
    );
  }
}

export default App;
