import React, { Component } from 'react';
import { emailVerifier } from '../actions/users/emailVerification'
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
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
                   <h4 className='text-center Notfound'>this email link has expired due to the time frame, please sign in</h4> }
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => ({
    isLoading: users.isLoading
});
export default connect(mapStateToProps, {emailVerifier})(withRouter(ConfirmPage)) ;