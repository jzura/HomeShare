import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

import Icons from "../Icons/Icons"


import "./style.css"

class Dashboard extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12">
            <div className="jumbotron">
              <h4>
                Welcome back, <b className="name-lable">{user.name.split(" ")[0]}</b>
              </h4>
              <Icons/>
            </div>
   
            <button
              onClick={this.onLogout}
              className="btn btn-large btn-light hoverable font-weight-bold">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);