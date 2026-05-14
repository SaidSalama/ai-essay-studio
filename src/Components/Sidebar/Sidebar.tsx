import './Sidebar.css';

const steps = [
  { id: 1, title: "Ask AI" },
  { id: 2, title: "Plan" },
  { id: 3, title: "Search Results" },
  { id: 4, title: "Draft/Essay" },
  { id: 5, title: "Critique" },
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