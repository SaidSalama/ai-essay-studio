import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AI Essay Studio</div>
      <div className="actions">
        <button className="btn-secondary">Save Draft</button>
        <button className="btn-primary">Export PDF</button>
      </div>
    </header>
  );
};

export default Header;