import * as StepAPIUtil from "../util/step_api_util";

export const RECEIVE_ALL_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";
export const CLEAR_STEPS = "CLEAR_STEPS";

// sync actions
export const receiveSteps = ({ steps })=> {
  return {
  type: RECEIVE_ALL_STEPS,
  steps
}};

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = stepId => ({
  type: REMOVE_STEP,
  stepId
});

export const clearSteps = () => ({
  type: CLEAR_STEPS
})

// async actions
export const requestSteps = (projectId) => dispatch =>
  StepAPIUtil.fetchSteps(projectId).then(steps => dispatch(receiveSteps(steps)));

export const createStep =  (step) => dispatch =>
  StepAPIUtil.createStep(step).then(step =>
    dispatch(receiveStep(step))
  );

export const updateStep = step => dispatch =>
  StepAPIUtil.updateStep(step).then(step => dispatch(receiveStep(step)));

export const destroyStep = stepId => dispatch =>
  StepAPIUtil.destroyStep(stepId)
  .then(() => dispatch(removeStep(stepId)));