import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import axios from 'axios';
import FormUpdate from './FormUpdate'


class LodgementsTable extends Component {

  state = { 
    lodgements: [],
    update: false,
    updatePerson: null
  }

  handleUpdateClick(lodgement) {
    this.setState({
        update: true,
        updatePerson: lodgement
    });
    // console.log(this.state)
  }

  fetchData = () => {
    const config = { headers: {
      token: sessionStorage.getItem('token')
    }}
    // console.log('fetching data')
    axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/lodgements', config)
    .then(resp => {
        console.log(resp.data)
        this.setState({ lodgements: resp.data })
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchData();
    this.setState({refresh: setInterval(this.fetchData, 15000)});
  }

  componentWillUnmount() {
      clearInterval(this.state.refresh)
  }

  displayDate(date) {
    if (date !== null) {
        return date.slice(0, 10)
    } else {
        return null
    }
  }

  render() {
    const { lodgements } = this.state;
    if (this.state.update === false) {
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
                    <tr key={i} onClick={() => this.handleUpdateClick(lodgement)}>
                      <td>{lodgement.id}</td>
                      <td>{this.displayDate(lodgement.statusDate)}</td>
                      <td><a className= 'customerMO' href={'#' + lodgement.id}>{lodgement.customerName}</a></td>
                      <td>{lodgement.category}</td>
                      <td>${Intl.NumberFormat().format(lodgement.amount)}</td>
                      <td>{lodgement.WIP}</td>
                      <td>{lodgement.employee}</td>
                  </tr>
              )})}
            </tbody>

          </table>
        </div>
      </div>

    )
  } else {
    return (
      <FormUpdate customerData={this.state.updatePerson}/>
    )
  }
}
}

export default LodgementsTable;


