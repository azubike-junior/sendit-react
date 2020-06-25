import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logoutUser from '../actions/users/logOut';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, openProfileModal } from '../actions/parcels/ModalAction'
import { authenticateRoute } from '../helpers/authentication'
import CreateOrderModal from '../components/modals/CreateOrderModal';
import ProfileModal from '../components/modals/ProfileModal';

export class Navbar extends Component {
  render() {
    const { role, history, logoutUser} = this.props

    const signInLink = (
      <React.Fragment>
        {!role && <li onClick={this.props.openModal} className='nav-item' >
          <Link to='#'  className='nav-link' >
            create Order
				</Link>
        </li>}
        {!role ? <li className='nav-item'>
          <Link to='/dashboard' className='nav-link' href='#'>
            My Dashboard<span className='sr-only'>(current)</span>
          </Link>
        </li> : <li className='nav-item' >
            <Link to='/admin-Dashboard' className='nav-link' href='#'>
              My Dashboard<span className='sr-only'>(current)</span>
            </Link>
          </li>}
        {!role && <li onClick={this.props.openProfileModal} className='nav-item' >
          <Link to='#' className='nav-link' >
            My Profile
				</Link>
        </li>}
        <li className='nav-item'>
          <Link to="#"
            className='nav-link 
          logout-btn'
            onClick={() => logoutUser(history)}>
            Log Out <span className='sr-only' />
          </Link>
        </li>
      </React.Fragment>
    );
    const GuestLink = (
      <React.Fragment>
        <li className="nav-item">
          <Link to="/about" className="nav-link" href="#">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ourContact" className="nav-link" href="#">
            Contact us
          </Link>
        </li>
        <li className="nav-item signs">
          <Link to="/signin" className="nav-link" href="#">
            Sign in<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item signs">
          <Link to="/signup" className="nav-link logout-btn">
            Sign up <span className="sr-only" />
          </Link>
          </li>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg  bg-primary">
          <Link to="/" className="navbar-brand">
            <h3 className="navbar-brand text-title2 brand">
              {' '}
              send<span style={{ color: 'red' }}>IT</span>{' '}
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">{authenticateRoute() ? signInLink : GuestLink}</ul>
            </div>
          </nav>
        {<CreateOrderModal />}
        {<ProfileModal user={this.props.user} />}
      </React.Fragment>
    );

  }
}

const mapStateToProps = ({ parcels, users }) => ({
  signInStatus: users.signInStatus,
  signUpStatus: users.signUpStatus,
  role: users.role,
  isOpen: parcels.isOpen,
  isOpenProfile: parcels.isOpenProfile,
  user: users.user,
  imageUrl: users.imageUrl
});

export default connect(mapStateToProps, {logoutUser, openProfileModal, openModal})(withRouter(Navbar))

