import React from "react";
import Connexion from "./Connexion/Connexion.jsx";
import Footer from "./Footer/Footer.jsx";
import HeaderMain from "./MainPage/headerMain/headerMain.jsx";

function connexionPage() {
  return (
    <div>
      <HeaderMain />
      <Connexion />
      <Footer />
    </div>
  );
}

export default connexionPage;
