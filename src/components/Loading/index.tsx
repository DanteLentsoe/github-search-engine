import React from "react";
import { ImgContainer } from "./styles";
import spinner from "../../spinner.gif";

const Loading = () => (
  <ImgContainer>
    <img src={spinner} alt="loading" />
  </ImgContainer>
);

export default Loading;
