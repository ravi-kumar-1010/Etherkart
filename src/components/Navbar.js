import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.Etherekart.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className='f1'>ETHERKART</h1>
        </a>
        {/* <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white"><span id="account">{this.props.account}</span></small>
          </li>
        </ul> */}
        <img class = 'accountImage' alt = {`${this.props.account}`} src = {`https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=${this.props.account}`}/>
      </nav>
    );
  }
}

export default Navbar;
