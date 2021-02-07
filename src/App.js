import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import MainBody from "./components/MainBody/MainBody";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navigation />
      <MainBody />
      <Footer />
    </>
  );
};

export default App;
