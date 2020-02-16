import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  box: {
    margin: "1rem 5rem",
    textTransform: "none",
    textAlign: "left",
    "& img": {
      maxWidth: "100%",
      objectFit: "contain"
    }
  },
  link: {
    margin: "0.5rem",
    "& a": {
      textDecoration: "none",
      color: "black"
    },
    "& svg": {
      fontSize: "1rem"
    }
  }
}));
function Job(props) {
  const classes = useStyles();
  const { id, title, field, company, logo, description } = props;

  return (
    <Box display="flex" className={classes.box}>
      <Box width="30%">
        <img src={logo} alt="No logo :)" />
      </Box>
      <Box className={classes.box} width="70%">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h6">{company}</Typography>
        <Button
          onClick={() => props.onjobdetail(id)}
          className={classes.link}
          startIcon={<ArrowForwardIosIcon />}
          variant="contained"
          color="primary"
        >
          <Link to={`job/${id}`}>See into view</Link>
        </Button>
        <Box>
          <Typography variant="p">{description[0]}</Typography>
          <Box>
            {field.map(f => (
              <Button
                variant="outlined"
                size="small"
                color="primary"
                className={classes.margin}
              >
                {f}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    onjobdetail: id => dispatch(actions.jobdetail(id))
  };
};

export default connect(null, mapDispatchToProps)(Job);
