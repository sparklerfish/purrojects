const StepList = ({ steps, todo_id, createStep }) => {
  const stepItems = steps.map(step => (
    <StepListItem key={step.id} step={step} />
  ));

  return (
    <div>
      <ul className="step-list">{stepItems}</ul>
    </div>
  );
};

export default StepList;
