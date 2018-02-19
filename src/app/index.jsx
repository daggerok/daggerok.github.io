import React from 'react';
import { render } from 'react-dom';
import projects from '../projects.json';
import Header from './Header';
import ProjectList from './ProjectList';
import Disqus from './Disqus';

const App = props => <div {...props}>
  <Header/>
  <ProjectList projects={projects}/>
  <Disqus/>
</div>;

render(
  <App className='app'/>,
  document.querySelector('#app')
);
