import React from 'react';
import Project from './Project';
import projectsData from '../projectsData';

import cxs from 'cxs';

class Projects extends React.Component {
  render() {
    let projectList = projectsData.map((projectData, i) => {
      return (
        <Project projectData={projectData} key={`Project_${i}`} />
      )
    })
    return (
      <div className="Projects" className={className}>
        {projectList}
      </div>
    )
  }
}

const className = cxs({
  padding: 0,
  fontFamily: '-apple-system, sans-serif',
})

export default Projects;
