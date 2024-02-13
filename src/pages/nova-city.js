import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/NovaCity/Banner";
import GallerySection from "@/components/NovaCity/GallerySection";
import Video from "@/components/NovaCity/Video";
import Details from "@/components/NovaCity/Details";
import Intro from "@/components/NovaCity/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/NovaCity/PaymentPlan";

const NovaCity = () => {
  return (
    <Layout pageTitle=" | Nova City">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Nova City" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default NovaCity;
