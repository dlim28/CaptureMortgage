import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
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
      no: 6,
      name: 'John Sadams',
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
      accessor: 'name',
      filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
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