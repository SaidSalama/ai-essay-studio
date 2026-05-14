import './DraftPanel.css';

interface DraftPanelProps {
  draft: string;
}

const DraftPanel = ({ draft }: DraftPanelProps) => {
  return (
    <div className="draft-panel">
      <div className="draft-header">
        <h2>Generated Draft</h2>
        <span className="draft-status">AI Generated</span>
      </div>

      <div className="draft-content">
        {draft ? (
          <div className="essay-text">
            {draft.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <div className="empty-draft">
            <p>The AI-generated draft will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DraftPanel;