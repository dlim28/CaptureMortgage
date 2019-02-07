import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import '../styles/crm.css';
import FormUpdate from './FormUpdate'
import "react-table/react-table.css";
import ReactTable from "react-table";
import axios from 'axios';


class CRM extends Component {
  state = { 
    crm: [],
    update: false,
    updatePerson: null
  }

  handleUpdateClick(crm) {
    this.setState({
        update: true,
        updatePerson: crm
    });
    // console.log(this.state)
  }

  fetchData() {
    const config = { headers: {
      token: sessionStorage.getItem('token')
    }}
    console.log('fetching data')
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
    let data = []
    let obj = {}

      const columns = [{
        Header: 'NO',
        accessor: 'no'
      },
      {
        Header: 'Customer Name',
        accessor: 'name'
      },
      {
        Header: 'Status',
        accessor: 'status'
      },
      {
        Header: 'Status Date',
        accessor: 'date'
      },
      {
        Header: 'Category',
        accessor: 'category'
      }
    ]
    if (this.state.update === false) {
    return (
      <div>
        <h1 className="header_crm header">CRM</h1>
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
                <tr key={i} onClick={() => this.handleUpdateClick(crm)}>
                    <td>{mortgage.id}</td>
                    <td><a href={'#' + mortgage.id}>{mortgage.customerName}</a></td>
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


