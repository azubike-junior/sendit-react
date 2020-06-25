import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { validateSignup, isValid } from '../validation/signupValidation';
import { connect } from 'react-redux';
import signUpUser from '../actions/users/signup';
import { SignUpSpinner } from '../components/Spinner';

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
		const { firstName, lastName, email, password, confirmPassword } = this.state;
		if (!isValid(this.state)) {
			return this.setState({ isDisabled: true });
		}
		this.props.signUpUser({ firstName, lastName, email, password }, this.props.history);
		this.setState({ password: '', confirmPassword: '' });
	};

	render () {
		const { errorFormat, firstName, lastName, email, password, confirmPassword } = this.state;
		return (
			<div className='home'>
				<div className='signupWrapper'>
					<div className='container signupWidth'>
						<form onSubmit={this.handleSubmit}>
							{this.props.errorMsg && (
								<span className='alert alert-danger alert-dismissible fade show'>
									<strong>{this.props.errorMsg}</strong>
									<button type='button' className='close' data-dismiss='alert'>
										&times;
									</button>
								</span>
							)}
							<div className='form-group'>
								<label className='labels'>First Name</label>
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
								<label className='labels'>Last Name</label>
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
								<label className='labels'>Email address</label>
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
								<label className='labels'>Password</label>
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
								<label className='labels'>confirm Password</label>
								<input
									type='password'
									name='confirmPassword'
									value={confirmPassword}
									onChange={this.handleChange}
									className='form-control'
									id='exampleInputPassword1'
								/>
								{errorFormat.confirmPassword && <span className='error'>{errorFormat.confirmPassword}</span>}
							</div>
							{!this.props.isLoading && (
								<button type='submit' className='btn btn-primary' hidden={this.state.isDisabled}>
									create Account
								</button>
							)}
							{this.props.isLoading && <SignUpSpinner />}
						</form>
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
