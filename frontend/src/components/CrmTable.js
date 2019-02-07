import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import "react-table/react-table.css";
import ReactTable from "react-table";
import axios from 'axios';
import matchSorter from 'match-sorter'

class CRM extends Component {

  state = { crm: [] }

  componentDidMount() {
    const config = { headers: {
        token: sessionStorage.getItem('token')
    }}
    
      axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/crm', config)
          .then(resp => {
              console.log(resp.data)
              this.setState({ crm: resp.data })
          })
      }

  render() {

    let data = []
    let obj = {}

    const columns = [{
        Header: 'NO',
        accessor: 'no',
                filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value),
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["no"] }),
                    filterAll: true
      },
      {
        Header: 'Customer Name',
        accessor: 'name',
                filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value),
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["name"] }),
                    filterAll: true
      },
      {
        Header: 'Status',
        accessor: 'status',
                filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value),
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["status"] }),
                    filterAll: true
      },
      {
        Header: 'Category',
        accessor: 'category',
                filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value),
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["category"] }),
                    filterAll: true
      }
    ]

    return (  

    <div className="crm">
      <div>
          <h1 className="header_crm header">CRM</h1>
      </div>

    {this.state.crm.map((element, i) => {
            if (element !== undefined) {

              obj = {
                no:element.id,
                name:element.customerName,
                status:element.status.toUpperCase(),
                category:element.category
              }

              data.push(obj)
            // else {
                
            // }
            }})}
        <ReactTable
            data={data}
            columns={columns}
            filterable
            defaultFilterMethod={(filter, row) =>
            String(row[filter.customerName]) === filter.value}
            defaultPageSize = {10}
            pageSizeOptions = {[10, 20, 50]}
        />
</div>      
)

}
}


export default CRM;	