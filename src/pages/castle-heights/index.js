import React from "react";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import GallerySection from "@/components/GallerySection/GallerySection";
import MainFooter from "@/components/Footer/Footer";
import Banner from "@/components/CastleHeights/Banner";
// import Video from "@/components/CastleHeights/Video";
// import Details from "@/components/CastleHeights/Details";
// import Intro from "@/components/CastleHeights/Intro";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import WhatOffered from "@/components/CastleHeights/WhatOffered";
import SiteDevelopment from "@/components/CastleHeights/SiteDevelopment";
import Amenities from "@/components/CastleHeights/Amenities";
import LocationAndProximity from "@/components/CastleHeights/LocationAndProximity";
import DownloadBrochure from "@/components/CastleHeights/DownloadBrochure";
// import PaymentPlan from "@/components/CastleHeights/PaymentPlan";

const CastleHeights = () => {
  return (
    <Layout pageTitle=" | Castle Heights">
      <Style />
      <Header />
      <MobileMenu />
      <SearchPopup />
      <Banner
        title="Castle Heights"
        tagLine="crown jewl of the-walk, downtown islamabad."
      />
      <WhatOffered />
      <SiteDevelopment />
      <Amenities />
      <LocationAndProximity />
      <DownloadBrochure />
      {/* <Intro /> */}
      {/* <PaymentPlan showTitle={false} isMore /> */}
      {/* <Details /> */}
      {/* <Video /> */}
      <GallerySection similar />
      <MainFooter />
    </Layout>
  );
};

export default CastleHeights;
