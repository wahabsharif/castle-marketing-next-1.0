import Banner from "@/components/Contact/Banner";
import ContactSection from "@/components/Contact/ContactSection";
import HeaderOne from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/Footer/Footer";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle=" - Contact">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <Banner title="Contact" />
      <ContactSection map form />
      <MainFooter />
    </Layout>
  );
};

export default Contact;
