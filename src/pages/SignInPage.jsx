import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import signInUser from '../actions/users/signin';
import { SignInSpinner} from '../components/Spinner';
import { signinValidator } from '../validation/signinValidation';
import { isValid } from '../validation/signupValidation';

class SignInPage extends Component {
  state = {
    email: '',
    password: '',
    isDisabled: false,
    errorFormat: {
      email: '',
      password: '',
    },
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
    if (!isValid(this.state)) {
      return this.setState({ isDisabled: true })
    }
	  this.props.signInUser({ email, password }, this.props.history)
    this.setState({ password: '' });
  };

  render() {
    const { errorFormat, email, password } = this.state;
    return (
      <div className="home">
        <div className="signinWrapper">
          <div className="container signWidth">
            <form onSubmit={this.handleSubmit}>
              {this.props.errorMsg && (<span className="alert alert-danger alert-dismissible fade show">
                <strong>{this.props.errorMsg}</strong>
                <button type="button" className="close" data-dismiss="alert">&times;</button>
              </span>)}
              <div className="form-group">
                <label className="labels">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                />
                {errorFormat.email && <span className="text-danger">{errorFormat.email}</span>}
              </div>
              <div className="form-group">
                <label className="labels">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                {errorFormat.password && (
                  <span className="text-danger">{errorFormat.password}</span>
                )}
              </div>
              {!this.props.isLoading && (
                <button type="submit" className="btn btn-primary" hidden={this.state.isDisabled}>
                  Log in
                </button>
              )}
              {this.props.isLoading && <SignInSpinner/>}
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
});

export default connect(mapStateToProps, { signInUser })(withRouter(SignInPage));
