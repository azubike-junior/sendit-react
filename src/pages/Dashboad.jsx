import React, { Component } from 'react';
import THead from '../components/THead';
import { getUserParcels } from '../actions/parcels/getParcels';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spinner2 } from '../components/Spinner';
import { closeModal, openModal, openViewModal } from '../actions/parcels/ModalAction';
import ViewOrderModal from '../components/modals/ViewOrder';
import Modal from 'react-modal/lib/components/Modal';
import { getUser } from '../actions/users/getUser';
Modal.setAppElement('#root');

class Dashboard extends Component {
  state = {
    isOpen: false,
    parcel: {},
    imageUrl: null,
  };
  componentDidMount = () => {
    this.props.getUserParcels()
      this.props.getUser();
  };
  
  showParcels = (that) => {
      if (that.props.isLoading) {
        return (
          <div className="container">
            <Spinner2 />
          </div>
        );
      }
      if (that.props.parcels.length === 0 && !that.props.isLoading) {
        return (
          <React.Fragment>
            <div className="text-center mt-5 no-created-order p-4">
              <h6 className="text-capitalize">you have not create an Order </h6>
              <button className="btn" onClick={that.props.openModal}>
                Create Order
              </button>
            </div>
          </React.Fragment>
        );
      }
      return (
        <React.Fragment>
          <table className="table table-hover mt-5 text-center">
            <THead />
            {that.props.parcels.map((parcel) => (
              <React.Fragment key={parcel.parcelId}>
                <tbody>
                  <tr key={parcel.parcelId}>
                    <th scope="row">{parcel.parcelId}</th>
                    <td>{parcel.parcelName}</td>
                    <td>{parcel.destination}</td>
                    <td>{parcel.pickupLocation}</td>
                    <td>{parcel.parcelWeight}</td>
                    <td>{parcel.parcelWeightScale}</td>
                    <td>{parcel.sentOn}</td>
                    <td>{parcel.parcelStatus}</td>
                    {parcel.parcelStatus === 'DELIVERED' || parcel.parcelStatus === 'CANCELLED' ? (
                      ''
                    ) : (
                      <td onClick={() => that.props.openViewModal(parcel)}>
                        <i className="fas fa-edit"></i>
                      </td>
                    )}
                  </tr>
                </tbody>
              </React.Fragment>
            ))}
          </table>
          <ViewOrderModal />
        </React.Fragment>
      );
    };
  render() {
    
    return (
      <React.Fragment>
        <div className="container classElement"> 
          <h2 className=" text-center text-capitalize mt-5 dashboard-title"> Your Dashboard</h2>
          {this.showParcels(this)}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ parcels, users }) => ({
  parcels: parcels.parcels,
  parcel: parcels.parcel,
  isLoading: parcels.isLoading,
  isOpen: parcels.isOpen,
  isOpenProfile: parcels.isOpenProfile,
  user: users.user,
});

export default connect(mapStateToProps, {
  getUserParcels,
  getUser,
  openViewModal,
  openModal,
  closeModal,
})(withRouter(Dashboard));
