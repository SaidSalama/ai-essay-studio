import './PlanPanel.css';

interface PlanPanelProps {
  plan: string;
  setPlan: (value: string) => void;
  onApprove: () => void;
}

const PlanPanel = ({ plan, setPlan, onApprove }: PlanPanelProps) => {
  return (
    <div className="plan-panel">
      <h2>AI Proposed Plan</h2>
      <textarea
        className="plan-textarea"
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
      />
      <button className="approve-btn" onClick={onApprove}>
        Approve & Continue
      </button>
    </div>
  );
};

export default PlanPanel;