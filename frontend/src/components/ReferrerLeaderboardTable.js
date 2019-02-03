import React, { Component } from 'react';
import "react-table/react-table.css";
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
import ReactTable from "react-table";

class ReferrerLeaderboard extends Component {
  render() {

    const data = [{
      month: 'March',
      lpStaff: 1,
      sppStaff: 4,
      marketing: 12,
      bdm: 2,
      tfc: 31,
      others: 4,
      totals: 10,
      percent: '12%'
    },
    {
      month: 'March',
      lpStaff: 1,
      sppStaff: 4,
      marketing: 12,
      bdm: 2,
      tfc: 31,
      others: 4,
      totals: 10,
      percent: '12%'
    },
    {
      month: 'March',
      lpStaff: 1,
      sppStaff: 4,
      marketing: 12,
      bdm: 2,
      tfc: 31,
      others: 4,
      totals: 10,
      percent: '12%'
    },
    {
      month: 'March',
      lpStaff: 1,
      sppStaff: 4,
      marketing: 12,
      bdm: 2,
      tfc: 31,
      others: 4,
      totals: 10,
      percent: '12%'
    },
    {
      month: 'March',
      lpStaff: 1,
      sppStaff: 4,
      marketing: 12,
      bdm: 2,
      tfc: 31,
      others: 4,
      totals: 10,
      percent: '12%'
    },
    {
      month: 'March',
      lpStaff: 1,
      sppStaff: 4,
      marketing: 12,
      bdm: 2,
      tfc: 31,
      others: 4,
      totals: 10,
      percent: '12%'
    },
    {
    month: 'March',
    lpStaff: 1,
    sppStaff: 4,
    marketing: 12,
    bdm: 2,
    tfc: 31,
    others: 4,
    totals: 10,
    percent: '12%'
  },
  {
    month: 'March',
    lpStaff: 1,
    sppStaff: 4,
    marketing: 12,
    bdm: 2,
    tfc: 31,
    others: 4,
    totals: 10,
    percent: '12%'
  },
  {
    month: 'March',
    lpStaff: 1,
    sppStaff: 4,
    marketing: 12,
    bdm: 2,
    tfc: 31,
    others: 4,
    totals: 10,
    percent: '12%'
  },
  {
    month: 'March',
    lpStaff: 1,
    sppStaff: 4,
    marketing: 12,
    bdm: 2,
    tfc: 31,
    others: 4,
    totals: 10,
    percent: '12%'
  },
  {
    month: 'March',
    lpStaff: 1,
    sppStaff: 4,
    marketing: 12,
    bdm: 2,
    tfc: 31,
    others: 4,
    totals: 10,
    percent: '12%'
  }
 ]

    const columns = [{
      Header: 'Month',
      accessor: 'month'
    },
    {
      Header: 'LP Staff',
      accessor: 'lpStaff'
    },
    {
      Header: 'SPP Staff',
      accessor: 'sppStaff'
    },
    {
      Header: 'Marketing Campaigns',
      accessor: 'marketing'
    },
    {
      Header: 'BDM Staff',
      accessor: 'bdm'
    },
    {
      Header: 'TFC',
      accessor: 'tfc'
    },
    {
      Header: 'Others',
      accessor: 'others'
    },
    {
      Header: 'Totals',
      accessor: 'totals'
    },
    {
      Header: '%',
      accessor: 'percent'
    }
  ]

    return (

          


          <div>

<div class="leads header">
    <h3>CaptureMortgage+ Referrer Leaderboard</h3><span> </span>
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

export default ReferrerLeaderboard;


