import React, { Component } from 'react';
import { createOrderValidation } from '../../validation/createOrderValidation';
import Modal from 'react-modal';
import { isValid } from '../../validation/signupValidation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createParcel } from '../../actions/parcels/createParcel';
import { ParcelSpinner } from '../Spinner';
import { closeModal, openViewModal } from '../../actions/parcels/ModalAction';

class CreateOrderModal extends Component {
	state = {
		parcelName: '',
		destination: '',
		pickupLocation: '',
		parcelWeight: '',
		parcelWeightScale: 'kg',
		errorFormat: {
			parcelName: '',
			destination: '',
			pickupLocation: '',
			parcelWeight: ''
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ errorFormat: createOrderValidation(e, this.state) });
		this.setState({ [name]: value });
		this.setState({ isDisabled: !isValid(this.state) });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { parcelName, destination, pickupLocation, parcelWeight, parcelWeightScale } = this.state;
		if (!isValid(this.state)) {
			return this.setState({ isDisabled: true });
		}
		this.props.createParcel({ parcelName, destination, pickupLocation, parcelWeight, parcelWeightScale }, this.props.history);
	};

	render () {
		const { parcelName, destination, pickupLocation, parcelWeight, errorFormat } = this.state;
		return (
			<div className='modalContainer'>
				<Modal isOpen={this.props.isOpen} onRequestClose={this.props.closeModal} className='Random' contentLabel='Example Modal'>
					<div className='modal-top'>
						<span onClick={this.props.closeModal}>
							<i className='fa fa-times' />
						</span>
						<h2 className='parcel-title'>create a new Parcel</h2>
					</div>

					<div className='container mt-4 createForm'>
						<form onSubmit={this.handleSubmit}>
							<div className=' mb-3'>
								{this.props.errorMsg && <span className='error'>{this.props.errorMsg}</span>}
								<div className=''>
									<input
										type='text'
										onChange={this.handleChange}
										name='parcelName'
										className='form-control'
										value={parcelName}
										placeholder='Parcel Name'
									/>
									{errorFormat.parcelName && <span className='error'>{errorFormat.parcelName}</span>}
								</div>
								<div className='mt-2'>
									<input
										type='text'
										name='destination'
										value={destination}
										onChange={this.handleChange}
										className='form-control'
										placeholder='From'
									/>
									{errorFormat.destination && <span className='error'>{errorFormat.destination}</span>}
								</div>
								<div className='mt-2'>
									<input
										type='text'
										name='pickupLocation'
										value={pickupLocation}
										onChange={this.handleChange}
										className='form-control'
										placeholder='To'
									/>
									{errorFormat.pickupLocation && <span className='error'>{errorFormat.pickupLocation}</span>}
								</div>
							</div>
							<div className='mt-2'>
								<input
									type='number'
									name='parcelWeight'
									value={parcelWeight}
									onChange={this.handleChange}
									className='form-control'
									placeholder='parcel Weight'
								/>
								{errorFormat.parcelWeight && <span className='error'>{errorFormat.parcelWeight}</span>}
							</div>
							<div className='form-group mt-2'>
								<label htmlFor='weightMetric' className='selectLabel'>
									Weight Metric
								</label>
								<select className='p-1' name='parcelWeightScale' onChange={this.handleChange} value={this.state.parcelWeightScale}>
									<option value='Kg'>Kg</option>
									<option value='g'>g</option>
								</select>
							</div>
							<div className=' btn4  text-center'>
								{!this.props.isLoadingCreate && (
									<button type='submit' className='btn bttn btn-success' hidden={this.props.isDisabled}>
										create your order
									</button>
								)}
								{this.props.isLoadingCreate && <ParcelSpinner />}
							</div>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = ({ parcels }) => ({
	isLoadingCreate: parcels.isLoadingCreate,
	errorMsg: parcels.parcelError,
	isOpen: parcels.isOpen,
	parcels: parcels.parcels,
	isDisabled: parcels.isDisabled
});

export default connect(mapStateToProps, { createParcel, closeModal, openViewModal })(withRouter(CreateOrderModal));
