import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
          <div className="home">
            <div className="Notfound text-center">
              <h3>Page Not Found</h3>
              <Link to='/'><button className='btn btnNotfound'>Go back home</button></Link>
            </div>
          </div>
        );
    }
}
