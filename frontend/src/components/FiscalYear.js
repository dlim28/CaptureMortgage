import React, { Component } from 'react';

class FiscalYear extends Component {

    fiscalYear = () => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const pastYear = currentYear - 1
        const nextYear = currentYear + 1
        if (currentMonth > 6) {
            return currentYear + "/" + nextYear
        } else {
            return pastYear + "/" + currentYear
        }
    }

    render() {
        return (
            <div>
                {this.fiscalYear()}
            </div>
            );
        }
    }
  
  export default FiscalYear;