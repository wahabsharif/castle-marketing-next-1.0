import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/BlueWorldCity/Banner";
import GallerySection from "@/components/GallerySection/GallerySection";
import Video from "@/components/BlueWorldCity/Video";
import Details from "@/components/BlueWorldCity/Details";
import Intro from "@/components/BlueWorldCity/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/BlueWorldCity/PaymentPlan";

const BlueWorldCity = () => {
  return (
    <Layout pageTitle=" | Blue World City">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Blue World City" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default BlueWorldCity;
