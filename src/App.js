import './App.css';
import { Route, Routes } from "react-router-dom";
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
                    <Break />
                    {/* <Strengths /> */}
                     <Process />
                    <Login />
                    <Footer />
                </>
            } />
            <Route path='/login/*' element={<Overview />} />
            <Route path='/HiveId' element={<HiveId />} />
            {/*<Route path='login' element={<h1>Login Page Component</h1>} />*/}
        </Routes>
    );
}

export default App;
