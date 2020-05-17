import React, { useEffect } from "react";
import "./App.css";
import CustomLayout from "./containers/Layouts";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
function App(props) {

  useEffect(props => {
    return () => {
      props.onTryAutoSignup();
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <CustomLayout {...props}>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    token: state.token

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
