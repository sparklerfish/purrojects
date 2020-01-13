import { connect } from "react-redux";
import StepList from "./step_list";
// Actions
import { createStep } from "../../actions/step_actions";

const mapStateToProps = (state, { project_id }) => ({
  steps: this.props.steps,
  project_id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createStep: (...args) => dispatch(createStep(...args))
});

// const stepsByProjectId = ({ entities: { steps } }, project_id) => {
//   // debugger
//   const stepsArrayByProjectId = [];
//   Object.keys(steps).forEach(stepId => {
//     // debugger
//     const step = steps[stepId];
//     if (steps[stepId].project_id === project_id) stepsByProjectId.push(step);
//   });
//   return stepsArrayByProjectId;
// };

export default connect(mapStateToProps, mapDispatchToProps)(StepList);

