import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import '../styles/crm.css';
import axios from 'axios';
import FormUpdate from './FormUpdate'

class CRM extends Component {
  state = { 
    crm: [],
    update: false,
    updatePerson: null
  }

  handleUpdateClick(lodgement) {
    this.setState({
        update: true,
        updatePerson: lodgement
    });
    // console.log(this.state)
  }

  fetchData() {
    const config = { headers: {
      token: sessionStorage.getItem('token')
    }}
    // console.log('fetching data')
    axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/crm', config)
    .then(resp => {
        console.log(resp.data)
        this.setState({ crm: resp.data })
    })
  }

  componentDidMount() {
      this.fetchData();
      setInterval(this.fetchData, 15000);
  }

  render() {
    const { crm } = this.state;
    if (this.state.update === false) {
    return (
      <div>
        <h1 className="header_crm header">CRM</h1>
        <select className='input-box' name="Category" id="username">          
          <option value="0">--select activity status--</option>
          <option value="1">Active Customers</option> 
          <option value="2">In-Active Customers</option>
          <option value="3">All Customers</option>
        </select> 
              <br></br>
        <input type="search" className="crm-search" data-table="order-table" placeholder="Search Name"></input>
        <br></br>
        <button className='search-button'>Search</button>
        <table id="myTable">
          <thead>
            <tr className="table_header_crm">
              <th>NO.</th>
              <th>Customer Name</th>
              <th>Status</th>
              <th>Status Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {crm.map((mortgage, i) => {
                return (
                <tr key={i}>
                    <td>{mortgage.id}</td>
                    <td><a href={'/update/' + mortgage.id}>{mortgage.customerName}</a></td>
                    <td class='capitalize'>{mortgage.status}</td>
                    <td>{mortgage.statusDate.slice(0, 10)}</td>
                    <td>{mortgage.category}</td>
                </tr>
            )})}
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <FormUpdate customerData={this.state.updatePerson}/>
    )
  }
}
}

export default CRM;


