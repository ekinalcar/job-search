import React, { Component } from "react";
import axios from "axios";

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
        <Jobs jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;
