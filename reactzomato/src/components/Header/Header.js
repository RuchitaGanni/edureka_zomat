import React, { Component, Fragment } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <Fragment>

                <nav className="navbar navbar-default ">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/* <a class="navbar-brand" href="#">WebSiteName</a> */}
                            <Link to="/" className="navbar-brand">
                                <div id="brand">
                                    <p id="logoTag">e!</p>
                                </div>

                            </Link>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav" id="navicons">
                                <li ><Link exact to="/" className="links">Home</Link></li>

                                {/* <li><Link exact to="/cart" className="links"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></li> */}
                                <li><Link exact to="/viewOrders" className="links">Orders</Link></li>
                                <li id="userinfo"><Link exact to="/" className="links"><i class="fa fa-user" aria-hidden="true"></i>  Hello..!! Ruchita</Link></li>
                            </ul>
                            {/* <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
            </Fragment >
        )
    }
}

export default Header