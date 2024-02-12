import React, { useEffect } from "react";
import CEO from "@/components/Index/CEO";
import Introduction from "@/components/Index/Introduction";
import Banner from "@/components/Index/Banner";
import Opportunities from "@/components/Index/Opportunities";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import HearUsOut from "@/components/Index/HearUsOut";
import Style from "@/components/Reuseable/Style";
import SponsorsSection from "@/components/Index/SponsorsSection";
import Footer from "@/components/Footer/Footer";
import Team from "@/components/Index/Team";
import Awards from "@/components/Index/Awards";

const Home = () => {
  useEffect(() => {
    document.body.className = "body-dark";

    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <Layout pageTitle="">
      <Style />
      <Header />
      <MobileMenu />
      <Banner />
      <Introduction />
      <CEO />
      <Team />
      <Opportunities />
      <Awards />
      <SponsorsSection />
      <HearUsOut />
      <Footer normalPadding={true} />
    </Layout>
  );
};

export default Home;
