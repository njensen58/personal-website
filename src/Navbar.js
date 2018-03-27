import React from 'react';
import { Link } from 'react-router-dom';
import Fabars from 'react-icons/lib/fa/bars'
import Faminus from 'react-icons/lib/fa/minus';

function Navbar(props){
    const navStyle = {
        display: props.info.nav ? 'inline-block' : 'none',
        textDecoration: 'none',
        textTransform: 'uppercase'
    }
    return (
        <div className="navDiv">

            <div className="navLinks">
                <div
                 className="sandwhichMenu"
                 onClick={props.handleNavExpand}>
                 { props.info.nav ?
                     <i><Faminus /></i>
                 :
                    <i><Fabars /></i>
                 }
                </div>
                <div onClick={props.handleNavExpand}>
                    <Link
                        to="/"
                        style={navStyle}

                        >/Home
                    </Link>
                </div>
                <div onClick={props.handleNavExpand}>
                    <Link
                        to="/myprojects"
                        style={navStyle}

                        >/Projects
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
