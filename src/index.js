import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
 
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './page/App';
import About from './page/About';

import Appbar from './components/Appbar';
import Footer from './components/Footer';
 


const router = createBrowserRouter([
  {
    path: '/',
    element : (
      <>
        <Appbar />
        <App />
        <Footer />
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <Appbar />
        <About />
        <Footer />
      </>
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
