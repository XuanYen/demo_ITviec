import React from "react";
import { Grid, Typography, withStyles, Box, Button } from "@material-ui/core";
import Job from "../Job";
import axios from "axios";
import { Link } from "react-router-dom";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import { connect } from "react-redux";
import compose from "recompose/compose";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
const styles = {
  root: {
    margin: "5rem 0rem"
  },
  post: {
    textDecoration: "none",
    fontSize: "1.5rem",
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
    "& div": {
      textAlign: "center",
      margin: "1rem"
    }
  },
  list: {
    width: "100%",
    maxWidth: 360,
    margin: 0
  }
};
class Jobs extends React.Component {
  /*state = {
    jobs: []
  };
  componentDidMount() {
    axios
      .get("http://5e397cb4aad22200149629c5.mockapi.io/api/jobs/jobs")
      .then(res => {
        this.setState({ jobs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }*/
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        className={this.props.classes.root}
      >
        <Grid item xs={9}>
          <Link to="/postjob" className={this.props.classes.post}>
            <AccessibilityNewIcon fontSize="large" />
            Are you hire recruitment? Post job here !!!
            <Box>
              <Button variant="contained" color="primary">
                Post job
              </Button>
            </Box>
          </Link>
          <Typography variant="h5" color="black">
            IT jobs in Vietnam for you
          </Typography>
          <Box>
            {this.props.jobs.map(job => {
              return (
                <Job
                  id={job.id}
                  title={job.title}
                  field={job.field}
                  company={job.company}
                  logo={job.logo}
                  description={job.description}
                ></Job>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography>Filter</Typography>
          <List
            component="nav"
            className={this.props.classes.list}
            aria-label="contacts"
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="By Company" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BorderColorIcon />
              </ListItemIcon>
              <ListItemText primary="By field" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ArrowUpwardIcon />
              </ListItemIcon>
              <ListItemText primary="By increasing ID" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ArrowDownwardIcon />
              </ListItemIcon>
              <ListItemText primary="By decreasing ID" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    jobs: state.jobs
  };
};
export default compose(
  withStyles(styles, { name: "Jobs" }),
  connect(mapStateToProps, null)
)(Jobs);
