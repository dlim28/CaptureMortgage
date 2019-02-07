import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/crm.css';
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
      name: 'John Kadams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 3,
      name: 'John Tadams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 4,
      name: 'John Nadams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 5,
      name: 'John Madams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 6,
      name: 'John Sadams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 7,
      name: 'John Ladams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 8,
      name: 'John Cadams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 9,
      name: 'John Zadams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 10,
      name: 'John Nadams',
      status: 'Lead Lost',
      stDate: '01/01/2019',
      category: 'Home Loan'
    },
    {
      no: 11,
      name: 'John Badams',
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
        Header: "Name",
        columns: [
          {
            Header: "Name",
            accessor: "name",
            filterMethod: (filter, row) =>
              row[filter.id].startsWith(filter.value) &&
              row[filter.id].endsWith(filter.value)
          },
        ]
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

<ReactTable
  data={data}
  filterable
  defaultFilterMethod={(filter, row) =>
  String(row[filter.id]) === filter.value}
  columns={columns}
  defaultPageSize = {10}
  pageSizeOptions = {[10, 20, 50]}
/>
</div>      
)

}
}


export default CRM;
