// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AboutTGMS from './components/DropDown/AboutTGMS'; // Import the new page component
import Vision from './components/DropDown/Vision'; // Import the Vision page component
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Academics from './pages/Academics';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import Students from './pages/Students';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about-tgms",
        element: <AboutTGMS />
      },
      {
        path: "/vision",
        element: <Vision /> // Add the new route here
      },
      // {
      //   path: "/gallery",
      //   element: <Gallery />
      // },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/academics",
        element: <Academics />
      },
      {
        path: "/faculty",
        element: <Faculty />
      },
      {
        path: "/admissions",
        element: <Admissions />
      },
      {
        path: "/student-activities",
        element: <Students />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
