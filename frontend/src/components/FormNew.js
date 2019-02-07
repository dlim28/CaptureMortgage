import React, { Component } from 'react';
import '../styles/Form.css';
import axios from 'axios';

const Status = "LEAD"
const Dates = Date()

class Form extends Component {
    state = {
        statusDate: new Date(),
        customerName: null,
        status: "lead",
        referrer: null,
        source: null,
        category: null,
        lender: null,
        history: null,
        dateOfLead: null,
        isActive: null,
        amount: null,
        employee: null
    }

    handleInputChange = (e) => {
        const { value, id } = e.currentTarget;
        this.setState({ [id]: value } )
    }

    submitForm = (e) => {
        e.preventDefault()
        console.log(this.state)

        const { statusDate, customerName, status, referrer, source, category, lender, history, dateOfLead, isActive, amount, employee } = this.state
        const url = "http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/leads/new-lead"

        const data = { statusDate, customerName, status, referrer, source, category, lender, history, dateOfLead, isActive, amount, employee }
        
        const config = { headers: {
            token: sessionStorage.getItem('token')
        }}

        axios.post(url, data, config)
        .then(resp => {
            console.log(resp)
            this.setState({ message: 'New lead added', error: null})
            this.props.history.push('/leads')
        })
        .catch(err => {
            console.log(err.response)
                if (err.response === 403) {
                this.setState({ error: 'Lead was not saved, please try again', message: null})
            }
        })
    }
    
    render() {
        const { error, message } = this.state

        return (
            <div className='form-grid'>

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

                                <select className='inputbox' name="Referrer" id="referrer" onChange={this.handleInputChange}>
                                    <option value="">--select--</option>
                                    <option value="LP Staff">LP Staff</option>
                                    <option value="SP Staff">SP Staff</option>
                                    <option value="Marketing Campaigns">Marketing Campaigns</option>
                                    <option value="BDM Staff">BDM Staff</option>
                                    <option value="TFC">TFC</option>
                                    <option value="Others">Others</option>
                                </select>

                                <select className='inputbox' name="Source" id="source" onChange={this.handleInputChange}>
                                    <option value="">--select--</option>
                                    <option value="Email">Email</option>
                                    <option value="Phone Call">Phone Call</option>
                                    <option value="App">App</option> 
                                </select>

                                <select className='inputbox' name="Category" id="category" onChange={this.handleInputChange}>
                                    <option value="">--select--</option>
                                    <option value="Re-finance">Re-finance</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Investment">Investment</option>
                                    <option value="Purchase">Purchase</option>
                                    <option value="Construction">Construction</option>
                                </select>

                                <input name="CustomerName" className='inputbox'  required="required" type="text" id="customerName" onChange={this.handleInputChange}></input>

                                <input name="Amount" className='inputbox' required="required" type="number" id="amount" onChange={this.handleInputChange}></input>

                                <input name="DateOfLead" className='inputbox' type="date" id="dateOfLead" onChange={this.handleInputChange}></input>

                                <select className='inputbox' name="Lender" id="lender" onChange={this.handleInputChange}>
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

                                <select className='inputbox' name="Employee" id="employee" onChange={this.handleInputChange}>
                                    <option value="">--select--</option>
                                    <option value="Katherine">Katherine</option>
                                    <option value="Johann">Johann</option>
                                    <option value="Johnny">Johnny</option>
                                    <option value="David">David</option>
                                </select>

                            </div>

                        </div>

                        <div className='buttonflex'>
                            <button className='cancelbutton'>
                                CANCEL
                            </button>
                            <button onClick={this.submitForm} className='savebutton'>
                                SAVE
                            </button>

                            { message && <p>{ message }</p> }
                            { error && <p>{ error }</p> }

                        </div>
                </div>
            </div>
        
        );
    }
    }

export default Form;
