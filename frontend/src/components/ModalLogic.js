import React, {Component} from 'react';
import axios from 'axios'
import '../styles/Modal.css';
// import Modal from './Modal';

class ModalLogic extends Component{
    state = { customerStatus: null };

    componentDidMount = () => {
        const customerData = "http://cmp-backend.ap-southeast-2.elasticbeanstalk.com/leads/select/1"
        axios.get(customerData)
        .then(resp => {
            console.log(resp)
            this.setState({ customerStatus: resp.data })
        })
    }
    render() {
        console.log("ModalLogic Render")
        console.log(this.props)
        return <div>
        {this.props.status} 
        </div>
        
    }
}

export default ModalLogic;
