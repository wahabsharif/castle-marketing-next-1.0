import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/SilverCity/Banner";
import GallerySection from "@/components/SilverCity/GallerySection";
import Video from "@/components/SilverCity/Video";
import Details from "@/components/SilverCity/Details";
import Intro from "@/components/SilverCity/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/SilverCity/PaymentPlan";

const SilverCity = () => {
  return (
    <Layout pageTitle=" | Silver City">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Silver City" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default SilverCity;
