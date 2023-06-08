import Planet from "./components/Planet";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "./data/data.json";

import Header from "./components/Header";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleScreenChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addListener(handleScreenChange);

    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  }, []);
  return (
    <div className=" min-h-screen bg-[url('assets/background-stars.svg')] bg-space">
      <Header isSmallScreen={isSmallScreen} />

      <Routes>
        <Route
          path="/"
          element={<Planet isSmallScreen={isSmallScreen} planet={data[2]} />}
        />
        {data.map((planet, index) => {
          return (
            <Route
              path={planet.name}
              element={<Planet planet={planet} isSmallScreen={isSmallScreen} />}
              key={planet.name}
              index={index === 0 ? true : undefined}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
