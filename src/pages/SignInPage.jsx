import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import signInUser from '../actions/users/signin';
import { SignInSpinner } from '../components/Spinner';
import { signinValidator } from '../validation/signinValidation';
import { isValid } from '../validation/signupValidation';

class SignInPage extends Component {
	state = {
		email: '',
		password: '',
		isDisabled: false,
		errorFormat: {
			email: '',
			password: ''
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		this.setState({ errorFormat: signinValidator(e, this.state) });
		this.setState({ isDisabled: !isValid(this.state) });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		if (email === '') {
			return this.setState({ isDisabled: true });
		}
		this.props.signInUser({ email, password }, this.props.history);
	};

	render () {
		const {email, password } = this.state;
		return (
			<div className=''>
				<div className='signinWrapper'>
					<span>{this.props.verificationMsg}</span>
					<div className='container signWidth'>
						<form onSubmit={this.handleSubmit}>
							{this.props.errorMsg && <span className='error'>{this.props.errorMsg}</span>}
							<div className='form-group'>
								<label className='labels'>Email address</label>
								<input
									type='email'
									className='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
									value={email}
									name='email'
									onChange={this.handleChange}
								/>
							</div>
							<div className='form-group'>
								<label className='labels'>Password</label>
								<input
									type='password'
									className='form-control'
									id='exampleInputPassword1'
									name='password'
									value={password}
									onChange={this.handleChange}
									required={true}
								/>
								{!this.props.isLoading && (
									<button type='submit' className='btn btn-primary' hidden={this.state.isDisabled}>
										Log in
									</button>
								)}
								{this.props.isLoading && <SignInSpinner />}
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ users }) => ({
	isLoading: users.isLoading,
	errorMsg: users.errorMsg,
	verificationMsg: users.signUpMsg
});

export default connect(mapStateToProps, { signInUser })(withRouter(SignInPage));
