import React, { Component } from 'react';
import '../App.css'
import '../styles/globalTableStyles.css';
import LeadsTable from './LeadsTable'
import LodgementsTable from './LodgementsTable'
import ApprovalsTable from './ApprovalsTable'
import SettlementsTable from './SettlementsTable'




class Dashboard extends Component {

  // componentDidMount() {
  //   this.showSlides()
  // }

  // // Change image every 3 seconds
  // showSlides() {
  //   let i;
  //   const slides = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < slides.length; i++) {
  //     if (i !== 0) {
  //       return slides[i].style.display = "block"; 
  //     }
  //     slides[i].style.display = "none";  
  //   }
  // } 

  // const newSlideIndex = slideIndex + 1
  // this.setState({slideIndex: newSlideIndex})
  // if (slideIndex > slides.length) {this.setState({slideIndex: 1})}
  // slides[slideIndex].style.display = "block"; 
  // setInterval(this.showSlides, 3000)

  render() {    
    return (
      <>
        <div className= 'clearbox'>
          <div className="all-tables animate">

            <div className="mySlides fade dashboard">
              <LeadsTable />
            </div>
            <div className="mySlides fade dashboard">
              <LodgementsTable />
            </div>
            <div  className="mySlides fade dashboard">
              <ApprovalsTable />
            </div>
            <div className="mySlides fade dashboard">
              <SettlementsTable />
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Dashboard;
