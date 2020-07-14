import React, { Component } from 'react';
import { resetPasswordValidation } from '../validation/resetPassword';
import { connect } from 'react-redux';
import { withRouter, Link} from 'react-router-dom';
import {passwordReset} from '../actions/users/resetPassword'
import { isValid } from '../validation/signupValidation';
import { Spinner4 } from '../components/Spinner';

class ResetPassword extends Component {
    state = {
        password:'',
        confirmPassword: '',
        isDisabled:false,
        errorFormat: {
            password: '',
            confirmPassword:''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
        this.setState({errorFormat : resetPasswordValidation(e, this.state)})
        this.setState({isDisaled: !isValid(this.state)})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {token} = this.props.match.params
        const { password} = this.state;
        if (!isValid(this.state)) {
            return this.setState({ isDisabled: true });
        }
        this.props.passwordReset(password, token)
    }

    render() {
        const {password, confirmPassword, errorFormat, isDisabled} = this.state


        return (
                <div className='reset-container'>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="reset-wrapper2">
                                {this.props.passwordError && (
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        <span>{this.props.passwordError}</span>
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                )}
                                <h2 className='reset-title'>Reset Password</h2>
                                <div className="form">
                                    {this.props.passwordMsg ? (
                                        <div className="container">
                                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                                <span>{this.props.passwordMsg}</span>
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <Link to='/signin'><button className='btn'>sign in</button></Link>

                                        </div>
                                    ) : (
                                            <div className='container w-75'> 
                                            <form onSubmit={this.handleSubmit}>
                                                <div className='form-group'>
                                                    <label className='labelss'>New password</label><br />
                                                    {errorFormat.password && (
                                                        <span className='error'>{errorFormat.password}</span>
                                                    )}
                                                        <input
                                                            type='password'
                                                            className='form-control'
                                                            id='exampleInputEmail1'
                                                            aria-describedby='emailHelp'
                                                            name='password'
                                                            value={password}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                <div className='form-group'>
                                                    <label className='labelss'>Confirm password</label><br />
                                                    {errorFormat.confirmPassword && (
                                                        <span className='error'>{errorFormat.confirmPassword}</span>
                                                    )}
                                                        <input
                                                            type='password'
                                                            className='form-control'
                                                            id='exampleInputEmail1'
                                                            aria-describedby='emailHelp'
                                                            value={confirmPassword}
                                                            name='confirmPassword'
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                {this.props.isLoading && <div className='text-center'><Spinner4 /></div> }
                                                {!this.props.isLoading && (
                                                    <div className="text-center">
                                                        <button className='btn' hidden={isDisabled}>Save</button>
                                                    </div>  
                                                )}
                                                </form>
                                            </div>
                                        )}
                                </div>
                            </div>
                    </div>
                    <div className='col-md-5' >
                        <p className='text-capitalize text-center reset-info'>Don't have a sendIT account? <Link to='/signup'>Sign up now!</Link> </p>
                    </div>
                    </div>
                  
                </div>
        );
    }
}

const mapStateToProps = ({ users }) => ({
    isLoading: users.isLoading,
    passwordMsg: users.resetMsg,
    passwordError: users.resetError
})

export default connect(mapStateToProps, { passwordReset })(withRouter(ResetPassword));