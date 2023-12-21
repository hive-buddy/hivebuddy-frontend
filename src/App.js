import './App.css';
import { Route, Routes } from "react-router-dom";
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
        <Routes>
            <Route path='/' element={
                <>
                    <Navbar />
                    <HiveBuddy />
                    <HiveBuddyDesc />
                    <Team />
                    {/* <Strengths /> */}
                    {/* <Process /> */}
                    <Login />
                </>
            } />
            <Route path='/enter' element={<Overview />} />
            <Route path='login' element={<h1>Login Page Component</h1>} />
        </Routes>
    );
}

export default App;
