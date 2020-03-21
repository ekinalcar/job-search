import React, { Component } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

import logo from "./assets/images/sitting.svg";

import Jobs from "./Components/Jobs/Jobs";

import "./App.css";

class App extends Component {
  state = { jobs: [] };

  fetchJobs = async () => {
    try {
      const jobs = await axios.get("http://localhost:3001/jobs");
      if (jobs.data) {
        this.setState({ jobs: jobs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchJobs();
  }

  render() {
    return (
      <div className="App">
        <div className="layout">
          <div className="left">
            <Typography variant="h4" component="h1">
              Entry Level Software Jobs
            </Typography>
            <Jobs jobs={this.state.jobs} />
          </div>
          <div className="right">
            <img alt="Sitting" src={logo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
