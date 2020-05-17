import React, { useState } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions/auth";

const RegistrationForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAuth(username, email, password, confirm);
    props.history.push("/");
  };

  return (
    <form
      className="form-signin justify-content-center offset-md-3 col-md-6 text-center"
      onSubmit={handleSubmit}
    >
      <img
        className="mb-4"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSr8uWo1xuhzhZR9YrFMFrkL3-zlcznly1wqcYwWDlv3a2WVX6&usqp=CAU"
        alt="form-signin"
        width={72}
        height={72}
      />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">
        Username
      </label>
      <input
        type="text"
        id="inputEmail"
        className="form-control mb-3"
        placeholder="Username"
        required
        autofocus
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="inputEmail" className="sr-only">
        Email
      </label>
      <input
        type="text"
        id="Email"
        className="form-control mb-3"
        placeholder="Email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autofocus
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
      <label htmlFor="inputPassword" className="sr-only">
        Confirm Password
      </label>
      <input
        type="confirm Password"
        id="inputPassword"
        className="form-control mb-3"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      <button className="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Register
      </button>
      <Link to="/login">
      <button
        className="btn btn-lg btn-outline-primary btn-block mb-3"
        type="submit"
      >
          login
      </button>
      </Link>
    </form>
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
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
