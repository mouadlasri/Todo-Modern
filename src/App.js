import logo from "./logo.svg";
import "./App.css";

import { Home } from "./components/Landing/Home";
import { TaskProvider } from "./context/TaskContext";
import { TopNavbar } from "./components/TopNavbar/TopNavbar";
import { SideNavbar } from "./components/SideNavbar/SideNavbar";

function App() {
  return (
    <div className="App">
      <h1></h1>
      <TaskProvider>
        <div className="app-container">
          {/* Top navigation bar */}
          <div>
            <TopNavbar />
          </div>

          {/* APP CONTAINER */}
          <div className="main-screen-container">
            {/* Left Screen/Column */}
            <div className="left-screen-navbar">
              <SideNavbar />
            </div>

            {/* Right Screen/Column - Home Component*/}
            <div className="right-screen-home-container">
              {/* TODO : Replace Later with Router */}
              <Home />
            </div>
          </div>
        </div>
      </TaskProvider>
    </div>
  );
}

export default App;
