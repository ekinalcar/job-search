import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

import Job from "./Job";

const Jobs = ({ jobs }) => {
  return (
    <div className="jobs">
      <Typography variant="h1">Entry Level Software Jobs</Typography>
      {jobs.map((job, i) => {
        return <Job key={i} job={job} />;
      })}
    </div>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default Jobs;
