export const fetchSteps = (projectId) =>
  $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}`
  });

export const createStep = (step) =>
  $.ajax({
    method: "POST",
    url: `/api/steps`,
    data: { step }
  });

export const updateStep = step =>
  $.ajax({
    method: "PATCH",
    url: `/api/steps/${step.id}`,
    data: { step }
  });

export const destroyStep = stepId =>
  $.ajax({
    method: "DELETE",
    url: `/api/steps/${stepId}`
  });
