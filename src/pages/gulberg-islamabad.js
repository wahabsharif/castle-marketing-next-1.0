import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/GulbergIslamabad/Banner";
import GallerySection from "@/components/GulbergIslamabad/GallerySection";
import Video from "@/components/GulbergIslamabad/Video";
import Details from "@/components/GulbergIslamabad/Details";
import Intro from "@/components/GulbergIslamabad/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/GulbergIslamabad/PaymentPlan";

const GulbergIslamabad = () => {
  return (
    <Layout pageTitle=" | Gulberg Islamabad">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Gulberg Islamabad" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default GulbergIslamabad;
