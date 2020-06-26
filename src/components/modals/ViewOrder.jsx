import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDestination } from '../../actions/parcels/updateDestination';
import { closeViewModal } from '../../actions/parcels/ModalAction';
import ViewCancelModal from './ViewCancelModal';
import Modal from 'react-modal';

class viewOrderModal extends Component {
	state = {
		destination: '',
		isDisabled: false,
		errorFormat: '',
		openCancelModal: false
	};

	handleChange = (e) => {
		let { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = () => {
		if (this.state.isDisabled) {
			if (this.state.destination.trim() === this.props.parcel.destination) {
				return;
			}
			this.props.updateDestination(this.state.destination.trim(), this.props.parcel.parcelId, this.props)
		} else {
			this.setState({ isDisabled: true });
		}
	};

	closeCancelModal = () => {
		this.setState({ openCancelModal: false });
	};

	handleCancel = () => {
		this.setState({ openCancelModal: true });
	};

	componentDidMount() {
		this.setState({ destination: this.props.parcel.destination });
	}

	componentDidUpdate(nextProps) {
		if (nextProps.parcel !== this.props.parcel) {
			console.log(this.props.parcel)
			this.setState({ destination: this.props.parcel.destination });
		}
	}

	render() {
		const {parcel} = this.props
		return (
			<React.Fragment>
				<div className='modalContainer'>
					<Modal
						isOpen={this.props.isOpenView}
						onRequestClose={this.props.closeViewModal}
						className='Random'
						contentLabel='Example Modal'>
						<div className='viewOrder'>
							<div className='modal-top'>
								<span onClick={this.props.closeViewModal}>
									<i className='fa fa-times' />
								</span>
								<h2 className='parcel-title'>Your Parcel</h2>
							</div>
							<div>
								<table className='table table-striped mt-5'>
									<thead className='thClass'> 
										<tr>
											<th scope='col'>Parcel No.</th>
											<th scope='col'>Parcel Name</th>
											<th scope='col'>Parcel Destination</th>
											<th scope='col'>Parcel status</th>
										</tr>
									</thead>
									<tbody className='tbClass'>
										<tr>
											<th scope='row'>{parcel.parcelId}</th>
											<td>{parcel.parcelName}</td>
											<td>
												<form onSubmit={this.handleSubmit}>
										<input
											hidden={!this.state.isDisabled}
											onChange={this.handleChange}
											type='text'
											value={this.state.destination}
											name='destination'
											placeholder={this.props.parcel.destination}
										/>
									</form>
												{!this.state.isDisabled ? parcel.destination : ''}
											</td>
											<td>{parcel.parcelStatus}</td>
										</tr>
									</tbody>
								</table>
							</div>

							{this.state.openCancelModal ? (
								<ViewCancelModal
									closeCancelModal={this.closeCancelModal}
									  parcel={this.props.parcel}
								/>
							) : (
								''
							)}

							<div className='modal-footer'>
								<button
									type='submit'
									className={!this.state.isDisabled ? 'btn btn-primary btn1' : 'btn btn-success btn1'}
									onClick={this.handleSubmit}>
									{!this.state.isDisabled ? 'change order Destination' : 'submit'}
								</button>
								<button onClick={this.handleCancel} className='btn btn-danger btn2'>
									cancel order
								</button>
							</div>
						</div>
					</Modal>
					</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({ parcels }) => ({
	parcel: parcels.parcel,
	isOpenView: parcels.isOpenView,
	isLoading: parcels.isLoading
});

export default connect(mapStateToProps, { updateDestination, closeViewModal })(withRouter(viewOrderModal));
