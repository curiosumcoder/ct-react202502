import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "2em" }}>
        <div
          id="overlay"
          className={navigation.state === "loading" ? "loading" : ""}
        >
          Processing ...
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
