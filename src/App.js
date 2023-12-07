import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [setLightMode, setDarkMode] = useState("light");
  const [toggleName, setToggleName] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    console.log("alert has been showed");
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const [btn_Color, btn_Color_Set] = useState("primary");

  const toggleMode = () => {
    // console.log('button pressed',setLightMode)
    if (setLightMode === "light") {
      setDarkMode("dark");
      setToggleName("Enable Light Mode");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      showAlert("success", "Dark Mode has been enabled");
      btn_Color_Set("dark");
    } else {
      setDarkMode("light");
      setToggleName("Enable Dark Mode");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode has been enabled");
      btn_Color_Set("primary");
    }
  };

  return (
    <>
      <Navbar
        modeType={setLightMode}
        toggleButton={toggleMode}
        toggleIconName={toggleName}
      />
      <Alert alerts={alert} />
      {/* <Router> */}
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter your text here" btnMode={btn_Color} />}/>
          <Route exact path="/about" element={<About />}/>
        </Routes>
    </>
  );
}

export default App;
