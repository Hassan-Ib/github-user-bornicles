import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gitImage from "../images/github.svg";
import { useGithubContext } from "../context/context";
const Error = () => {
  const { error } = useGithubContext();

  return (
    <StyledMain>
      <div>
        <img src={gitImage} alt="github logo" />
        <p>
          <span>uh,oh!</span>
          {error.msg === "Network Error"
            ? `there is ${error.msg} check your connection and try again :)`
            : `There was an error trying to fetch your requested user. Please check your input and try again.`}
        </p>
        <Link to="/" type="button">
          Go to home page
        </Link>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: grid;
  place-items: center;
  height: 95vh;
  padding: 0 0.2rem;
  div {
    max-width: 30rem;
    display: grid;
    place-items: center;
  }

  img {
    width: 200px;
    height: 200px;
  }

  p {
    line-height: 1.4;
    text-align: center;
    span {
      color: var(--clr-black);
      display: block;
      font-weight: 600;
      font-size: 4rem;
    }
  }

  a {
    outline: var(--clr-primary-4);
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.4rem 1rem;
    color: var(--clr-white);
    background-color: var(--clr-black);
  }
`;

export default Error;
