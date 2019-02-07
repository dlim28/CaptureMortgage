import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import axios from 'axios';

class HistoryTable extends Component {

  state = { 
    mortgages: [],
    update: false,
    updatePerson: null
  }

  handleUpdateClick(mortgage) {
    this.setState({
        update: true,
        updatePerson: mortgage
    });
  }

  
  fetchData = () => {
    const config = { headers: {
      token: sessionStorage.getItem('token')
    }}
    // console.log('fetching data')
    axios.get('http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/crm', config)
      .then(resp => {
          console.log(resp)
          console.log(resp.data)
          this.setState({ mortgages: resp.data })
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
    const { mortgages } = this.state;

    return (
      <div>
        <div className="center">
          <h1 className="header history">History Table</h1>
          <table id="myTable">
            <thead>
              <tr className="history-back">
                <th>Status Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              
              {mortgages.map((mortgage, i) => {



                return(
                  <tr key={i} onClick={() => this.handleUpdateClick(mortgage)}>
                    <td class="uppercase">{mortgage.status}</td>
                    <td>{this.displayDate(mortgage.statusDate)}</td>
                  </tr>
                )
              })}
            </tbody>

          </table>

        </div>
      </div>
    );
  }
}

export default HistoryTable;


// Object.keys(data).map((key) => {
//   return (
//           Object.keys(data[key]).map((key2, j) => {
//           console.log(key, data[key][key2])
//           return(
