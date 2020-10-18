import React,{Component} from "react";
import "./style.css"

class Icons extends Component{
    render(){
        return(
            <>
              <div className="container text-center icons">
                <figure>
                  <i className="fa fa-comment fa-5x"></i>
                  <figcaption>Message</figcaption>
                </figure>
                <figure>
                  <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                  <figcaption>Repairs</figcaption>
                </figure>
                <figure>
                  <i className="fa fa-money fa-5x" aria-hidden="true"></i>
                  <figcaption>Bills</figcaption>
                </figure>
              </div>
            </>
        ) 
    }
}

export default Icons;