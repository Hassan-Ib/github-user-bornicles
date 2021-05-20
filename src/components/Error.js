import React from "react";
import styled from "styled-components";
import gitImage from "../images/github.svg";
import { useGithubContext } from "../context/context";
const Error = () => {
  const { error } = useGithubContext();
  console.log({ error });
  return (
    <StyledSection>
      <img src={gitImage} alt="githun logo" />
      <p>{error.msg}</p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;

  img {
    width: 200px;
    height: 200px;
  }
`;

export default Error;
