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

export const createProject = project => (
    $.ajax({
      method: "POST",
      url: "/api/projects",
      data: { project }
    })
);

export const updateProject = project => (
    $.ajax({
        url: `/api/projects/${project.id}`,
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

export const searchProjects = search => (
    $.ajax({
        method: "GET",
        url: `/api/projects`,
        data: { search }
    })
)