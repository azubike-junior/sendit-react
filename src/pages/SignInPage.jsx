import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import signInUser from '../actions/users/signin';
import { Spinner4 } from '../components/Spinner';
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
		const { email, password } = this.state;
		return (
			<div className='signinContainer'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='signinWrapper'>
							{this.props.verificationMsg && (
								<div className='alert alert-success alert-dismissible fade show' role='alert'>
									<span>{this.props.verificationMsg}</span>
									<button type='button' className='close' data-dismiss='alert' aria-label='Close'>
										<span aria-hidden='true'>&times;</span>
									</button>
								</div>
							)}
							<div className='container w-75 '>
								<form onSubmit={this.handleSubmit}>
									{this.props.errorMsg && (
										<div className='alert alert-danger alert-dismissible fade show' role='alert'>
											<span>{this.props.errorMsg}</span>
											<button type='button' className='close' data-dismiss='alert' aria-label='Close'>
												<span aria-hidden='true'>&times;</span>
											</button>
										</div>
									)}
									<h2 className='signin-title text-capitalize text-center'>sign in</h2>
									<div className='form-group'>
										<label className='labelss'>Email address</label>
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
										<label className='labelss'>Password</label>
										<input
											type='password'
											className='form-control'
											id='exampleInputPassword1'
											name='password'
											value={password}
											onChange={this.handleChange}
											required={true}
										/>
										<p className='text-right forget'>
											<Link to='/forget_Password'>forget your password?</Link>{' '}
										</p>
										<div className=' text-center'>
											{this.props.isLoading && (
												<div className='text-center'>
													<Spinner4 />
												</div>
											)}
											{!this.props.isLoading && (
												<button type='submit' className='btn btn-primary' hidden={this.state.isDisabled}>
													Log in
												</button>
											)}
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='signin-info'>
							<div className='container'>
								<h2 className='signin-title text-center'>What’s Your Next Move in delivery?</h2>
								<p className='text-center p-2 text-muted'>
									Businesses who plan their delivery strategy around their customer journey realize significant benefits—like 98% open rates!
									Our guide helps you map out multichannel messaging strategies, and consider additional channels for optimal engagement,
									customer satisfaction, and technical ease.{' '}
								</p>
							</div>
							<div className='text-center'>
								<Link to='/about'>
									{' '}
									<button className='btn btn1 text-center '>get more info</button>
								</Link>
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
	errorMsg: users.errorMsg,
	verificationMsg: users.signUpMsg
});

export default connect(mapStateToProps, { signInUser })(withRouter(SignInPage));
