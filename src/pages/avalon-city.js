import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/AvalonCity/Banner";
import GallerySection from "@/components/GallerySection/GallerySection";
import Video from "@/components/AvalonCity/Video";
import Details from "@/components/AvalonCity/Details";
import Intro from "@/components/AvalonCity/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/AvalonCity/PaymentPlan";

const AvalonCity = () => {
  return (
    <Layout pageTitle=" | Avalon City">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Avalon City" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default AvalonCity;
