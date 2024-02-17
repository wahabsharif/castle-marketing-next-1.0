import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/FaisalHills/Banner";
import GallerySection from "@/components/GallerySection/GallerySection";
import Video from "@/components/FaisalHills/Video";
import Details from "@/components/FaisalHills/Details";
import Intro from "@/components/FaisalHills/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
// import PaymentPlan from "@/components/FaisalHills/PaymentPlan";

const FaisalHills = () => {
  return (
    <Layout pageTitle=" | Faisal Hills">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Faisal Hills" />
      <Intro />
      {/* <PaymentPlan showTitle={false} isMore /> */}
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default FaisalHills;
