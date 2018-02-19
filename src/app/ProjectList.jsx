import React from 'react';

export default ({ projects }) => <ul>
  {
    projects && projects.map((project, key) =>
      <li key={key}>
        <a href={project.url}>{project.name}</a>
      </li>
    )
  }
</ul>;
