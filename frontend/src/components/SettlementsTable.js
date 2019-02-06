import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import ReactTable from "react-table";
import axios from 'axios';

class SettlementsTable extends Component {

  state = { settlements: [] }

  componentDidMount() {
    axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/settlements')
        .then(resp => {
            console.log(resp.data)
            this.setState({ settlements: resp.data })
        })
    }

  render() {

    const { settlements } = this.state;

    const data = [{
      id: settlements.id,
      settlements: settlements.statusDate,
      name: settlements.customerName,
      category: settlements.category,
      amount: settlements.amount,
      lender: settlements.lender,
      employee: settlements.employee
    }
 ]

 {settlements.map((settlements, i) => {

 })
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
    }
      

export default SettlementsTable;
