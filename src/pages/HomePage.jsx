import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div className='home'>
                <div className=' container banner text-center '>
                    <div className='circle'></div>
                    <h4 className='banner-title'>the cheapest parcel delivery in Nigeria</h4>

                    <div className="banner-box">
                    <p>
                        If you're looking for cheap parcel deliveries but don't want to compromise on quality or reliability, look no further than sendIT.
                    </p>
                    </div>
                    <div className="banner-box2">
                        <p>
                            Save money on parcel delivery
                    </p>
                        <button className='btntip '><Link to='/about'>click here for tips</Link> </button>
                    </div>
                </div>
            </div>
        )
    }
}
   