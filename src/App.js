import "./App.css";
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import logo from "./logo.png";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__main">
        <Outlet />
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />


    </div>
  );
}

export default App;
