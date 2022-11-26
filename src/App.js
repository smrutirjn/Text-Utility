import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#292c33";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container">
        <Routes>
          <Route path="/about" element={<About />} >
          </Route>
          <Route path="/Text-Utility" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />}>   
          </Route>
        </Routes>

{/* <About/>   */}
</div>
</Router>
    </>
    );
}

export default App;
