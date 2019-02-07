import React, { Component } from 'react';
import '../App.css'
import LeadsTable from './LeadsTable'
import LodgementsTable from './LodgementsTable'
import ApprovalsTable from './ApprovalsTable'
import SettlementsTable from './SettlementsTable'


class Dashboard extends Component {
  // componentDidMount () {
  //   const script = document.createElement("script");

  //   const slideIndex = 0;
  //   showSlides();
    
  //   function showSlides() {
  //     const i;
  //     const slides = document.getElementsByClassName("mySlides");
  //     const dots = document.getElementsByClassName("dot");
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";  
  //     }
  //     slideIndex++;
  //     if (slideIndex > slides.length) {slideIndex = 1}    
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //     }
  //     slides[slideIndex-1].style.display = "block";  
  //     dots[slideIndex-1].className += " active";
  //     setTimeout(showSlides, 20000); // Change image every 20 seconds
  //   }

  //   document.body.appendChild(script);
  // }

  render() {
    
    return (
      <>
        
        <div className="all-tables">
          <div className="animate-one">
            <LeadsTable />
          </div>
          <div className="animate-two">
            <LodgementsTable />
          </div>
          <div  className="animate-three">
            <ApprovalsTable />
          </div>
          <div className="animate-four">
            <SettlementsTable />
          </div>
        </div>

      </>
    );
  }
}

export default Dashboard;
