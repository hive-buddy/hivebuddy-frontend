import './App.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HiveBuddy from "./pages/HiveBuddy/HiveBuddy";
import Overview from './pages/Overview';
import Team from "./pages/Team/Team";
import HiveBuddyDesc from "./pages/HiveBuddy/HiveBuddyDesc";
import Login from "./pages/Login/Login";
import {useState} from "react";
import HiveId from "./pages/Login/HiveId";
import Process from "./pages/Process/Process";
import Footer from "./components/Footer/Footer";
import Break from "./pages/Break/Break";
import Sensors from "./pages/Sensors/Sensors";
import {Divider} from "@mui/material";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <Navbar/>
                    <HiveBuddy/>
                    <HiveBuddyDesc/>
                    <Team/>
                    <Divider/>
                    <Process/>
                    <Login/>
                    <Footer/>
                </>
            }/>
            <Route path='/' element={<HiveBuddy/>}/>
            <Route path='/login/:hiveId/:pageId' element={<Overview/>}/>
            <Route path='/HiveId' element={<HiveId/>}/>
            <Route path='/sensor/*' element={<Sensors/>}/>
        </Routes>
    );
}

export default App;
