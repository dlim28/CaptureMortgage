import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import ReactTable from "react-table";

class LeadsTable extends Component {
  render() {

    const data = [{
      id: 1,
      leads: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      referrer: 'LP Staff',
      employee: 'Hank Hill'
    },
    {
      id: 2,
      leads: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      referrer: 'LP Staff',
      employee: 'Hank Mill'
    },
    {
      id: 3,
      leads: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      referrer: 'LP Staff',
      employee: 'Hank Till'
    },
    {
      id: 4,
      leads: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      referrer: 'LP Staff',
      employee: 'Hank Dill'
    },
    {
      id: 5,
      leads: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      referrer: 'LP Staff',
      employee: 'Hank Kill'
    },
    {
      id: 6,
      leads: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      referrer: 'LP Staff',
      employee: 'Hank Zill'
    },
    {
    id: 7,
    leads: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    referrer: 'LP Staff',
    employee: 'Hank Hill'
  },
  {
    id: 8,
    leads: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    referrer: 'LP Staff',
    employee: 'Hank Mill'
  },
  {
    id: 9,
    leads: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    referrer: 'LP Staff',
    employee: 'Hank Till'
  },
  {
    id: 10,
    leads: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    referrer: 'LP Staff',
    employee: 'Hank Dill'
  },
  {
    id: 11,
    leads: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    referrer: 'LP Staff',
    employee: 'Hank Kill'
  }
 ]

    const columns = [{
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'Entered as Lead',
      accessor: 'leads'
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
      Header: 'Referrer',
      accessor: 'referrer'
    },
    {
      Header: 'Employee',
      accessor: 'employee'
    }
  ]

    return (

          


          <div>

<div class="leads header">
    <h3>CaptureMortgage+ Leads Board</h3><span> </span>
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

export default LeadsTable;


