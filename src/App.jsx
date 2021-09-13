import React, { useEffect } from "react";
import "./tailwind.css";
import "./App.css";

// redux
import { useDispatch } from 'react-redux';
import { setupCounter } from "./features/Home/homeSlice";

// components
import TheNavbar from "./features/shared/TheNavbar";
import TheFooter from "./features/shared/TheFooter";
import Home from "./screens/Home";
import About from "./screens/About";

import { Routes, Route } from "react-router-dom";

function App() {
    // const dispatch = useDispatch();
    const initialCount = 10;
    const dispatch = useDispatch();

    useEffect(() => {
      // dispatch initial action
      dispatch(setupCounter(initialCount));
    }, []);

    return (
        <div className="App">
            <TheNavbar />
            
            <main className="container mx-auto">
              {/* render routes inside main container */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about/*" element={<About />} />
              </Routes>
            </main>
            
            <TheFooter />
        </div>
    );
}

export default App;
