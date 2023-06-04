import Planet from "./Planet";
import { Routes, Route } from "react-router-dom";

import data from "./data/data.json";

import Header from "./components/Header";

function App() {
  return (
    <div className=" min-h-screen bg-[url('./assets/background-stars.svg')] bg-space">
      <Header />

      <Routes>
        {data.map((planet) => {
          return (
            <Route
              path={planet.name}
              element={<Planet planet={planet} />}
              key={planet.name}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
