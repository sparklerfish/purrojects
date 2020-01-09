import React from 'react';
import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import Signup from "./signup";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup"
  };
};

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(signup(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);