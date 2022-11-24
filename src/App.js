import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#292c33";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container">
<TextForm heading="Enter the text to analyze" mode={mode} />
{/* <About/>   */}
</div>
    </>
    );
}

export default App;
