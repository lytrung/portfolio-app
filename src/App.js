import React, {Component} from 'react';
import axios from 'axios';
import View from './View';
import Project from './Project';
import AddProjectForm from './AddProjectForm';
import UpdateProjectForm from './UpdateProjectForm';
import './App.css';

const urlPrefix = 'http://localhost:3001/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView:'projects',
      projects:[],
      projectToUpdate:null
     
    }
  }

  setActiveView = (viewName) => {
    this.setState({activeView:viewName})
  }

  setProjectToUpdate = (id) => {
    var found = this.state.projects.find(function(project) {
      return project.id === id;
    })
    this.setState({projectToUpdate:found})
  }

  getProjects = () => {
    axios.get(urlPrefix + '/projects')
    .then(res => {
      this.setState({projects:res.data});
    })
  }

  addProjects = (data) => {
    axios.post(urlPrefix + '/projects', data)
    .then(() => this.getProjects());
  }

  deleteProjects = (id) =>{
    axios.delete(urlPrefix + '/projects/'+id)
    .then(() => this.getProjects());
  }
  
  updateProjects = (id,data) =>{
    axios.put(urlPrefix + '/projects/'+id, data)
        .then(()=>this.getProjects());

  }

  componentDidMount() {
    this.getProjects();
  }
  render() {
    return (
      <div className="app">

        <View viewName="projects" activeView={this.state.activeView} className="color1">
          <div className="header">
            <i onClick={() => this.setActiveView('add-projects')} className="fas fa-plus"></i>
            <i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i>
          </div>
          <div className="main">
            <h2>Projects</h2>
            {
              this.state.projects.map(project => {
                var projectProps = {
                  ...project,
                  key: project.id,
                  deleteProjects: this.deleteProjects,
                  setProjectToUpdate: this.setProjectToUpdate,
                  setActiveView: this.setActiveView,
                }
                return <Project {...projectProps} />;
              })
            }
            
          </div>
        </View>

        <View viewName="add-projects" activeView={this.state.activeView} className="color2">
          <div className="header"><i onClick={() => this.setActiveView('projects')} className="fas fa-times"></i></div>
            <div className="main">
              <h3>Add Projects</h3>
              <AddProjectForm addProjects={this.addProjects} setActiveView={this.setActiveView}/>
            </div>
        </View>

        <View viewName="update-projects" activeView={this.state.activeView} className="color4">
          <div className="header"><i onClick={() => this.setActiveView('projects')} className="fas fa-times"></i></div>
            <div className="main">
              <h3>Update Projects</h3>
              <UpdateProjectForm {...this.state.projectToUpdate} updateProjects={this.updateProjects} setActiveView={this.setActiveView}/>
            </div>
        </View>

        <View viewName="nav" activeView={this.state.activeView} className="color0">
          <div className="header"><i onClick={() => this.setActiveView('projects')} className="fas fa-times"></i></div>
          <div className="main">
            <ul className="menu">
              <li><a onClick={() => this.setActiveView('projects')} className="color1" href="#">Projects</a></li>
              <li><a onClick={() => this.setActiveView('add-projects')} className="color2" href="#">Add Projects</a></li>
              <li><a className="color3" href="">Update Projects</a></li>
              <li><a className="color4" href="">Login</a></li>
              <li><a className="color5" href="">Signup</a></li>
            </ul>
          </div>
        </View>
        <View viewName="view-test" activeView={this.state.activeView} className="color1">
          hi
        </View>

      </div>
    );
  }

}

export default App;
