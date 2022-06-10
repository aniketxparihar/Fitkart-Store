import "./App.css";
import logo from "./logo.png";
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
