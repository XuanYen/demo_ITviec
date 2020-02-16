import React from "react";
import { Box, Button, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import compose from "recompose/compose";
import * as actions from "../../actions";
import { Link } from "react-router-dom";

const styles = {
  root: {
    "& > *": {
      width: "100%",
      margin: "0.7rem"
    },
    "& a": {
      textDecoration: "none",
      color: "white"
    }
  }
};

class Postjob extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.onaddjob(this.state);
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
      <Box mx="auto" width="60vw">
        <form
          className={this.props.classes.root}
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <TextField
            id="standard-basic"
            label="Title"
            name="title"
            onChange={this.handleChange}
          ></TextField>
          <TextField
            id="standard-basic"
            label="Field"
            name="field"
            onChange={this.handleChange}
          ></TextField>
          <TextField
            id="standard-basic"
            label="Company"
            name="company"
            onChange={this.handleChange}
          ></TextField>
          <TextField
            id="standard-basic"
            label="Logo"
            name="logo"
            onChange={this.handleChange}
          />
          <TextField
            id="standard-basic"
            label="Description"
            name="description"
            onChange={this.handleChange}
          />
          <Button variant="contained" color="secondary" type="submit">
            <Link to="/jobs">Add Job</Link>
          </Button>
        </form>
      </Box>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onaddjob: job => dispatch(actions.addjob(job))
  };
};

export default compose(
  withStyles(styles, { name: "Postjob" }),
  connect(null, mapDispatchToProps)
)(Postjob);
