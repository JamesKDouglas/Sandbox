// parameters:
// return:
// example:
// pseudocode:

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Neon Felix" />
        <Welcome name="Eva Elfie" />
        <Welcome name="Krisone" />
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);