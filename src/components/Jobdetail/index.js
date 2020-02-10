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
import PeopleIcon from "@material-ui/icons/People";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
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
class Jobdetail extends React.Component {
  state = {
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
  }

  render() {
    const {
      title,
      logo,
      field,
      company,
      people,
      country,
      day,
      OT,
      address,
      reason,
      description,
      skill,
      why
    } = this.state.job;
    return (
      <div>
        {this.state.loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="80vh"
            width="100vw"
          >
            <CircularProgress size={40} />
          </Box>
        ) : (
          <Box mx="auto" width="80vw" className={this.props.classes.box}>
            <Grid
              spacing={3}
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs={4}>
                <Card>
                  <CardActionArea className={this.props.classes.root}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={logo}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {company}
                    </Typography>
                    <Box>
                      <ListItem>
                        <ListItemIcon>
                          <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText>{people}</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <EditLocationIcon />
                        </ListItemIcon>
                        <ListItemText>{country}</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <DateRangeIcon />
                        </ListItemIcon>
                        <ListItemText>{day}</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ScheduleIcon />
                        </ListItemIcon>
                        <ListItemText>{OT}</ListItemText>
                      </ListItem>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Typography variant="h5">{title}</Typography>
                  <Box>
                    {field.map(f => {
                      return <Button variant="outlined">{f}</Button>;
                    })}
                  </Box>
                  <ListItem>
                    <ListItemIcon>
                      <MonetizationOnRoundedIcon />
                    </ListItemIcon>
                    <ListItemText>Sign in to view salary</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnRoundedIcon />
                    </ListItemIcon>
                    <ListItemText>{address}</ListItemText>
                  </ListItem>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={this.props.classes.apply}
                  >
                    Apply Now
                  </Button>
                </Box>
                <Box>
                  <Box>
                    <Typography variant="h5">
                      Top 3 Reasons To Join Us
                    </Typography>
                    {reason.map(r => {
                      return (
                        <ListItem>
                          <ListItemIcon>
                            <ChevronRightRoundedIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>{r}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </Box>
                  <Box>
                    <Typography variant="h5">The Job description</Typography>
                    {description.map(describe => {
                      return (
                        <ListItem>
                          <ListItemIcon>
                            <ChevronRightRoundedIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>{describe}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </Box>
                  <Box>
                    <Typography variant="h5">
                      Your Skills and Experience
                    </Typography>
                    {skill.map(s => {
                      return (
                        <ListItem>
                          <ListItemIcon>
                            <ChevronRightRoundedIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>{s}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </Box>
                  <Box>
                    <Typography variant="h5">
                      Why You'll Love Working Here
                    </Typography>
                    {why.map(w => {
                      return (
                        <ListItem>
                          <ListItemIcon>
                            <ChevronRightRoundedIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>{w}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(Jobdetail);
