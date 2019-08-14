import React, {Component} from 'react';

class Project extends Component {

	handleDeleteProjectClick = () => {
		var {deleteProjects,id} = this.props;
		deleteProjects(id)
	}

	handleUpdateProjectClick = () => {
		var {setProjectToUpdate,id} = this.props;
		setProjectToUpdate(id)
		this.props.setActiveView('update-projects');
	}

	render() {

		var {id,name,description,photo} = this.props;

		return (
			<div className="card project">
				<img className="card-img-top" src={photo} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{description}</p>
					<p>
						<i className="fas fa-heart"></i>
						<i onClick={this.handleUpdateProjectClick} className="fas fa-edit updateProject"></i>
						<i onClick={this.handleDeleteProjectClick} className="fas fa-trash delete-project"></i>
					</p>

				</div>
			</div>      
		);
	}
}

export default Project;
