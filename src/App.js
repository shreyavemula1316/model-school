import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './components/Home/Navbar'; // Adjust the import path if necessary
import Footer from './pages/Footer'; // Adjust the import path if necessary
import ScrollTop from './pages/ScrollTop'; // Adjust the import path if necessary

function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Outlet /> {/* This is where the routed content will be rendered */}
      </main>
      <Footer />
    </>
  );
}

export default App;
