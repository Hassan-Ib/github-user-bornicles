import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useGithubContext } from "../context/context";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  // console.log(isAuthenticated, user, isLoading);
  const { requestRate } = useGithubContext();
  const isUser = isAuthenticated && user;
  console.log(window.location.origin);
  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h5>
          welcome, <strong>{user.name.toUpperCase()}</strong>
        </h5>
      )}
      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
      <h4>Request Rate : {requestRate ? requestRate : 60} / 60</h4>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  /* margin-bottom: 1rem; */
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h5 {
    margin-bottom: 0;
    font-size: 0.85rem;
  }
  h4 {
    font-size: 1rem;
    grid-column: 1/4;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 0.85rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  @media (min-width: 610px) {
    grid-template-columns: auto auto 100px auto;
    button,
    h4 {
      font-size: 1.2rem;
    }
    h5 {
      font-size: 1rem;
    }
  }
`;

export default Navbar;
