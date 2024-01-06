import React from "react";
import TypeOfFood from "../../UI/TypeOfFood";
import AboutFood from "../../UI/AboutFood";
import BannerStyle from "../../UI/BannerStyle";
import Card from "../../UI/Card";
import Language from "../../UI/Language";
import SubBanner from "../../UI/SubBanner";


const Home = () => {
  return (
    <>
        <SubBanner />
        <TypeOfFood />
      
      <AboutFood />
      <BannerStyle />
      <Card />
      <Language />
    </>
  )
}

export default Home;
