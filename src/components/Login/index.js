import React from "react";
import { Box, Button, withStyles } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
const emailRegex = RegExp(
  /^[a-zA-Z0-9_!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const styles = {
  root: {
    "& > *": {
      width: "100%",
      display: "block"
    }
  },
  box: {
    margin: "5rem auto"
  },
  apply: {
    width: "100%"
  }
};
class Login extends React.Component {
  render() {
    return (
      <form
        className={this.props.classes.root}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Email"
          name="account"
          onChange={this.handleChange}
        />
        <TextField
          id="standard-basic"
          label="Password"
          name="pass"
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="secondary"
          className={this.props.classes.apply}
          type="submit"
          variant="outlined"
        >
          Sign In
        </Button>
      </form>
    );
  }
}
export default withStyles(styles)(Login);
