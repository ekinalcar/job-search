import React from "react";
import PropTypes from "prop-types";

const Job = ({ job }) => {
  return (
    <div className={"job"}>
      {job.title}
      {job.company}
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired
};

export default Job;
