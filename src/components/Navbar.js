import React from 'react';
import { Link } from 'react-router-dom';

import Popup from "reactjs-popup";



const Navbar = () => {
    return (
        <nav className="nav-wrapper" style={{ overflow: "hidden" }}>
            <div className="container-fluid">
                <Link to="/" className="brand-logo"><img src="images/MandeeLogo.jpg " alt="" style={{ fontSize: "60px", height: "80px", width: "80px" }}></img></Link>
                <ul className="right">
                    <Popup modal trigger={<button>
                        <li><i className="material-icons" style={{ fontSize: "50px", width: "40px" }}>shopping_cart</i></li>
                    </button>}>
                        <p style={{ color: "black" }}>Mandee is undergoing revam will be back soon!!!!</p>
                    </Popup>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;