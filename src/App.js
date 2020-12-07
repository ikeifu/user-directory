import CardBody from "./components/Cardbody";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Your library of employees</h1>
      <SearchBar />
      <CardBody />
    </div>
  );
}

export default App;
