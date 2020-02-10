import React from "react";
import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import Companies from "./components/Companies";
import Blogs from "./components/Blogs";
import Signin from "./components/Signin";
import Employers from "./components/Employers";
import Footers from "./components/Footers";
import Jobdetail from "./components/Jobdetail";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Companydetail from "./components/Companydetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/jobs" component={Jobs} />
        <Route path="/job/:idjob" component={Jobdetail} />
        <Route path="/companies" component={Companies} />
        <Route path="/company/:idcompany" component={Companydetail} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/signin" component={Signin} />
        <Route path="/employers" component={Employers} />
      </div>
    </BrowserRouter>
  );
}

export default App;
