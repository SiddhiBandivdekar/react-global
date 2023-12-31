import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesComponent from "./components/RoutesComponent";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`${darkTheme ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 dark:text-gray-200 bg-indigo-50 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RoutesComponent />
        <Footer />
      </div>
    </div>
  );
};

export default App;
