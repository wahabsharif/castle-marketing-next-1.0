import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/FaisalTown/Banner";
import GallerySection from "@/components/GallerySection/GallerySection";
import Video from "@/components/FaisalTown/Video";
import Details from "@/components/FaisalTown/Details";
import Intro from "@/components/FaisalTown/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/FaisalTown/PaymentPlan";

const FaisalTown = () => {
  return (
    <Layout pageTitle=" | Faisal Town">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Faisal Town" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default FaisalTown;
