import React, { Component } from "react";

import Jobs from "./Components/Jobs/Jobs";

import "./App.css";

const mockJobs = [
  { title: "title 1", company: "company 1" },
  { title: "title 1", company: "company 1" },
  { title: "title 1", company: "company 1" },
  { title: "title 1", company: "company 1" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jobs jobs={mockJobs} />
      </div>
    );
  }
}

export default App;
