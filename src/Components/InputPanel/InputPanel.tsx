import './InputPanel.css';

interface InputPanelProps {
  topic: string;
  setTopic: (value: string) => void;
  maxRevisions: number;
  setMaxRevisions: (value: number) => void;
  onStart: () => void;
}

const InputPanel = ({ topic, setTopic, maxRevisions, setMaxRevisions, onStart }: InputPanelProps) => {
  return (
    <div className="input-panel">
      <h2>Start Your Essay</h2>
      <textarea
        className="topic-input"
        placeholder="Write your essay topic or prompt here..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      
      <div className="revisions">
        <label>Maximum Revisions</label>
        <input 
          type="number" 
          value={maxRevisions} 
          onChange={(e) => setMaxRevisions(Number(e.target.value))} 
          min="1" 
          max="10"
        />
      </div>

      <button className="start-btn" onClick={onStart} disabled={!topic.trim()}>
        Start Generation
      </button>
    </div>
  );
};

export default InputPanel;