import logo from "./logo.svg";
import "./App.css";
import Prompt from "./Components/Prompt";
import Prom from "./Components/Prom";
import Category1 from "./Components/Prom";
import Creative from "./Components/Creative";
import Developer from "./Components/Developer";
import Business from "./Components/Prom";
// import Home from "./Components/Home";
// import "./Home.css";

function App() {
  return (
    <div className="App">
      {/* <Prompt></Prompt> */}
      {/* <Category1 /> */}
      <Business />
      <Creative />
      <Developer />

      {/* <Home /> */}
    </div>
  );
}

export default App;
