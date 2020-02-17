import React from "react";
import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import Companies from "./components/Companies";
import Blogs from "./components/Blogs";
import Signin from "./components/Signin";
import Employers from "./components/Employers";
import Footers from "./components/Footers";
import Postjob from "./components/Postjob";
import Jobdetails from "./components/Jobdetails";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Companydetail from "./components/Companydetail";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Home from "./components/Home";
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/postjob" component={Postjob} />
          <Route path="/job/:idjob" component={Jobdetails} />
          <Route path="/companies" component={Companies} />
          <Route path="/company/:idcompany" component={Companydetail} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/signin" component={Signin} />
          <Route path="/employers" component={Employers} />
          <Footers />
        </div>
      </Provider>
    </BrowserRouter>
  );
}
