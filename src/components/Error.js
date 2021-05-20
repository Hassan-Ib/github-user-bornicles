import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gitImage from "../images/github.svg";
import { useGithubContext } from "../context/context";
const Error = () => {
  const { error } = useGithubContext();
  return (
    <StyledSection>
      <img src={gitImage} alt="githun logo" />
      <p>{error.msg}</p>
      <Link to="/" type="button">
        back home
      </Link>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: grid;
  place-items: center;
  height: 40vh;
  div {
    text-align: center;
  }

  img {
    width: 200px;
    height: 200px;
  }

  a {
    outline: var(--clr-primary-4);
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
`;

export default Error;
