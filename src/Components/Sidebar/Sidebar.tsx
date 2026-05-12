import './Sidebar.css';

const steps = [
  { id: 1, title: "Plan" },
  { id: 2, title: "Research" },
  { id: 3, title: "Generate" },
  { id: 4, title: "Reflect" },
  { id: 5, title: "Revise" },
];

const Sidebar = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="sidebar">
      <h3>Progress</h3>
      <div className="steps-list">
        {steps.map((step) => (
          <div key={step.id} className={`step ${step.id === currentStep ? 'active' : ''}`}>
            <div className="step-number">{step.id}</div>
            <div className="step-title">{step.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;