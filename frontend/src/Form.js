import React, { Component } from 'react';
import './App.css';
const Status = "LEAD"
const Dates = Date(2018).replace("GMT+1100 (Australian Eastern Daylight Time)", "")


class Form extends Component {
  render() {
    return (
    
<div className='form' >


<div className='customerdetailsheading'>CUSTOMER DETAILS
    </div>
    <div className='flex-form'>
    <div className='emptyboxone'></div>
    <p></p>

<div className='flexformtitles'>
    <div>Status:</div>
    <div>Status Date:</div>
    <div>Referrer*:</div>
    <div>Source*:</div>
    <div>Category*:</div>
    <div>Customer Name*:</div>
    <div>Amount:</div>
    <div>Date Of Lead:</div>
    <div>Lender:</div>
    <div>Employee*:</div>
</div>

<div className='flexformcontent'>

    <div className = 'statusblue'>
        {Status} 
    </div>

    <div className = 'statusblue'>
        {Dates}
    </div>

<select className='inputbox' name="Refferer" id="Username">
    <option value="">--select--</option>
    <option value="1">LP Staff</option>
    <option value="2">SP Staff</option>
    <option value="3">Marketing Campaigns</option>
    <option value="3">BDM Staff</option>
    <option value="3">TFC</option>
    <option value="3">Others</option>
</select>

<select className='inputbox' name="Source" id="username">
    <option value="">--select--</option>
    <option value="1">Email</option>
    <option value="2">Phone Call</option>
    <option value="3">App</option> 
</select>

<select className='inputbox' name="Category" id="username">
    <option value="">--select--</option>
    <option value="1">Re-finance</option>
    <option value="2">Commercial</option>
    <option value="3">Investment</option>
    <option value="3">Purchase</option>
    <option value="3">Construction</option>
</select>

<input name="CustomerName" className='inputbox'  type="text" id="username"></input>

<input name="Amount" className='inputbox' type="number" id="username" min="1"></input>

<input name="DateOfLead" className='inputbox' type="date" id="username"></input>

<select className='inputbox' name="Lender" id="username">
    <option value="">--select--</option>
    <option value="1">ANZ</option>
    <option value="2">Bank First</option>
    <option value="3">Bank of Melbourne</option>
    <option value="4">Bankwest</option>
    <option value="5">Beyond Bank</option>
    <option value="6">ChoiceLend</option>
    <option value="7">CBA</option>
    <option value="8">Heritage Bank</option>
    <option value="10">ING Bank</option>
    <option value="11">Liberty Financial</option>
    <option value="12">Macquarie Bank</option>
    <option value="13">ME Bank</option>
    <option value="14">NAB</option>
    <option value="15">Pepper</option>
    <option value="16">Suncorp</option>
    <option value="17">St George Bank</option>
    <option value="18">Virgin Money</option>
    <option value="19">Westpac</option>
</select>

<select className='inputbox' name="Lender" id="username">
    <option value="">--select--</option>
    <option value="1">Katherine</option>
    <option value="2">Johann</option>
    <option value="3">Kevin</option>
    <option value="4">David</option>
</select>


</div>
    </div>
<div className='buttonflex'>
    <div className='emptybox'>
</div>
    <div className='alignbuttons'> 
<button className='cancelbutton'>
        CANCEL
</button>

<button className='savebutton'>
        SAVE
</button>
        </div>
    </div>
</div>
    );
  }
}

export default Form;
