import Layout from "components/layout/Layout";
import Banner from "module/home/Banner";
import HomeFeature from "module/home/HomeFeature";
import HomeFooter from "module/home/HomeFooter";
import HomeNewest from "module/home/HomeNewest";

import React from "react";
import styled from "styled-components";

const HomeStyles = styled.div``;
const Home = () => {
  return (
    <HomeStyles>
      <Layout>
        <Banner></Banner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
        <HomeFooter></HomeFooter>
      </Layout>
    </HomeStyles>
  );
};

export default Home;
