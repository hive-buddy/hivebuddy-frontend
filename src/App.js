import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HiveBuddy from "./pages/HiveBuddy/HiveBuddy";
import Overview from './pages/Overview';
import Team from "./pages/Team/Team";
import HiveBuddyDesc from "./pages/HiveBuddy/HiveBuddyDesc";
import Login from "./pages/Login/Login";
import {Route, Routes} from "react-router-dom"
import {useState} from "react";


function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="App">
            <Navbar toggle={toggle}/>
            <HiveBuddy/>
            <HiveBuddyDesc/>
            <Login/>
            <Overview/>

        </div>
    );
}

export default App;
