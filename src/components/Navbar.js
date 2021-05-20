import React from "react";
import styled from "styled-components";
import { useGithubContext } from "../context/context";
import githubLogo from "../images/github.svg";
const Navbar = () => {
  const { requestRate } = useGithubContext();
  return (
    <Wrapper>
      <img src={githubLogo} alt="github logo" />
      <h4>Request Rate : {requestRate ? requestRate : 60} / 60</h4>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 2rem;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  padding: 1.5rem;
  margin-bottom: 1rem;

  background: var(--clr-white);

  h4 {
    font-size: 1rem;
  }
  img {
    width: 40px !important;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  @media (min-width: 610px) {
    h4 {
      font-size: 1.2rem;
    }
  }
`;

export default Navbar;
