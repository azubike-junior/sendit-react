import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactPage extends Component {
	render () {
		return (
			<div className='container'>
				<h1 className='text-center m-4 contact-title'>Contact Us</h1>
				<div className='row contact-div'>
					<div className='col-md-4 col-lg-4 pb-4'>
						<h6 className='login-details'>Login to contact us quicker</h6>
						<Link to='/signin'>
							{' '}
							<button className='btn'> Login </button>
						</Link>
					</div>
					<div className='col-md-4 col-lg-4 pb-3'>
						<h6 className='login-details '>Our Addresses</h6>
						<strong>in Lagos</strong>
						<p>Third Floor, The Union, Albert Square, Manchester M2 6LW </p>
						<strong>in Abuja</strong>
						<p>Abuja, kamaria lgt, namuza bello street, No 5, kayara lagowa</p>
						<strong>in port harcourt</strong>
						<p>Nomurua lgt, ugala street, no 8A.</p>
					</div>
					<div className='col-md-4 col-lg-4'>
						<h6 className='login-details'>social media platforms</h6>
						<Link to='/sign'>
							{' '}
							<i  className='fab fa-facebook' />
						</Link>
						<Link to='/signin'>
							{' '}
							<i  className='fab fa-instagram' />
						</Link>
						<Link to='/signin'>
							{' '}
							<i  className='fab fa-twitter' />
						</Link>
						<Link to='/signin'>
							{' '}
							<i  className='fab fa-linkedin-in' />
                        </Link>

                        <div  className="phone pt-3">
                            <p> <i  className="fas fa-phone-square"></i>+234 90184467094</p>
                            <p> <i  className="fas fa-phone-square"></i>+234 9064487778
                            </p>
                        </div>
					</div>
				</div>

				<div className='contact-info text-center p-3'>
					<div className='info-title'>
						<h3 className='text-center m-4 contact-title'>let us know what you would love to talk to us about</h3>
						<div className='row'>
							<div className='col-md-3'>
                                <Link to='/about'><div className='icons'>
									<i  className='far fa-comment' />
								</div>
                                    <h6  className='icon-title'>General enquiry</h6>
                                </Link> 
							</div>
							<div  className='col-md-3'>
                                <Link to='/about'><div className='icons'>
									<i  className='fas fa-truck' />
								</div>
                                    <h6 className='icon-title'>deliverys</h6>
                                </Link>
							</div>
							<div className='col-md-3'>
                                <Link to='/about'><div className='icons'>
									<i  className='fas fa-people-carry' />
								</div>
                                    <h6 className='icon-title'>collections</h6>
                                </Link>
							</div>
							<div className='col-md-3'>
								<Link to='/about'><div className='icons'>
									<i  className='fas fa-receipt' />
								</div>
                                    <h6 className='icon-title'>billings</h6>
                                </Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactPage;
