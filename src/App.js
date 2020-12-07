import MainBody from "./components/Mainbody";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Your library of employees</h1>
      <SearchBar />
      <MainBody />
    </div>
  );
}

export default App;
