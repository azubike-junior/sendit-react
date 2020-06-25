import React, { Component } from 'react'
import { cancelParcel } from '../../actions/parcels/cancelParcel';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ViewCancelModal extends Component {
    render() {
        const { closeCancelModal, parcel } = this.props
        console.log(parcel.parcelId)
        return (
            <div className='container'>
                <div className='cancelModalStyle'>
                    <h6 className='text-capitalize text-center cancel-title pt-3'>Are you sure you want to cancel this order?</h6>
                    <span className='btn-class'>
                        <button className='btn-success btn3'
                            onClick={() => this.props.cancelParcel(parcel.parcelId)}>Yes</button> | <button className='btn-primary btn3' onClick={() => { closeCancelModal() }}>No</button>
                    </span>
                </div>
            </div>
        )
    }
}



export default connect(null, {cancelParcel})(withRouter(ViewCancelModal))


