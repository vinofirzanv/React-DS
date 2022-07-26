import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Download from './components/Download';
import Nitro from './components/Nitro';
import Header from './components/Header';
import Safety from './components/Safety';
import Header2 from './components/Header2';
import Support from './components/Support';
import Header3 from './components/Header3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Nav></Nav> */}
 
    <App /> 
    {/* <Header></Header>
  <Header3></Header3> */}
  {/* <Support></Support> */}
    {/* <Download></Download> */}
    {/* <Nitro></Nitro> */}
    {/* <Safety></Safety> */}
  {/* <Footer></Footer> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
