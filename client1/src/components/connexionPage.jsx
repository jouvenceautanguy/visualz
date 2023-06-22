import React from "react";
import Connexion from "./Connexion/Connexion.jsx";
import Footer from "./Footer/Footer.jsx";
import HeaderMain from "./MainPage/headerMain/headerMainBlack.jsx";
import './pagesStyle/connexionPage.css'

function connexionPage() {
  return (
    <div className="connexionPage-container">
      <HeaderMain />
      <Connexion />
      <Footer />
    </div>
  );
}

export default connexionPage;
