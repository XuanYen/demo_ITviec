import React from "react";
import axios from "axios";
import {
  CircularProgress,
  Box,
  Typography,
  Grid,
  withStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  ListItemIcon,
  ListItemText,
  ListItem,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../actions";
import compose from "recompose/compose";
import PeopleIcon from "@material-ui/icons/People";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import Jobdetail from "../Jobdetail";
const styles = {
  box: {
    margin: "5rem 5rem"
  },
  root: {
    maxWidth: 400,
    "& img": {
      objectFit: "none"
    }
  },
  apply: {
    width: "100%"
  }
};
class Jobdetails extends React.Component {
  /*state = {
    job: {},
    loading: true
  };
  componentDidMount() {
    axios
      .get(
        `http://5e397cb4aad22200149629c5.mockapi.io/api/jobs/jobs/${this.props.match.params.idjob}`
      )
      .then(res => {
        this.setState({ job: res.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }*/
  render() {
    return (
      <div>
        {this.props.jobdetail.map(job => {
          return (
            <Jobdetail
              id={job.id}
              logo={job.logo}
              field={job.field}
              company={job.company}
              people={job.people}
              country={job.country}
              day={job.day}
              OT={job.OT}
              address={job.address}
              reason={job.reason}
              description={job.description}
              skill={job.skill}
              why={job.why}
            ></Jobdetail>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobdetail: state.jobs
  };
};
export default compose(
  withStyles(styles, { name: "Jobdetail" }),
  connect(mapStateToProps, null)
)(Jobdetails);
