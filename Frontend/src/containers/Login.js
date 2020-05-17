import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/auth";
// class NormalLoginForm extends React.Component {

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let x = props.onAuth(username, password);
    if (x !== undefined) {
      props.history.replace("/");
    }
  };

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }
  return (
    <div className="justify-content-center offset-md-3 mt-4 col-md-6 text-center">
      {props.error && (
        <div class="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form className="form-signin mt-4" onSubmit={handleSubmit}>
        <img
          className="mb-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSr8uWo1xuhzhZR9YrFMFrkL3-zlcznly1wqcYwWDlv3a2WVX6&usqp=CAU"
          alt="form-signin"
          width={72}
          height={72}
        />
        <h1 className="h3 mb-3 font-weight-normal">Login...</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="inputEmail"
          className="form-control mb-3"
          placeholder="Email address"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-lg btn-primary btn-block mb-3" type="submit">
          login
        </button>
        <Link to="/register">
          <button
            className="btn btn-lg btn-outline-primary btn-block"
            type="button"
          >
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
