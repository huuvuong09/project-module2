import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AuthenStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  .have-account {
    margin-bottom: 20px;
    font-size: 14px;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
`;

const Authen = ({ children }) => {
  return (
    <AuthenStyles>
      <div className="container">
        <div className="text-center">
          <NavLink to="/">
            <img
              srcSet="/simple-logo.png 2.5x"
              alt="simple-blog"
              className="logo"
            />
          </NavLink>
        </div>
        <h1 className="heading">Simple Blog</h1>
        {children}
      </div>
    </AuthenStyles>
  );
};

export default Authen;
