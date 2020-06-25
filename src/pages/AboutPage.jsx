import React, { Component } from 'react';
import parcel2 from '../images/parcel 2.jpg';
import parcel4 from '../images/parcel 4.jpg';
import parcel8 from '../images/parcel8.jpg';
import parcel9 from '../images/parcel9.jpg';
import parcel10 from '../images/parcel10.jpg';
import parcel11 from '../images/parcel11.jpg';

export default class About extends Component {
	render () {
		return (
			<div>
				<d className='container'>
					<div className='container'>
						<h1 className='text-center py-4 about-heading'>Welcome to sendIT</h1>
						<div className='container'>
							<div className='row'>
								<div className='col-md-6'>
									<img src={parcel4} alt='about us' />
								</div>
								<div className='col-md-6 subtitle'>
									<h3 className='text-capitalize about-color'>About sendIT services</h3>
									<hr />
									<p className='para text-capitalize'>
										{' '}
										sendIT is an independent parcel delivery network with the aim of circulating, mobilizing and delivery parcels and goods
										all over the world
									</p>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className='container'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-6 text-center subtitle'>
									<h3 className='text-capitalize about-color'>what we do</h3>
									<hr />
									<p className='para text-capitalize'>
										{' '}
										sendIT is an independent parcel delivery network with the aim of circulating, mobilizing and delivery parcels and goods
										all over the world
									</p>
								</div>
								<div className='col-md-6 img-style text-center'>
									<img src={parcel2} alt='about us' />
								</div>
							</div>
						</div>
					</div>
					<hr />
				</d>

				<div className='second-section'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-4'>
								<h3 className='text-capitalize about-color text-center py-2'>Our History</h3>
								<hr />
								<p className='para text-capitalize'>
									{' '}
									We've earned a strong reputation among our customers for efficient UK parcel delivery; we've also built great relationships
									with the most reputable global parcel couriers and parcel delivery companies out there, all to ensure that our customers
									have the most choice when sending a parcel.
								</p>
							</div>
							<div className='col-md-4'>
								<h3 className='text-capitalize about-color text-center pt-2'>Our Vision</h3>
								<hr />
								<p className='para text-capitalize'>
									{' '}
									Not only do we offer cheap parcel delivery UK-wide, we’re also experts in international delivery. We offer extremely competitive rates on parcel deliveries to Australia, the USA, Europe, China… and everywhere in between!
								</p>
							</div>
							<div className='col-md-4'>
								<h3 className='text-capitalize about-color text-center py-2'>Our Mission</h3>
								<hr />
								<p className='para text-capitalize'>
									{' '}
									Need your parcel to arrive in a hurry? check out our expedited delivery options. We offer deliveries on specific days of the
									week, we’ve got a whole range of couriers specialising in next day delivery and your parcel can even be delivered on the day
									you book with our brilliantly handy same day service.
								</p>
							</div>
						</div>
					</div>
					<section className='connection'>
						<div className='wrapper'>
							<div className='connect'>
								<h4>
									GET YOUR PARCELS FROM <span className='bold'>A </span>TO <span className='bold'>B, IN NO TIME.</span>
								</h4>
								<h6>Enjoy Same and Next Day Delivery Across All Our Delivery Areas - Start Shipping with SendIT Today!</h6>
							</div>
							<div className='parcel-images'>
								<div className='img-center'>
									<div className='img-display'>
										<img src={parcel9} alt='parcel' className='img-single' />
									</div>
									<div className='img-display'>
										<img src={parcel10} alt='parcel' className='img-single' />
									</div>
									<div className='img-display'>
										<img src={parcel11} alt='parcel' className='img-single' />
									</div>
									<div className='img-display'>
										<img src={parcel8} alt='parcel' className='img-single' />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
