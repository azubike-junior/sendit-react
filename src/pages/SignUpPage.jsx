import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { validateSignup, isValid } from '../validation/signupValidation';
import { connect } from 'react-redux';
import signUpUser from '../actions/users/signup';
import { Spinner4 } from '../components/Spinner';

class SignUpPage extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		isDisabled: false,
		errorFormat: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ errorFormat: validateSignup(e, this.state) });
		this.setState({ [name]: value });
		this.setState({ isDisabled: !isValid(this.state) });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { firstName, lastName, email, password} = this.state;
		if (!isValid(this.state)) {
			return this.setState({ isDisabled: true });
		}
		this.props.signUpUser({ firstName, lastName, email, password }, this.props.history);
		this.setState({ password: '', confirmPassword: '' });
	};

	render () {
		const { errorFormat, firstName, lastName, email, password, confirmPassword } = this.state;
		return (
				<div className='signupContainer'>
					<div className='row'>
					<div className="col-md-6">
						<div className='signupWrapper'>
							<div className='container w-75 '>
							<form onSubmit={this.handleSubmit}>
									{this.props.errorMsg && (<div className="alert alert-danger alert-dismissible fade show" role="alert">
										<span>{this.props.errorMsg}</span>
										<button type="button" className="close" data-dismiss="alert" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>)}
									<h2 className='signin-title text-capitalize text-center'>sign up</h2>
								<div className='form-group'>
									<label className='labelss'>First Name</label>
									<input
										type='text'
										value={firstName}
										name='firstName'
										onChange={this.handleChange}
										className='form-control'
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
									/>
									{errorFormat.firstName && <span className='error'>{errorFormat.firstName}</span>}
								</div>
								<div className='form-group'>
									<label className='labelss'>Last Name</label>
									<input
										type='text'
										value={lastName}
										name='lastName'
										onChange={this.handleChange}
										className='form-control'
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
									/>
									{errorFormat.lastName && <span className='error'>{errorFormat.lastName}</span>}
								</div>
								<div className='form-group'>
									<label className='labelss'>Email address</label>
									<input
										type='email'
										name='email'
										value={email}
										onChange={this.handleChange}
										className='form-control'
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
									/>
									{errorFormat.email && <span className='error'>{errorFormat.email}</span>}
								</div>
								<div className='form-group'>
									<label className='labelss'>Password</label>
									<input
										type='password'
										name='password'
										value={password}
										onChange={this.handleChange}
										className='form-control'
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
									/>
									{errorFormat.password && <span className='error'>{errorFormat.password}</span>}
								</div>
								<div className='form-group'>
									<label className='labelss'>confirm Password</label>
									<input
										type='password'
										name='confirmPassword'
										value={confirmPassword}
										onChange={this.handleChange}
										className='form-control'
										id='exampleInputPassword1'
									/>
										{errorFormat.confirmPassword && <span className='error'>{errorFormat.confirmPassword}</span>}
										{this.props.isLoading && <div className="text-center"><Spinner4 /></div>}
										{!this.props.isLoading && (
											<div className='text-center mt-3'>
												<button type='submit' className='btn btn-primary' hidden={this.state.isDisabled}>
													create Account
											</button>
										</div>
										
									)}
								</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="signin-info">
							<div className="container">
								<h2 className='signin-title text-center'>What’s Your Next Move in delivery?</h2>
								<p className='text-center p-2 text-muted'>Businesses who plan their delivery strategy around their customer journey realize significant benefits—like 98% open rates! Our guide helps you map out multichannel messaging strategies, and consider additional channels for optimal engagement, customer satisfaction, and technical ease. </p>
							</div>
							<div className='text-center'>
								<Link to='/about'> <button className='btn btn1 text-center '>get more info</button></Link>
							</div>
						</div>
					</div>
					</div>
				</div>
		);
	}
}

const mapStateToProps = ({ users }) => ({
	isLoading: users.isLoading,
	errorMsg: users.signupErrorMsg
});

export default connect(mapStateToProps, { signUpUser })(withRouter(SignUpPage));
