import './EssayEditor.css';

const EssayEditor = ({ title, setTitle, content, setContent, isGenerating }: any) => {
  return (
    <div className="editor">
      <input
        type="text"
        className="title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Essay Title"
      />

      <textarea
        className="content-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your essay will appear here as AI generates it..."
      />

      {isGenerating && <div className="generating">AI is generating content...</div>}
    </div>
  );
};

export default EssayEditor;