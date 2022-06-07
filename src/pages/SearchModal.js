import React from "react";
import styled from "styled-components";
import { Search } from "../components";
import githubSvg from "../images/github.svg";
import { Footer } from "../components";

const SearchModal = () => {
  return (
    <SearchModalWrapper>
      <Overlay></Overlay>
      <Modal>
        <img src={githubSvg} alt="github user" />
        <h4>search github user</h4>
        <SearchInput />
      </Modal>
      <SearchModalFooter />
    </SearchModalWrapper>
  );
};

const SearchModalWrapper = styled.section`
  display: grid;
  place-items: center;

  height: 95vh;

  position: relative;

  border: 1px solid red;
  /* try and error */
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--clr-white);
  position: fixed;
  z-index: -1;
`;

const SearchInput = styled(Search)`
  /* background-color: var(--clr-grey-9); */
  width: 100%;
`;

const Modal = styled.div`
  max-width: 50rem;
  width: 70%;
  padding: 1rem 0.5rem;
  text-align: center;
  img {
    margin-bottom: 2rem;
    height: 20vh;
  }
  svg {
    color: black;
  }

  @media screen and (max-width: 698px) {
    width: 95%;
  }
`;

const SearchModalFooter = styled(Footer)`
  display: grid;
  place-items: center;

  position: absolute;
  bottom: 0;

  padding: 0 1rem;
`;

export default SearchModal;
