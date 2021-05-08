import React from "react";
import styled from "styled-components";
import { Search as SearchInput } from "../components";
import githubSvg from "../images/github.svg";
import { Footer } from "../components";

const SearchModal = () => {
  return (
    <SearchModalWrapper>
      <Overlay></Overlay>
      <Modal>
        <img src={githubSvg} alt="github user" />
        <h4>search github user</h4>
        <SearchInput border={"2px solid black"} />
      </Modal>
      <SearchModalFooter />
    </SearchModalWrapper>
  );
};

const SearchModalFooter = styled(Footer)`
  display: grid;
  place-items: center;

  position: absolute;
  bottom: 1rem;

  padding: 0 1rem;
`;
const SearchModalWrapper = styled.section`
  display: grid;
  place-items: center;

  height: 100vh;

  position: relative;
`;
const Modal = styled.div`
  display: grid;
  place-items: center;
  img {
    margin-bottom: 2rem;
    height: 20vh;
  }
  svg {
    color: black;
  }
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--clr-white);
  position: fixed;
  z-index: -1;
`;
export default SearchModal;
