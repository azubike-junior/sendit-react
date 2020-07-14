import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link} from 'react-router-dom';
import { resetPasswordRequest } from '../actions/users/resetPassword';
import { Spinner4 } from '../components/Spinner';

class ForgetPassword extends Component {
    state = {
        email: '',
        isDisabled: false,
        errorMsg: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
        if (this.state.email === '') {
            this.setState({isDisabled: true})
        }
        this.setState({isDisabled: false})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;
        if (email === '') {
            return this.setState({ errorMsg: 'fill in your email address', isDisabled:true})
        }
        this.props.resetPasswordRequest({ email });
    }

    render() {
        const {email, errorMsg, isDisabled} = this.state
		return (
			<div className=''>
                <div className='reset-container'>
                    <div className="row">
                        <div className="col-md-7">
                            <div className='reset-wrapper'>
                                {this.props.resetError && (<div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    <span>{this.props.resetError}</span>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>)}
                                {errorMsg && (<div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    <span>{errorMsg}</span>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>)}
                                <h2 className='reset-title'>Reset Password</h2>
                                <p className='reset-subtitle text-center'>To reset your password, please provide your sendIT email address.</p>
                                <div className='container w-75'>
                                    {this.props.resetMsg ? (
                                        <div className="container">
                                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                                <span>{this.props.resetMsg}</span>
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        </div>
                                    ) :
                                        (<form onSubmit={this.handleSubmit}>
                                            <div className='form-group'>
                                                <label className='labelss'>Email address</label>
                                                <br />
                                                <input
                                                    type='email'
                                                    className='form-control'
                                                    id='exampleInputEmail1'
                                                    aria-describedby='emailHelp'
                                                    name='email'
                                                    value={email}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            {this.props.isLoading && <div className="text-center"><Spinner4 /></div>}
                                            <div className='text-center'>
                                                {!this.props.isLoading && (
                                                    <button className='btn' hidden={isDisabled}>send reset instructions</button>
                                                )}
                                            </div>
                                            
                                        </form>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5' >
                            <p className='text-capitalize text-center reset-info'>Don't have a sendIT account? <Link to='/signup'>Sign up now!</Link> </p>
                        </div>
                    </div>
                    
                </div>
            </div>
		);
	}
}

const mapStateToProps = ({ users }) => ({
    isLoading: users.isLoading,
    resetMsg: users.passwordMsg,
    resetError: users.errorMsg
})

export default connect(mapStateToProps, {resetPasswordRequest})(withRouter(ForgetPassword));
