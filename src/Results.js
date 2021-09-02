import React from "react";

export default function Results({ data }) {
  if (data === null) {
    return <div>search for jobs</div>;
  }
  const jobCards = data.results.map((job, index) => {
    return (
      <div key={index}>
        <h3>{job.title}</h3>
        <h4>{job.company.display_name}</h4>
        <p>{job.description}</p>
        <a href={job.redirect_url} target="_blank" rel="noreferrer">
          link
        </a>
      </div>
    );
  });

  return <div>{jobCards}</div>;
}
