import React from 'react';
import '../styles/Modal.css';
import axios from 'axios';

const subFunction = function(props, isActive = true) {
    console.log("In subFunction")
    console.log(props.customerData.id)
    props.close()
    let url =`http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/protected/leads/${props.customerData.id}/edit`
    const config = { 
        headers: {
            token: sessionStorage.getItem('token')
        }
    }

    let changes = {}
    
    if (isActive) {
        if (props.customerData.status === "lead") {
            changes = {"status":"lodgement"}
        } else if(props.customerData.status === "lodgement")
        {
            changes = {"status":"approval"}
        }else if(props.customerData.status === "approval")
        {
            changes = {"status":"settlement"}
        }else if(props.customerData.status === "lead")
        {
            changes = {"status":"settlement"}
        }
    }
    else {
        if (props.customerData.status === "lead") {
            changes = {"status":"lead lost"}
        } else if(props.customerData.status === "lodgement")
        {
            changes = {"status":"lodgement withdrawn"}
        }else if(props.customerData.status === "approval")
        {
            changes = {"status":"approval withdrawn"}
        }else {
            //Do nothing
        }
    }
    
    
    axios.patch(url,changes,config)
        .then(data => {
            console.log("In axios THEN")
            console.log(data)
        })
        .catch(err => {
            console.log("In axios CATCH")
            console.log(err)
        })

}

const Modal = (props) => {

    console.log("Modal loaded")
    console.log(props)
    if (props.customerData.status === "lead") {
    return (
        
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Update Status</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modaldata">
                <div className="modalcontent">
                                            <div>Name:</div>
                                            <div className="modalcontent">Status:</div>
                                        </div>
                                        <div className="modalcontent">
                                        <div>{props.customerData.customerName}</div>
                                        <div className="modalstatus">{props.customerData.status}</div>
                                    </div>
                                </div>


                <div className="modal-footer">
                    <button className="btn-cancel" onClick={() => subFunction(props)}>MOVE TO LODGEMENT</button>
                    <button className="btn-continue" onClick={() => subFunction(props, false)}>LEAD LOST</button>
                </div>
            </div>
        </div>
    )
    }
    else if ((props.customerData.status === "lodgement")) {

        return (
        
            <div>
                <div className="modal-wrapper"
                    style={{
                        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h3>Update Status</h3>
                        <span className="close-modal-btn" onClick={props.close}>×</span>
                    </div>
                    <div className="modaldata">
                                        <div className="modalcontent">
                                            <div>Name:</div>
                                            <div className="modalcontent">Status:</div>
                                        </div>
                                        <div className="modalcontent">
                                        <div>{props.customerData.customerName}</div>
                                        <div className="modalstatus">{props.customerData.status}</div>
                                    </div>
                                </div>
    
    
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={() => subFunction(props)}>MOVE TO APPROVALS</button>
                        <button className="btn-continue"  onClick={() => subFunction(props, false)}>Lodgement Withdrawn</button>
                    </div>
                </div>
            </div>
        )      
    }

    else if ((props.customerData.status === "approval")) {

        return (
        
            <div>
                <div className="modal-wrapper"
                    style={{
                        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h3>Update Status</h3>
                        <span className="close-modal-btn" onClick={props.close}>×</span>
                    </div>
                    <div className="modaldata">
                    <div className="modalcontent">
                                            <div>Name:</div>
                                            <div className="modalcontent">Status:</div>
                                        </div>
                                        <div className="modalcontent">
                                        <div>{props.customerData.customerName}</div>
                                        <div className="modalstatus">{props.customerData.status}</div>
                                    </div>
                                </div>
    
    
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={() => subFunction(props)}>MOVE TO SETTLEMENT</button>
                        <button className="btn-continue"  onClick={() => subFunction(props, false)}>Approval Withdrawn</button>
                    </div>
                </div>
            </div>
        )      
    }
}

export default Modal;