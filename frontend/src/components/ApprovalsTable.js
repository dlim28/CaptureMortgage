import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';
import FormUpdate from './FormUpdate'

class ApprovalsTable extends Component {
  state = { 
    approvals: [],
    update: false,
    updatePerson: null
  }

  handleUpdateClick(approval) {
    this.setState({
        update: true,
        updatePerson: approval
    });
  }

  
  fetchData() {
    const config = { headers: {
      token: sessionStorage.getItem('token')
    }}
    // console.log('fetching data')
    axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/approvals', config)
      .then(resp => {
          console.log(resp)
          console.log(resp.data)
          this.setState({ approvals: resp.data })
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
      this.fetchData();
      setInterval(this.fetchData, 15000);
  }

  render() {
    const { approvals } = this.state;
    if (this.state.update === false) {
    return (
      <div>
        <div className="center">
          <h1 className="header approvals">APPROVALS</h1>
          <div className="approvals">
            <h3>CaptureMortgage+ Approvals Board</h3><span> </span>
            <h3><FiscalYear /></h3>
          </div>
          <table id="myTable">
            <thead>
              <tr className="approvals-back">
                <th>ID</th>
                <th>Moved to Approvals</th>
                <th>Customer Name</th>
                <th>Category</th>
                <th>Amount</th>
                <th>WIP</th>
                <th>Lender</th>
                <th>Employee</th>
              </tr>
            </thead>
            <tbody>
              {approvals.map((approval, i) => {
                return (
                <tr key={i} onClick={() => this.handleUpdateClick(approval)}>
                    <td>{approval.id}</td>
                    <td>{approval.statusDate}</td>
                    <td><a href={'#' + approval.id}>{approval.customerName}</a></td>
                    <td>{approval.category}</td>
                    <td>${Intl.NumberFormat().format(approval.amount)}</td>
                    <td>{approval.WIP}</td>
                    <td>{approval.lender}</td>
                    <td>{approval.employee}</td>
                </tr>
              )})}
            </tbody>

          </table>
        </div>
      </div>
    );
  } else {
      return (
        <FormUpdate customerData={this.state.updatePerson}/>
      )
    }
  }
}

export default ApprovalsTable;


