import React from "react";
import { Grid, Typography, Box, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  item: {
    textAlign: "left"
  },
  box1: {
    padding: "1rem",
    color: "white",
    background: "black",
    "& a": {
      color: "white",
      fontWeight: 100
    }
  },
  box2: {
    padding: "1rem",
    "& a": {
      color: "black",
      fontWeight: 100
    }
  }
};
class Footer extends React.Component {
  render() {
    const {
      skills,
      levels,
      companies,
      rules,
      pages,
      post,
      cities,
      contact
    } = this.props;
    return (
      <Box className={this.props.classes.item}>
        <Box className={this.props.classes.box1}>
          <Grid container direction="row">
            <Grid item xs={3}>
              <Typography variant="h6">Việc làm IT theo kỹ năng</Typography>
              <Box>
                {skills.map(skill => {
                  return (
                    <Typography>
                      <Link component="a">{skill}</Link>
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">Việc làm IT theo cấp bậc</Typography>
              <Box>
                {levels.map(level => {
                  return (
                    <Typography>
                      <Link variant="body1">{level}</Link>
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">Việc làm IT theo công ty</Typography>
              <Box>
                {companies.map(company => {
                  return (
                    <Typography>
                      <Link variant="body1">{company}</Link>
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">Việc làm IT theo thành phố</Typography>
              <Box>
                {cities.map(city => {
                  return (
                    <Typography>
                      <Link variant="body1">{city}</Link>
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={this.props.classes.box2}>
          <Typography size="medium">{post}</Typography>
          <Grid container direction="row">
            <Grid item xs={3}>
              <Box>
                {pages.map(page => {
                  return (
                    <Typography>
                      <Link component="a">{page}</Link>
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                {rules.map(rule => {
                  return (
                    <Typography>
                      <Link variant="body1">{rule}</Link>
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                {contact.map(ctact => {
                  return (
                    <Typography>
                      <Link variant="body1">{ctact}</Link>
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
export default withStyles(styles)(Footer);
