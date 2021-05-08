import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useGithubContext } from "../context/context";
const Search = () => {
  const inputRef = React.useRef();
  const {
    requestRate,
    error,
    searchGithubUser,
    isLoading,
  } = useGithubContext();
  console.warn();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = inputRef.current.value;
    if (!user) return;
    searchGithubUser(user);
    inputRef.current.value = "";
  };
  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <FormControl action="" onSubmit={handleSubmit}>
          <MdSearch></MdSearch>
          <input type="text" ref={inputRef} placeholder="enter github user" />
          {requestRate > 0 && !isLoading && (
            <button type="submit">search</button>
          )}
        </FormControl>
      </Wrapper>
    </section>
  );
};

const FormControl = styled.form`
  background: var(--clr-white);
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.5rem;
  border-radius: 10px;
  padding: 0.5rem;
  width: 70%;
  margin: 0 auto;
  input {
    border-color: transparent;
    outline-color: var(--clr-grey-10);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-3);
    padding: 0.25rem 0.5rem;
  }
  input::placeholder {
    color: var(--clr-grey-3);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
  button {
    border-radius: 5px;
    border-color: var(--clr-black);
    padding: 0.4rem 0.8rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: var(--clr-black);
    color: var(--clr-white);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: var(--clr-white);
      color: var(--clr-black);
    }
  }

  svg {
    color: var(--clr-black);
  }
  input,
  button,
  svg {
    font-size: 1.3rem;
  }
  @media (max-width: 698px) {
    width: 100%;
    button,
    input,
    svg {
      font-size: 0.85rem;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
  }
`;

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
