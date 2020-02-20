import React from "react";
import StepList from "../steps/step_list";
import { Link } from "react-router-dom";
import CommentListContainer from "../comments/comment_list_container";
import AddComment from "../comments/add_comment";

class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    console.log(this.props)
    // this.getComments = this.props.requestComments(this.props.match.params.projectId);
    // this.forceUpdate = this.forceUpdate.bind(this); 
    // this.updateList = this.updateList.bind(this);
    // this.state = {
    //   rerender: false
    // }
  }

  componentDidMount() {
      this.props.requestProject(this.props.match.params.projectId);
      this.props.requestSteps(this.props.match.params.projectId);
      this.props.requestComments(this.props.match.params.projectId);
  }

  handleDelete() {
    if (window.confirm("Do you really want to delete this purroject?")) {
      this.props.deleteProject(this.props.project.id)
      this.props.history.push(`/projects`)
    }
  }

  // updateList() {
  //   this.forceUpdate();
  //   console.log("list updated")
  //   // this.props.requestComments(this.props.projectId);
  //   this.setState({
  //     rerender: !this.state.rerender
  //   })
  //   console.log(this.state);
  // }

  editLinks() {
    return(
      <div>
        <div className="done-button">
          <Link to={`/projects/${this.props.project.id}/update`}>
            Edit Purroject
          </Link>
        </div>

        <div className="delete-button" onClick={this.handleDelete}>
          Delete Purroject
        </div>
      </div>
    )
  }

  render() {
    if (!this.props.project) return null
    if (!this.props.steps) return null
    if (!this.props.userId) return null
    // console.log(this.props)
    return (
      <div className="project-show">
        <center>
          <br/>
          <div className="project-title">{this.props.project.title}</div>
          <div className="project-body">{this.props.project.body}</div>
          <br/>
          <hr/>
          <br/>
          <StepList
            projectId={this.props.project.id}
            steps={this.props.steps}
          />
          {this.props.project.author_id === this.props.userId ? this.editLinks() : null }
          <CommentListContainer
            projectId={this.props.project.id}
            comments={this.props.comments}
          />
          {/* <AddComment projectId={this.props.project.id} updateList={this.updateList} /> */}
        </center>
      </div>
    );
  }
}

export default ProjectShow;
