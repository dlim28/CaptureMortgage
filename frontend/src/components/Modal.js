import React from 'react';
import '../styles/Modal.css';
import ModalLogic from './ModalLogic'

const Modal = (props) => {

    console.log("Modal loaded")
    console.log(props)
    if (props.customerData) {
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
                                            {props.customerData.customerName}
                                        <div> 
                                            {props.customerData.status}                                     
                                    </div>
                                </div>
                            </div>


                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>MOVE TO LODGEMENT</button>
                    <button className="btn-continue">LEAD LOST</button>
                </div>
            </div>
        </div>
    )
}
    else {
        return <div>loading</div>
    }
}

export default Modal;
