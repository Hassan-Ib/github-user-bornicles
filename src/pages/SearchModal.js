import React from "react";
import styled from "styled-components";
import { Search as SearchInput } from "../components";
import githubSvg from "../images/github.svg";

const SearchModalWrapper = styled.section`
  position: relative;
  display: grid;
  /* place-content: center; */
  place-items: center;
`;
const Modal = styled.div`
  display: grid;
  place-items: center;
  img {
    margin-bottom: 3rem;
    height: 40vh;
  }
  svg {
    color: black;
  }
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--clr-white);
  position: fixed;
  z-index: -1;
`;
const SearchModal = () => {
  return (
    <SearchModalWrapper>
      <Overlay></Overlay>
      <Modal>
        <img src={githubSvg} alt="github user" />
        <h4>search github user</h4>
        <SearchInput border={"2px solid black"} />
      </Modal>
    </SearchModalWrapper>
  );
};

export default SearchModal;
