import React from "react";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const CustomLayout = (props) => {
  return (
    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <div class="blog-header-logo text-dark display-4">
              <Link to="/">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/leaf/256/blogger.png"
                  alt=""
                  width=" 70px"
                />
              </Link>
            </div>
          </div>
          <div class="col-4 text-center font-weight-bolder">
            <i class="fa fa-user fa-2x mr-2"></i>{" "}
            {props.isAuthenticated ? "Welcome  Alsaheem" : ""}
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            {props.isAuthenticated ? (
              <>
                <button class="btn  btn-danger " onClick={props.logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <div class="btn btn-sm btn-outline-secondary mr-3">
                  <Link to="/register">Register</Link>
                </div>
                <div class="btn btn-sm btn-outline-secondary">
                  <Link to="/login">Sign In</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {props.children}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
