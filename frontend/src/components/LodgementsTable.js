import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';


class LodgementsTable extends Component {
  state = { lodgements: [] }
    
  componentDidMount() {
    console.log(new Date().getMonth())
      axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/lodgements')
          .then(resp => {
              console.log(resp.data)
              this.setState({ lodgements: resp.data })
          })
      }

  render() {
    const { lodgements } = this.state;
    
    return (
      <div>

        <div className="lodgements center">
          <h1 className="header_lodgements header">LODGEMENTS</h1>
          <div className="CMP_lodgements">
            <h3>CaptureMortgage+ Lodgements Board</h3><span> </span>
            <h3><FiscalYear /></h3>
          </div>
          <table id="myTable">
            <thead>
              <tr className="lodgements-back">
                <th>ID</th>
                <th>Moved to Lodgements</th>
                <th>Customer Name</th>
                <th>Category</th>
                <th>Amount</th>
                <th>WIP</th>
                <th>Employee</th>
              </tr>
            </thead>
            <tbody>
              {lodgements.map((lodgement, i) => {
                  return (
                    <tr key={i}>
                      <td>{lodgement.id}</td>
                      <td>{lodgement.statusDate}</td>
                      <td><a href={'/update/' + lodgement.id}>{lodgement.customerName}</a></td>
                      <td>{lodgement.category}</td>
                      <td>${Intl.NumberFormat().format(lodgement.amount)}</td>
                      <td></td>
                      <td>{lodgement.employee}</td>
                  </tr>
              )})}
            </tbody>

          </table>
        </div>
      </div>

    )
  }
}

export default LodgementsTable;


