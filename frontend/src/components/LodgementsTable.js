import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import ReactTable from "react-table";

class LodgementsTable extends Component {
  render() {

    const data = [{
      id: 1,
      lodgements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      employee: 'Hank Hill'
    },
    {
      id: 2,
      lodgements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      employee: 'Hank Mill'
    },
    {
      id: 3,
      lodgements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      employee: 'Hank Till'
    },
    {
      id: 4,
      lodgements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      employee: 'Hank Dill'
    },
    {
      id: 5,
      lodgements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      employee: 'Hank Kill'
    },
    {
      id: 6,
      lodgements: '',
      name: 'Roy Agasthyan',
      category: 'Home Lone',
      amount: 2000,
      wip: '3 days',
      employee: 'Hank Zill'
    },
    {
    id: 7,
    lodgements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    employee: 'Hank Hill'
  },
  {
    id: 8,
    lodgements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    employee: 'Hank Mill'
  },
  {
    id: 9,
    lodgements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    employee: 'Hank Till'
  },
  {
    id: 10,
    lodgements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    employee: 'Hank Dill'
  },
  {
    id: 11,
    lodgements: '',
    name: 'Roy Agasthyan',
    category: 'Home Lone',
    amount: 2000,
    wip: '3 days',
    employee: 'Hank Kill'
  }
 ]

    const columns = [{
      Header: 'ID',
      accessor: 'id'
    },
    {
      Header: 'Moved to Lodgements',
      accessor: 'lodgements'
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
      Header: 'Employee',
      accessor: 'employee'
    }
  ]

    return (

          


          <div>

<div class="lodgements header">
    <h3>CaptureMortgage+ Lodgements Board</h3><span> </span>
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

export default LodgementsTable;


