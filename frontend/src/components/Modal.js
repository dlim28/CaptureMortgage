import React from 'react';
import '/Modal.css';
import ModalLogic from '/ModalLogic'

const Modal = (props) => {

    console.log("Modal loaded")
    console.log(props.status)
    
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
                                    <ModalLogic status={props.customerName}/>
                                        <div className="modalcontent"> 
                                        <ModalLogic status={props.status}/>                                      
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

export default Modal;
