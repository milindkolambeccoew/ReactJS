import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div classNameNameName="App">
        <h1> Jai Shrikrishna</h1>
        <Navbar title="MyNavbar" aboutText="Thissssss" /> {/* We're calling Navbar and will pass actual parameters (props) */}
      </div>
    </>
  );
}

export default App;
