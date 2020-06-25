import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeProfileModal } from '../../actions/parcels/ModalAction'
import { Spinner, Spinner3 } from '../Spinner';
import { UploadUserImage } from '../../actions/users/uploadImage';
import avatar from '../../images/avatar-1.png'

Modal.setAppElement("#root")
class ProfileModal extends Component {
  state = {
    imageUrl: null,
    isDisabled: false
  };

    handleChange = (e) => {
        const filereader = new FileReader()
      const file = e.target.files[0]
      if (file === null) {
        this.setState({isDisabled: true});
      } else {
        this.setState({ isDisabled: false });
         filereader.onload = (e) => {
            this.setState({imageUrl: e.target.result})
        }
        filereader.readAsDataURL(file)
      }
  };

  uploadHandler = (e) => {
    if (!this.state.imageUrl) {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false});
      this.props.UploadUserImage(this.state.imageUrl);
    };
  }
    
    componentDidUpdate(nextProps) {
      if (nextProps.user !== this.props.user) {
        if (!this.props.user) {
          return this.setState({ imageUrl: avatar })
        } else {
          this.setState({ imageUrl: this.props.user.imageUrl })
            }
            
        }
    }

    showUser = (that) => {
      if (!that.props.user) {
        return <Spinner3 />;
        }
      return (
        <React.Fragment>
          <div className="container">
            <div className="row"> 
              <div className="col">
                <div className="upload-div">
                  <img src={!that.state.imageUrl ? avatar : that.state.imageUrl} alt="profile" />
                  <input onChange={that.handleChange} type="file" className="fileName" />
                </div>
              </div>
              <hr className="profileHr" />
              <div className="col">
                <div className="info-div">
                  <h5>Email</h5>
                  <p>{that.props.user.email}</p>
                  <h5>Name</h5>
                  <p>
                    {that.props.user.firstName} {that.props.user.lastName}
                  </p>
                </div>
              </div>
            </div>
            <div className=" btn4 text-center">
            {!that.props.isLoadingImg && (
              <button
                type="submit"
                className="btn"
                onClick={that.uploadHandler}
                hidden={that.state.isDisabled}
              >
                upload!
              </button>
            )}
              {that.props.isLoadingImg && <Spinner3/>}
              </div>
          </div>
        </React.Fragment>
      );
    };
  render() {
    
    return (
      <div>
        <Modal
          isOpen={this.props.isOpenProfile}
          onRequestClose={this.props.closeProfileModal}
          className="Random"
          contentLabel="Example Modal"
        >
          <div className="modal-top">
            <span onClick={this.props.closeProfileModal}>
              <i className="fa fa-times" />
            </span>
            <h2 className="parcel-title">Your Profile</h2>
          </div>

          {this.showUser(this)}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ parcels, users }) => ({
    isOpenProfile: parcels.isOpenProfile,
    isLoadingImg: users.isLoadingImg,
    isDisabled: parcels.isDisabled
})

export default connect(mapStateToProps, {closeProfileModal, UploadUserImage})(withRouter(ProfileModal))