import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HiveBuddy from "./pages/HiveBuddy/HiveBuddy";
import Overview from './pages/Overview';
import Process from "./pages/Process/Process";
import Strengths from "./pages/Strengths/Strengths";
import Team from "./pages/Team/Team";
import HiveBuddyDesc from "./pages/HiveBuddy/HiveBuddyDesc";

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
        </div>
    );
}

export default App;
