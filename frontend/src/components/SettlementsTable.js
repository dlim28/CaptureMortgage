import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';
import FormUpdate from './FormUpdate'

class SettlementsTable extends Component {
  state = { 
    settlements: [],
    update: false,
    updatePerson: null
}

handleUpdateClick(settlement) {
    this.setState({
        update: true,
        updatePerson: settlement
        
    });
}
  

  componentDidMount() {
    axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/settlements')
        .then(resp => {
            console.log(resp.data)
            this.setState({ settlements: resp.data })
        })
    }

  render() {
    const { settlements } = this.state;
    if (this.state.update === false){
    return (
      <div>

        <div class="center">
          <h1 class="header settlements">SETTLEMENTS</h1>
          <div class="settlements">
            <h3>CaptureMortgage+ Settlements Board</h3><span> </span>
            <h3><FiscalYear /></h3>
          </div>
          <table id="myTable">
            <tr class="settlements-back">
              <th>No.</th>
              <th>Moved to Settlements</th>
              <th>Customer Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Lender</th>
              <th>Employee</th>
            </tr>
            <tbody>
              {settlements.map((settlement, i) => {
                return (
                <tr key={i} onClick={() => this.handleUpdateClick(settlement)}>
                    <td>{settlement.id}</td>
                    <td>{settlement.statusDate}</td>
                    <td><a href="#">{settlement.customerName}</a></td>
                    <td>{settlement.category}</td>
                    <td>${Intl.NumberFormat().format(settlement.amount)}</td>
                    <td>{settlement.lender}</td>
                    <td>{settlement.employee}</td>
                </tr>
                )})}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  else {
      return (
         <FormUpdate customerData={this.state.updatePerson}/>
      )
  }
  }
}

export default SettlementsTable;


