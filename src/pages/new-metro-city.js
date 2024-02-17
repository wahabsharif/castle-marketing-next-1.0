import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/NewMetroCity/Banner";
import GallerySection from "@/components/GallerySection/GallerySection";
import Video from "@/components/NewMetroCity/Video";
import Details from "@/components/NewMetroCity/Details";
import Intro from "@/components/NewMetroCity/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import PaymentPlan from "@/components/NewMetroCity/PaymentPlan";

const NewMetroCity = () => {
  return (
    <Layout pageTitle=" | New Metro City">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner title="New Metro City" />
      <Intro />
      <PaymentPlan showTitle={false} isMore />
      <Details />
      <Video />
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default NewMetroCity;
