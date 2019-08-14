import React, {Component} from 'react';

class AddProjectForm extends Component {

	handleAddProjectFormSubmit = (e) => {
	
		e.preventDefault();
		var formData = new FormData(this.addProjectForm);

		var data = {
                      id:Date.now(),
                      name:formData.get('name-input'),
                      description: formData.get('description-input'),
                      photo:formData.get('photo-input'),
                    };
		this.props.addProjects(data);
		this.props.setActiveView('projects');

	}
	render() {

		return (
			<form onSubmit={this.handleAddProjectFormSubmit} className="addProjectForm" ref={el => this.addProjectForm = el}>
			  <div className="form-group">
			    <label htmlFor="name-input">Name</label>
			    <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter project name" />
			  </div>
			  <div className="form-group">
			    <label htmlFor="description-input">Description</label>
			    <textarea className="form-control" name="description-input" id="description-input" rows="3" placeholder="Enter project name"></textarea>
			  </div>

			  <div className="form-group">
			    <label htmlFor="photo-input">Photo</label>
			    <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg" />
			  </div>

			  <div className="form-group">
			    <label htmlFor="type-input">Type</label>
			    <select className="form-control" name="type-input" id="type-input">
			      <option value="1">Painting</option>
			      <option value="2">Sculpture</option>
			      <option value="3">Digital</option>
			    </select>
			  </div>

			  <button type="submit" className="btn btn-primary">Add</button>
			</form>      
		);
	}
}

export default AddProjectForm;
