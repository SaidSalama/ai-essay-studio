const ResearchPanel = ({ research }: { research: string }) => (
  <div className="panel">
    <h2>Research Results</h2>
    <p>{research || "Research in progress..."}</p>
  </div>
);export default ResearchPanel;