import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
function App() {
  return (<>
   <div className="mp"><h1 id="h1"><u>My</u> <u>project</u></h1></div>
   
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Layout />}>
     <Route path="Home" element={<Home />} />
     <Route path="contact" element={<Contact />} />
     <Route path="about" element={<About />} />
     </Route>
     </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
