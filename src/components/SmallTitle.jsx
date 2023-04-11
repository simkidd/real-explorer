import React from "react";
import styled from "styled-components";

const SmallTitle = ({ title }) => {
  return <Title className="small-title">{title}</Title>;
};

export default SmallTitle;

const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #b3b1b7;
  
`
