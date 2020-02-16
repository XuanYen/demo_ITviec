import React from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PeopleIcon from "@material-ui/icons/People";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import {
  CircularProgress,
  Box,
  CardMedia,
  CardContent,
  withStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button
} from "@material-ui/core";

const styles = {
  root: {
    maxWidth: 200,
    marginLeft: 0,
    marginRight: "7rem",
    outline: "solid thin grey",
    "& img": {
      objectFit: "cover"
    }
  },
  header: {
    textAlign: "left",
    fontSize: "0.7rem",
    display: "flex",
    margin: "2rem",
    "& li": {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  button: {
    margin: "0.5rem"
  }
};

class Companydetail extends React.Component {
  state = {
    company: {},
    loading: true
  };

  componentDidMount() {
    axios
      .get(
        `http://5e397cb4aad22200149629c5.mockapi.io/api/jobs/companies/${this.props.match.params.idcompany}`
      )
      .then(res => {
        this.setState({
          company: res.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {
      id,
      company,
      quote,
      logo,
      banner,
      address,
      people,
      country,
      day,
      OT,
      title,
      description,
      skills,
      reasons,
      benefits,
      location,
      rating,
      activeTab
    } = this.state.company;

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
          <Box mx="auto" width="80vw">
            <Box>
              <Box>
                <CardMedia
                  component="img"
                  alt="Banner"
                  image={banner}
                  title="Banner"
                  width="100%"
                />
              </Box>
              <Box className={this.props.classes.header}>
                <Box>
                  <Typography variant="h6">{company}</Typography>
                  <CardContent
                    className={this.props.classes.root}
                    style={{ padding: "10px" }}
                  >
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={logo}
                      title="Contemplative Reptile"
                    />
                  </CardContent>
                </Box>
                <Box>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnRoundedIcon />
                    </ListItemIcon>
                    <ListItemText>{address}</ListItemText>
                  </ListItem>
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
              </Box>
            </Box>
            <Box width="60vw">
              {
                <Tabs>
                  <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Reviews</Tab>
                  </TabList>

                  <TabPanel>
                    <Typography variant="h6">{title}</Typography>
                    <Box>
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
                    <Typography variant="h6">Our Key Skills</Typography>
                    <Box>
                      {skills.map(skill => (
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          className={this.props.classes.button}
                        >
                          {skill}
                        </Button>
                      ))}
                    </Box>
                    <Typography variant="h5">
                      Why You'll Love Working Here
                    </Typography>
                    <Box>
                      {reasons.map(reason => {
                        return (
                          <ListItem>
                            <ListItemIcon>
                              <ChevronRightRoundedIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>{reason}</ListItemText>
                          </ListItem>
                        );
                      })}
                    </Box>
                    <Typography variant="h6">Benefits</Typography>
                    <Box>
                      {benefits.map(benefit => {
                        return (
                          <ListItem>
                            <ListItemIcon>
                              <ChevronRightRoundedIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>{benefit}</ListItemText>
                          </ListItem>
                        );
                      })}
                    </Box>
                    <Typography variant="h6">Location</Typography>
                    <Box>
                      <CardMedia
                        component="iframe"
                        alt="Banner"
                        src={location}
                        title="Banner"
                        width="600"
                        height="450"
                      />
                    </Box>
                  </TabPanel>
                  <TabPanel>No reviews</TabPanel>
                </Tabs>
              }
            </Box>
          </Box>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(Companydetail);
