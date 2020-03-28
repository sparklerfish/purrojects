# README

![purrojects logo](https://github.com/sparklerfish/purrojects/blob/master/app/assets/images/purrojects_sized.png?raw=true "Purrojects Logo")


# Table of Contents
1. #### [Introduction](https://github.com/sparklerfish/purrojects#introduction-1)
2. #### [Technologies](https://github.com/sparklerfish/purrojects#technologies-1)
3. #### [Features](https://github.com/sparklerfish/purrojects#features-1)
4. #### [Future Direction](https://github.com/sparklerfish/purrojects#future-direction-1)

---

## Introduction
Purrojects is an Instructables clone for finding and sharing instructions for creating projects for cats.
![front page](https://github.com/sparklerfish/purrojects/blob/master/app/assets/images/screenshots/main.png "Purrojects Front Page")


[Live link to Purrojects!](https://purrojects.herokuapp.com)

---

## Technologies
#### Backend
Purrojects is built on a Ruby on Rails framework with a PostgreSQL database.
User-uploaded images are hosted with Amazon Web Services.

#### Frontend
Purrojects uses React and Redux to dynamically update and respond to user interaction in a single-page app.

---

## Features
* Users can browse projects
    ![project index](https://github.com/sparklerfish/purrojects/blob/master/app/assets/images/screenshots/project_index.png "Purrojects Project Index Page")
    * Project list is structured with a container component populated with reusable project index item presentational components.
      Project index component:
      ```javascript
        <div className="project-list">
          {projects.map(project => (
            <ProjectIndexItem project={project} users={users} key={`project-${project.id}`}/>
          ))}
        </div>
      ```
* Users can view projects with step-by-step directions
    ![project show](https://github.com/sparklerfish/purrojects/blob/master/app/assets/images/screenshots/project_show.png "Purrojects Project Show Page")
    * Project view is structured with a container component populated with reusable step presentational components.
      ```javascript
        <div className="project-title">{this.props.project.title}</div>
        <p>by {this.props.project.author.username}</p>
        {this.props.project.imageUrl ? (
          <img className="project-show-image" src={this.props.project.imageUrl} />
        ) : null}
        <div className="project-body">{this.props.project.body}</div>
        <StepList
          projectId={this.props.project.id}
          steps={this.props.steps}
        />
      ```

      ``` javascript
      <ul className="step-list">
        {steps.map((step, idx) => (
          <StepListItem step={step} key={`step-${step.id}`} idx={idx}/>
        ))}
      </ul>
      ```
* Users can create and update projects
  ![project create](https://github.com/sparklerfish/purrojects/blob/master/app/assets/images/screenshots/project_create.png "Purrojects Project Create Page")
  * Steps can be edited or deleted individually
  * Users can add photos to projects and steps
  ![project image](https://github.com/sparklerfish/purrojects/blob/master/app/assets/images/screenshots/project_edit.png "Purrojects Project Edit Page")
    * Image upload form displays an image preview if one has been uploaded
      ``` javascript
        <div className="edit-box-left">
            {this.state.imageUrl || this.props.step.imageUrl ? this.previewImage() : this.imageForm()}
        </div>
      ```
  * Users can edit and delete projects that they have authored
  ![project delete](https://github.com/sparklerfish/purrojects/blob/master/app/assets/images/screenshots/project_delete.png "Purrojects Project Delete Modal")
* Users can search for projects based on keywords in project title
  ![project search](https://github.com/sparklerfish/purrojects/blob/master/app/assets/images/screenshots/project_search.png "Purrojects Project Search")
  * Search dispatches an action to fetch projects with a title that matches the query param

    Async action to search projects:
    ``` javascript
    export const searchProjects = search => dispatch => (
      ProjectAPIUtil.searchProjects(search)
        .then(projects => dispatch(receiveProjects(projects)))
    );
    ```
    Ajax request to project API endpoint
    ``` javascript
    export const searchProjects = search => (
      $.ajax({
          method: "GET",
          url: `/api/projects`,
          data: { search }
      })
    )
    ```



* Users can add comments to projects
  ![comment form](https://github.com/sparklerfish/purrojects/blob/master/app/assets/images/screenshots/comment_form.png "Purrojects Comment Form")
  * Clicking "Add Comment" or "Cancel" toggles visibility of comment form
    ``` javascript
    <div className="new-submit" id="comment-form">
      {this.state.clickable ? this.clickableButton() : this.unclickableButton()}
      {this.state.formVisible ? (
      <CommentFormContainer
          projectId={this.props.projectId}
          toggleForm={this.toggleForm}
      />
      ) : null}
    </div>
    ```

---

## Future Direction
* Filtering projects by category