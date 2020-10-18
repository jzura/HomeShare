import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./style.css"

class Navbar extends Component{
    render(){
        return(
            <>
            <nav className="navbar bg-light justify-content-center">
                <Link className="navbar-brand text-dark font-weight-bold" to="/">HomeShare</Link>
            </nav>
            </>
        ) 
    }
}

export default Navbar;