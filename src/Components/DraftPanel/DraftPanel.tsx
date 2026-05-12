const DraftPanel = ({ draft }: { draft: string }) => (
  <div className="panel">
    <h2>Generated Draft</h2>
    <p>{draft || "Draft will appear here..."}</p>
  </div>
);export default DraftPanel;