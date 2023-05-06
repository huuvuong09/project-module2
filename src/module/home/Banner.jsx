import { Button } from "components/button";
import React from "react";
import styled from "styled-components";
const BannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  margin-bottom: 60px;
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
      max-width: 600px;
      color: white;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
  }
`;

const Banner = () => {
  return (
    <BannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Simple Blog</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              assumenda cum? Animi facilis accusantium dolorum culpa ut, vero,
              harum molestias, natus provident quod consequuntur dignissimos
              necessitatibus eveniet sapiente eaque recusandae?
            </p>
            <Button to="/sign-up" simple="secondary" className="banner-button">
              Get started
            </Button>
          </div>
          <div className="banner-image">
            <img src="img-banner.png" alt="" />
          </div>
        </div>
      </div>
    </BannerStyles>
  );
};

export default Banner;
