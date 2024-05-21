import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Banner from "@/components/Index/Banner";
import CEO from "@/components/Index/CEO";
import Introduction from "@/components/Index/Introduction";
import Opportunities from "@/components/Index/Opportunities";
import Layout from "@/components/Layout/Layout";
import { useEffect } from "react";
// import HearUsOut from "@/components/Index/HearUsOut";
import Footer from "@/components/Footer/Footer";
import Awards from "@/components/Index/Awards";
// import SponsorsSection from "@/components/Index/SponsorsSection";
import Team from "@/components/Index/Team";
import Style from "@/components/Reuseable/Style";

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
      {/* <SponsorsSection /> */}
      {/* <HearUsOut /> */}
      <Footer normalPadding={true} />
    </Layout>
  );
};

export default Home;
