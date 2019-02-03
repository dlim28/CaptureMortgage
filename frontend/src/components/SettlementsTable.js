import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import ReactTable from "react-table";

class SettlementsTable extends Component {
  render() {

    const data = [{
      id: 1,
      settlements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,

      lender: 'Bob Builder',
      employee: 'Hank Hill'
    },
    {
      id: 2,
      settlements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,

      lender: 'Bob Builder',
      employee: 'Hank Mill'
    },
    {
      id: 3,
      settlements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,

      lender: 'Bob Builder',
      employee: 'Hank Till'
    },
    {
      id: 4,
      settlements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,

      lender: 'Bob Builder',
      employee: 'Hank Dill'
    },
    {
      id: 5,
      settlements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,

      lender: 'Bob Builder',
      employee: 'Hank Kill'
    },
    {
      id: 6,
      settlements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,

      lender: 'Bob Builder',
      employee: 'Hank Zill'
    },
    {
    id: 7,
    settlements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    lender: 'Bob Builder',
    employee: 'Hank Hill'
  },
  {
    id: 8,
    settlements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    lender: 'Bob Builder',
    employee: 'Hank Mill'
  },
  {
    id: 9,
    settlements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    lender: 'Bob Builder',
    employee: 'Hank Till'
  },
  {
    id: 10,
    settlements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    lender: 'Bob Builder',
    employee: 'Hank Dill'
  },
  {
    id: 11,
    settlements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    lender: 'Bob Builder',
    employee: 'Hank Kill'
  }
 ]

    const columns = [{
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'Moved to Settlements',
      accessor: 'settlements'
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

<div class="settlements header">
    <h3>CaptureMortgage+ Settlements Board</h3><span> </span>
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

export default SettlementsTable;


