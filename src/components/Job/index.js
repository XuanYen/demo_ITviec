import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Jobdetail from "../Jobdetail";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  box: {
    marginLeft: "50px",
    textTransform: "none",
    textAlign: "left",
    "& img": {
      maxWidth: "100%",
      objectFit: "contain"
    }
  }
}));
export default function Job(props) {
  const classes = useStyles();
  const { id, title, field, company, logo, description } = props;

  return (
    <Box display="flex" className={classes.box}>
      <img src={logo} />
      <Box className={classes.box}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h6">{company}</Typography>
        <Button>
          <Link to={`job/${id}`}>See into view</Link>
        </Button>
        {/* <Link to={`job/${id}`}>
            <Typography>See into view</Typography>
            
          </Link> */}
        <Box>
          {/* <Typography variant="p">{description[0]}</Typography>
            <div>
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
            </div> */}
        </Box>
      </Box>
    </Box>
  );
}