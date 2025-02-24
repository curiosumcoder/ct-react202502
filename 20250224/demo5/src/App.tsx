import { useState } from "react";
import "./App.css";
import CurrencyCurrent from "./components/CurrencyCurrent";
import HooksTest from "./components/hooks/HooksTest";
import CompositionTest from "./components/composition/CompositionTest";
import HighOrderTest from "./components/highOrder/HighOrderTest";
import { MonedaContext, monedas } from "./MonedaContext";


function App() {
  const [moneda, setMoneda] = useState(monedas.colon);
  return (
    <>
      <MonedaContext.Provider value={{moneda, setMoneda}}>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              App
            </a>
            <div className="navbar-text">
              {`${moneda.signo} - ${moneda.nombre}`}
              <select
                className="form-control-sm"
                onChange={(e) => {
                  if (e.target.value === "1") {
                    setMoneda(monedas.colon);
                  } else {
                    setMoneda(monedas.dolar);
                  }
                }}>
                <option value="1">₡ - Colón </option>
                <option value="2"> $- Dólar</option>
              </select>
            </div>
          </div>
        </nav>
        <div className="container" style={{ marginTop: "1em" }}>
          {/* <CurrencyCurrent /> */}
          {/* <HooksTest /> */}
          {/* <CompositionTest /> */}
          <HighOrderTest/>
        </div>
      </MonedaContext.Provider>
    </>
  );
}

export default App;
