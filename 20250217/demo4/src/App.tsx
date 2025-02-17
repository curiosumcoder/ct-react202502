import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="container" style={{marginTop: "2em"}}>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
