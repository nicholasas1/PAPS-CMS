import '../App.css';
import { Link } from "react-router-dom";
import Navbar from "../Include/navbar";
import Sidebar from "../Include/sidebar";

function Dashboard() {
    return (
      <div className="App"> 
        <Navbar/>
        <Sidebar/>
      </div>
    );
  }
  
  export default Dashboard;