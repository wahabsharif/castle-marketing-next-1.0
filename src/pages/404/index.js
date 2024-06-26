import Banner from "@/components/404/Banner";
import ErrorSection from "@/components/404/ErrorSection";
import HeaderOne from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const NotFound = () => {
  return (
    <Layout pageTitle=" | Page Not Found">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Page Not Found" />
      <ErrorSection />
      <MainFooter />
    </Layout>
  );
};

export default NotFound;
