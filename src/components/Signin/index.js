import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Box, Button, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Navbar from "../Navbar";
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

class Signin extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    account: "",
    pass: "",
    issignin: false
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() == "") {
      alert("Name Null. Name must be fill");
    } else if (
      emailRegex.test(this.state.email) == false ||
      this.state.email.trim() == ""
    ) {
      alert("invalid email");
    } else if (this.state.password.trim() == "") {
      alert("Password Null. Password must be fill");
    } else {
      alert("Sucessfully");
    }
  };
  handleSignIn = event => {
    event.preventDefault();
    if (
      emailRegex.test(this.state.account) == false ||
      this.state.account.trim() == ""
    ) {
      alert("invalid account");
    } else if (this.state.pass.trim() == "") {
      alert("Password Null. Password must be fill");
    } else if (this.state.account != this.state.email) {
      alert("Failed email account");
    } else if (this.state.pass != this.state.password) {
      alert("Failed password account");
    } else {
      alert("Sign in successfully");
      this.state.issignin = true;
    }
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <Box>
        <Box mx="auto" width="30vw" className={this.props.classes.box}>
          {
            <Tabs>
              <TabList>
                <Tab>Create Account</Tab>
                <Tab>Sign In</Tab>
              </TabList>
              <TabPanel>
                <form
                  className={this.props.classes.root}
                  noValidate
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
                >
                  <TextField
                    id="standard-basic"
                    label="Name"
                    name="name"
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    name="password"
                    onChange={this.handleChange}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={this.props.classes.apply}
                    type="submit"
                  >
                    Create My Account
                  </Button>
                </form>
              </TabPanel>
              <TabPanel>
                <form
                  className={this.props.classes.root}
                  noValidate
                  autoComplete="off"
                  onSubmit={this.handleSignIn}
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
              </TabPanel>
            </Tabs>
          }
        </Box>
      </Box>
    );
  }
}
export default withStyles(styles)(Signin);
