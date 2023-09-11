import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#09325a"
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode"
      // setInterval(() =>{
      //   document.title = "TextUtils is Amazing Mode"
      // },2000)
      // setInterval(() =>{
      //   document.title = "Install TextUtils Now"
      // },1500)
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      {/* <Navbar title="Amazon" about="About Us"/> */}
            {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}

          {/* /users -->  Component1
              /users/home -->  Component2 */}

          <Routes>
            <Route path="/"> 
              {/* index means go to the same path i.e. =>  / */}
              <Route exact index element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Space" mode={mode} />} />
              {/* <Route exact index element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} */}
              <Route exact path='about' element={<About mode={mode}/>} />  
            </Route>
          </Routes>
        </div>
      </Router>

     {/* <TextForm heading="King Text" /> */}
    </>
  );
}

export default App;




