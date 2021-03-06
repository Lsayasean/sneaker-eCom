import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import './nav.css'


class Nav extends Component {
    render() {
        const path = this.props.location.pathname;

        if(path !== '/'){
            return (
                <div className='nav-container'>
                <div className='logo'>
                <i class="far fa-flushed"></i>
                </div>
                <div className='nav-links'>

                    <Link to='/gallery' className='link' ><button className='nav-btn'>Gallery</button></Link>
                    <Link to='/about' className='link' ><button className='nav-btn'>About</button></Link>
                    <Link to='/gallery' className='link' ><button className='nav-btn'>Stencils</button></Link>
                </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default withRouter(Nav);