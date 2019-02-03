import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/crm.css';
import FiscalYear from './FiscalYear';
import ReactTable from "react-table";

class CRM extends Component {
  render() {

    const data = [
    {
      no: 1,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 2,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 3,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 4,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 5,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 6,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 7,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 8,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 9,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 10,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 11,
      name: 'John Adams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    }
 ]

    const columns = [{
      Header: 'NO.',
      accessor: 'no'
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
    {
      Header: 'Status Date',
      accessor: 'stDate'
    },
    {
      Header: 'Category',
      accessor: 'category'
    }
  ]

    return (

          


          <div>

<div>
        <h1 class="header_crm header">CRM</h1>
        <select class='input-box' name="Category" id="username">          
          <option value="0">--select activity status--</option>
          <option value="1">Active Customers</option> 
          <option value="2">In-Active Customers</option>
          <option value="3">All Customers</option>
        </select> 
              <br></br>
        <input type="search" class="crm-search" data-table="order-table" placeholder="Search Name"></input>
        <br></br>
        <button className='search-button'>Search</button>
        </div>

              <ReactTable
                data={data}
                columns={columns}
                defaultPageSize = {10}
                pageSizeOptions = {[10, 20, 50]}
              />
          </div>      
    )

  }
}

export default CRM;


