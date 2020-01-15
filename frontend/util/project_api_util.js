export const fetchProjects = () => (
    $.ajax({
        url: '/api/projects'
    })
);

export const fetchProject = projectId => (
    $.ajax({
        url: `/api/projects/${projectId}`
    })
);

export const createProject = project => {
    // debugger; 
    return $.ajax({
      method: "POST",
      url: "/api/projects",
      data: { project }
    })
};

export const updateProject = project => (
    $.ajax({
        url: `/api/project/${project.id}`,
        method: 'PATCH',
        data: { project }
    })
);

export const deleteProject = projectId => (
  $.ajax({
    method: "DELETE",
    url: `/api/projects/${projectId}`
  })
);

