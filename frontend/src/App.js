import logo from "./docker-logo.png";
import "./App.css";

function App() {
  const onClick = async () => {
    const response = await fetch("http://localhost:4000/");
    const data = await response.text();
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          onClick={() => onClick()}
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </header>
    </div>
  );
}

export default App;
