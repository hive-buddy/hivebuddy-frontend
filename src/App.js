import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HiveBuddy from "./pages/HiveBuddy/HiveBuddy";
import Overview from './pages/Overview';
import Team from "./pages/Team/Team";
import HiveBuddyDesc from "./pages/HiveBuddy/HiveBuddyDesc";
import Login from "./pages/Login/Login";
import Strengths from "./pages/Strengths/Strengths";

function App() {
    return (
        <div className="App">
            <Navbar/>
            {/*${router.pathname === "/data"?*/}
            <HiveBuddy/>
            <HiveBuddyDesc/>
            {/*:*/}
            {/*<HiveBuddy/>*/}
            <Team/>
            {/*<Strengths/>*/}
            {/*}*/}
            {/* <Process/>*/}
            <Overview/>
            <Login/>

        </div>
    );
}

export default App;
