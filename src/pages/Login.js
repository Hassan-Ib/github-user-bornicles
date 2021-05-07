import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/github.svg";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>github user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          login / signup
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    height: 40vh;
  }
  h1 {
    margin-bottom: 1.5rem;
    color: var(--clr-black);
  }
  .btn {
    color: var(--clr-white);
    background-color: var(--clr-black);
    border: 2px solid transparent;
    &:hover {
      border: 2px solid var(--clr-black);
      color: var(--clr-black);
      background-color: var(--clr-white);
    }
  }
`;
export default Login;
