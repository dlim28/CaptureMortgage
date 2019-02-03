import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import ReactTable from "react-table";

class ApprovalsTable extends Component {
  render() {

    const data = [{
      id: 1,
      approvals: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      lender: 'Bob Builder',
      employee: 'Hank Hill'
    },
    {
      id: 2,
      approvals: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      lender: 'Bob Builder',
      employee: 'Hank Mill'
    },
    {
      id: 3,
      approvals: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      lender: 'Bob Builder',
      employee: 'Hank Till'
    },
    {
      id: 4,
      approvals: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      lender: 'Bob Builder',
      employee: 'Hank Dill'
    },
    {
      id: 5,
      approvals: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      lender: 'Bob Builder',
      employee: 'Hank Kill'
    },
    {
      id: 6,
      approvals: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      lender: 'Bob Builder',
      employee: 'Hank Zill'
    },
    {
    id: 7,
    approvals: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    lender: 'Bob Builder',
    employee: 'Hank Hill'
  },
  {
    id: 8,
    approvals: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    lender: 'Bob Builder',
    employee: 'Hank Mill'
  },
  {
    id: 9,
    approvals: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    lender: 'Bob Builder',
    employee: 'Hank Till'
  },
  {
    id: 10,
    approvals: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    lender: 'Bob Builder',
    employee: 'Hank Dill'
  },
  {
    id: 11,
    approvals: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    lender: 'Bob Builder',
    employee: 'Hank Kill'
  }
 ]

    const columns = [{
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'Moved to Approvals',
      accessor: 'approvals'
    },
    {
      Header: 'Customer Name',
      accessor: 'name'
    },
    {
      Header: 'Category',
      accessor: 'category'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'WIP',
      accessor: 'wip'
    },
    {
      Header: 'Lender',
      accessor: 'lender'
    },
    {
      Header: 'Employee',
      accessor: 'employee'
    }
  ]

    return (

          


          <div>

<div class="approvals header">
    <h3>CaptureMortgage+ Approvals Board</h3><span> </span>
    <h3><FiscalYear /></h3>
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

export default ApprovalsTable;


