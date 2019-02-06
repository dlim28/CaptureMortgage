import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';
import FormUpdate from './FormUpdate'


class LodgementsTable extends Component {
  state = { 
    lodgements: [],
    updateShow: false,
    updatePerson: null
  }

  handleUpdateClick(lodgement) {
    console.log("in handleUpdateClick")
    this.setState({
        updateShow: true,
        updatePerson: lodgement
    });
    console.log(this.state)
  }
    
  componentDidMount() {
      axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/lodgements')
          .then(resp => {
              console.log(resp.data)
              this.setState({ lodgements: resp.data })
          })
    }

  render() {
    const { lodgements } = this.state;
    console.log(this.state.updateShow)

    if (!this.state.updateShow) {
      console.log("Not show edit path")
      return (
        <div>
          <div class="lodgements center">
            <h1 class="header_lodgements header">LODGEMENTS</h1>
            <div class="CMP_lodgements">
              <h3>CaptureMortgage+ Lodgements Board</h3><span> </span>
              <h3><FiscalYear /></h3>
            </div>
            <table id="myTable">
              <thead>
                <tr class="lodgements-back">
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
                {
                  lodgements.map((lodgement, i) => {
                    return (
                      <tr key={i} onClick={() => this.handleUpdateClick(lodgement)}>
                        <td>{lodgement.id}</td>
                        <td>{lodgement.statusDate}</td>
                        <td><a href="#">{lodgement.customerName}</a></td>
                        <td>{lodgement.category}</td>
                        <td>${Intl.NumberFormat().format(lodgement.amount)}</td>
                        <td></td>
                        <td>{lodgement.employee}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      )
    }
    else {
      console.log("SHOW update path")
      return (
        <div>
          <h1>THIS IS DISPLAYING</h1>
          <FormUpdate customerData={this.state.updatePerson}/>
        </div>
      )
    }
  }
}

export default LodgementsTable;


