import React, {Component} from 'react';

class UpdateProjectForm extends Component {

	handleUpdateProjectFormSubmit = (e) => {
	
		e.preventDefault();
		var formData = new FormData(this.updateProjectForm);

		var data = {
                      name:formData.get('name-input'),
                      description: formData.get('description-input'),
                      photo:formData.get('photo-input'),
                    };
		this.props.updateProjects(this.props.id,data);
		this.props.setActiveView('projects');

	}
	render() {
		var {name,description,photo} = this.props;
		return (
			<form onSubmit={this.handleUpdateProjectFormSubmit} className="updateProjectForm" ref={el => this.updateProjectForm = el}>
			  <div className="form-group">
			    <label htmlFor="name-input">Name</label>
			    <input type="text" className="form-control" name="name-input" id="name-input" defaultValue={name} />
			  </div>
			  <div className="form-group">
			    <label htmlFor="description-input">Description</label>
			    <textarea className="form-control" name="description-input" id="description-input" rows="3" value={description}></textarea>
			  </div>

			  <div className="form-group">
			    <label htmlFor="photo-input">Photo</label>
			    <input type="text" className="form-control" name="photo-input" id="photo-input" defaultValue={photo} />
			  </div>

			  <div className="form-group">
			    <label htmlFor="type-input">Type</label>
			    <select className="form-control" name="type-input" id="type-input">
			      <option value="1">Painting</option>
			      <option value="2">Sculpture</option>
			      <option value="3">Digital</option>
			    </select>
			  </div>

			  <button type="submit" className="btn btn-primary">Update</button>
			</form>      
		);
	}
}

export default UpdateProjectForm;
