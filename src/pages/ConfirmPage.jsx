import React, { Component } from 'react';
import { emailVerifier } from '../actions/users/emailVerification'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spinner2 } from '../components/Spinner';

class ConfirmPage extends Component {

    componentDidMount = () => {
        const { id } = this.props.match.params;
        console.log(this.props)
        this.props.emailVerifier(id)
    }

    render() {
        return (
            
            <div className='container'>
                <span>{this.props.verifiedMsg}</span>
                { this.props.isLoading ? <Spinner2 /> : <button className='btn'> you can now signin </button>}
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => ({
    isLoading: users.isLoading,
    verifiedMsg: users.verifiedMsg
});
export default connect(mapStateToProps, { emailVerifier })(withRouter(ConfirmPage)) ;