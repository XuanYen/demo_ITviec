import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Job from "../Job";
import axios from "axios";
class Jobs extends React.Component {
  state = {
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
  }
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8}>
          <Typography>IT jobs in Vietnam for you</Typography>
          <Box>
            {this.state.jobs.map(job => {
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
        <Grid item xs={4}>
          <Typography>Company Spotlight</Typography>
        </Grid>
      </Grid>
    );
  }
}
export default Jobs;
