import React from "react";
import styled from "styled-components";
import { Search } from "../components";
import githubSvg from "../images/github.svg";

const SearchModalWrapper = styled.section`
  position: relative;
  display: grid;
  place-content: center;
`;
const Modal = styled.div`
  img {
    margin-bottom: 2rem;
    height: 40vh;
  }
  svg {
    color: black;
  }
`;
const SearchInput = styled(Search)`
  form {
    border: 2px solid black;
    background-color: blue;
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
        <SearchInput />
      </Modal>
    </SearchModalWrapper>
  );
};

export default SearchModal;
