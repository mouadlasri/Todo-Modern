import logo from "./logo.svg";
import React from "react";
import "./App.css";

import { Home } from "./components/Landing/Home";
import { TaskProvider } from "./context/TaskContext";
import { TopNavbar } from "./components/TopNavbar/TopNavbar";
import { SideNavbar } from "./components/SideNavbar/SideNavbar";
import { Outlet } from "react-router-dom";

function App() {
  const styles = {
    homeContainer: {
      marginLeft: "24px",
      marginRight: "24px",
      height: "100%",
      paddingBottom: "48px",
    },
    testContainerBorder: {
      border: "2px solid green",
    },
  };

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
              <div style={styles.homeContainer} className="flex flex-col flex-1">
                {/* Outlet where the element component in router will display */}
                <Outlet />

                {/* TODO : Replaced with Router */}
                {/* <Home /> */}
              </div>
            </div>
          </div>
        </div>
      </TaskProvider>
    </div>
  );
}

export default App;
