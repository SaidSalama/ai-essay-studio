import './ResearchPanel.css';

interface ResearchPanelProps {
  research: string[] | any[];   // array of research items
}

const ResearchPanel = ({ research }: ResearchPanelProps) => {
  return (
    <div className="research-panel">
      <h2>Research Results</h2>
      
      {research && research.length > 0 ? (
        <div className="research-list">
          {research.map((item, index) => (
            <div key={index} className="research-item">
              <div className="research-number">{index + 1}</div>
              <div className="research-content">
                {typeof item === 'string' ? item : JSON.stringify(item)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-research">Research in progress...</p>
      )}
    </div>
  );
};

export default ResearchPanel;