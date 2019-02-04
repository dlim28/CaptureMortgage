import React, { Component } from 'react';
import '../styles/Form.css';
import axios from 'axios';

const Status = "LEAD"
const Dates = Date(2018).replace("GMT+1100 (Australian Eastern Daylight Time)", "")




class Form extends Component {

    // state = { isSubmitted: false }

    // handleInputChange = (e) => {
    //     const { value, id } = e.currentTarget;
    //     this.setState({ [id]: value })
    // }

    // submitForm = (e) => {
    //     e.preventDefault()

    //     const { createdAt, customerName, status, referrer, source, category, lender, hisotry, dateOfLead, isActive, amount, employee } = this.state

    //     const url = 'http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/leads/new-lead'

    //     const data = { createdAt, customerName, status, referrer, source, category, lender, hisotry, dateOfLead, isActive, amount, employee } 

    //     axios.post(url, data)
    //         .then(resp => {
    //             this.setState({ message: 'Successful login', error: null, isSubmited: true})
    //         })
    //         .catch(err => {
    //             console.log(err.response)
    //             if (err.response === 400) {
    //                 this.setState({ error: 'Incorrect login', message: null })
    //             }
    //         })

    

    render() {
        // const { error, message } = this.state

        return (
            <div class='form-grid'>

                <div className='form' >
                    <div className='customerdetailsheading'>CUSTOMER DETAILS</div>
                        <div className='flex-form'>
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

                                <select className='inputbox' name="Referrer" id="Username">
                                    <option value="">--select--</option>
                                    <option value="LP Staff">LP Staff</option>
                                    <option value="SP Staff">SP Staff</option>
                                    <option value="Marketing Campaigns">Marketing Campaigns</option>
                                    <option value="BDM Staff">BDM Staff</option>
                                    <option value="TFC">TFC</option>
                                    <option value="Others">Others</option>
                                </select>

                                <select className='inputbox' name="Source" id="username">
                                    <option value="">--select--</option>
                                    <option value="Email">Email</option>
                                    <option value="Phone Call">Phone Call</option>
                                    <option value="App">App</option> 
                                </select>

                                <select className='inputbox' name="Category" id="username">
                                    <option value="">--select--</option>
                                    <option value="Re-finance">Re-finance</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Investment">Investment</option>
                                    <option value="Purchase">Purchase</option>
                                    <option value="Construction">Construction</option>
                                </select>

                                <input name="CustomerName" className='inputbox'  type="text" id="username"></input>

                                <input name="Amount" className='inputbox' type="number" id="username" min="1"></input>

                                <input name="DateOfLead" className='inputbox' type="date" id="username"></input>

                                <select className='inputbox' name="Lender" id="username">
                                    <option value="">--select--</option>
                                    <option value="ANZ">ANZ</option>
                                    <option value="Bank First">Bank First</option>
                                    <option value="Bank of Melbourne">Bank of Melbourne</option>
                                    <option value="Bankwest">Bankwest</option>
                                    <option value="Beyond Bank">Beyond Bank</option>
                                    <option value="ChoiceLend">ChoiceLend</option>
                                    <option value="CBA">CBA</option>
                                    <option value="Heritage Bank">Heritage Bank</option>
                                    <option value="ING Bank">ING Bank</option>
                                    <option value="Liberty Financial">Liberty Financial</option>
                                    <option value="Macquarie Bank">Macquarie Bank</option>
                                    <option value="ME Bank">ME Bank</option>
                                    <option value="NAB">NAB</option>
                                    <option value="Pepper">Pepper</option>
                                    <option value="Suncor">Suncorp</option>
                                    <option value="St George Bank">St George Bank</option>
                                    <option value="Virgin Mone">Virgin Money</option>
                                    <option value="Westpac">Westpac</option>
                                </select>

                                <select className='inputbox' name="Employee" id="username">
                                    <option value="">--select--</option>
                                    <option value="Katherin">Katherine</option>
                                    <option value="Johann">Johann</option>
                                    <option value="Johnny">Johnny</option>
                                    <option value="David">David</option>
                                </select>

                            </div>

                        </div>

                        <div className='buttonflex'>
                            <button onClick={this.submitForm} className='savebutton'>
                                    SAVE
                            </button>

                            <button className='cancelbutton'>
                                    CANCEL
                            </button>
                        </div>
                </div>
            </div>
        
        );
    }
    }

export default Form;