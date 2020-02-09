import React from "react";
import { Box } from "@material-ui/core";
import Company from "../Company";
import axios from "axios";
class Companies extends React.Component {
  state = {
    companies: []
  };
  componentDidMount() {
    axios
      .get("http://5e397cb4aad22200149629c5.mockapi.io/api/jobs/companies")
      .then(res => {
        this.setState({ companies: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <Box>
        {this.state.companies.map(company => {
          return (
            <Company
              id={company.id}
              company={company.company}
              quote={company.quote}
              rating={company.rating}
              logo={company.logo}
            ></Company>
          );
        })}
      </Box>
    );
  }
}
export default Companies;
