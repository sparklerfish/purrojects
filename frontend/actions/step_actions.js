import * as StepAPIUtil from "../util/step_api_util";

export const RECEIVE_ALL_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

// sync actions
export const receiveSteps = ({ steps })=> {
  // debugger
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

// async actions
export const requestSteps = (projectId) => dispatch =>
  StepAPIUtil.fetchSteps(projectId).then(steps => dispatch(receiveSteps(steps)));

export const createStep =  (step) => dispatch =>
  StepAPIUtil.createStep(step).then(step =>
    dispatch(receiveStep(step))
  );

export const updateStep = step => dispatch =>
  StepAPIUtil.updateStep(step).then(step => dispatch(receiveStep(step)));

export const destroyStep = step => dispatch =>
  StepAPIUtil.destroyStep(step).then(step => dispatch(removeStep(step)));