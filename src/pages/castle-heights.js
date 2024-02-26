import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import GallerySection from "@/components/GallerySection/GallerySection";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/CastleHeights/Banner";
// import Video from "@/components/CastleHeights/Video";
// import Details from "@/components/CastleHeights/Details";
import Intro from "@/components/CastleHeights/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/CastleHeights/PaymentPlan";

const CastleHeights = () => {
  return (
    <Layout pageTitle=" | Castle Heights">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Castle Heights" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      {/* <Details /> */}
      {/* <Video /> */}
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default CastleHeights;
