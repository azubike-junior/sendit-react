import React, { Component } from 'react';
import { emailVerifier } from '../actions/users/emailVerification'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Spinner2 } from '../components/Spinner';

class ConfirmPage extends Component {

    componentDidMount = () => {
        const { token } = this.props.match.params
        this.props.emailVerifier(token, this.props.history)
    }

    render() {
        return (
            
            <div className='container'>
                {this.props.isLoading ? <Spinner2 /> :
                   <Link to='/dashboard'><Spinner2/></Link>}
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => ({
    isLoading: users.isLoading
});
export default connect(mapStateToProps, {emailVerifier})(withRouter(ConfirmPage)) ;