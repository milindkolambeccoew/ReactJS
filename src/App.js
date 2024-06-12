import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import CompText from "./compText";

function App() {
  return (
    <>
      <div classNameNameName="App">
        <h1> Jai Shrikrishna</h1>
        <Navbar title="myTitle" aboutText="About My App"/> 
        {/* We're calling Navbar and will pass actual parameters (props) */}
        <CompText/>
      </div>
    </>
  );
}

export default App;
