import './RightPanel.css';

const RightPanel = () => {
  return (
    <div className="right-panel">
      <div className="panel">
        <h4>Human in the Loop</h4>
        <p>You are in control. Review and guide the AI at each step.</p>
      </div>

      <div className="panel">
        <h4>Current Step</h4>
        <p><strong>Generate</strong> - AI is drafting the essay</p>
      </div>

      <div className="panel">
        <h4>Revision History</h4>
        <ul>
          <li>v1 • Initial Plan</li>
          <li>v2 • Outline Approved</li>
        </ul>
      </div>
    </div>
  );
};

export default RightPanel;