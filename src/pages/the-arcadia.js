import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/TheArcadia/Banner";
import GallerySection from "@/components/GallerySection/GallerySection";
import Video from "@/components/TheArcadia/Video";
import Details from "@/components/TheArcadia/Details";
import Intro from "@/components/TheArcadia/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/TheArcadia/PaymentPlan";

const TheArcadia = () => {
  return (
    <Layout pageTitle=" | The Arcadia">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="The Arcadia" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default TheArcadia;
