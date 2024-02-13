import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/ParkViewCity/Banner";
import GallerySection from "@/components/ParkViewCity/GallerySection";
import Video from "@/components/ParkViewCity/Video";
import Details from "@/components/ParkViewCity/Details";
import Intro from "@/components/ParkViewCity/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/ParkViewCity/PaymentPlan";

const ParkViewCity = () => {
  return (
    <Layout pageTitle=" | Parkview City">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Parkview City" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default ParkViewCity;
