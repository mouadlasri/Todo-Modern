import logo from "./logo.svg";
import "./App.css";

import { Home } from "./components/Landing/Home";
import { TaskProvider } from "./context/TaskContext";

function App() {
  const styles = {
    container: {
      height: "100vh",
    },
    navBar: {
      border: "2px solid black",
    },
    homeContainer: {
      border: "2px solid red",
    },
  };

  return (
    <div className="App">
      <h1></h1>
      <TaskProvider>
        {/* Left Navigation Bar */}
        <div className="grid grid-cols-12" style={styles.container}>
          <div className="col-span-3" style={styles.navBar}>
            <h1 className="text-3xl font-bold underline">Navbar</h1>
          </div>
          <div className="col-span-9" style={styles.homeContainer}>
            {/* Right Home Component (main component) */}
            {/* TODO : Replace Later with Router */}
            <Home />
          </div>
        </div>
      </TaskProvider>
    </div>
  );
}

export default App;
