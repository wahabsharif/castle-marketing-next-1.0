import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/ElanzaMallAndResidencia/Banner";
import GallerySection from "@/components/GallerySection/GallerySection";
// import Video from "@/components/ElanzaMallAndResidencia/Video";
import Details from "@/components/ElanzaMallAndResidencia/Details";
import Intro from "@/components/ElanzaMallAndResidencia/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/ElanzaMallAndResidencia/PaymentPlan";

const ElanzaMallAndResidencia = () => {
  return (
    <Layout pageTitle=" | Elanza Mall & Residencia">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Elanza Mall & Residencia" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      {/* <Video /> */}
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default ElanzaMallAndResidencia;
