import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useGithubContext } from "../context/context";
import { useHistory, useLocation } from "react-router";

const Search = ({ className }) => {
  const inputRef = React.useRef();

  const { requestRate, getGithubUser, isLoading } = useGithubContext();
  const { pathname } = useLocation();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = inputRef.current.value;
    if (!user) return;
    getGithubUser(user); // async
    inputRef.current.value = "";
    if (pathname !== "/dashboard") {
      console.log("dashboard pushed");
      history.push("/dashboard");
    }
  };

  return (
    <Wrapper className="section-center">
      <FormControlStyle className={className} action="" onSubmit={handleSubmit}>
        <MdSearch></MdSearch>
        <input type="text" ref={inputRef} placeholder="enter github user" />
        {requestRate > 0 && !isLoading && <button type="submit">search</button>}
      </FormControlStyle>
    </Wrapper>
  );
};

const FormControlStyle = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.5rem;
  align-items: center;

  background: var(--clr-white);

  border-radius: 10px;
  border: ${(props) => props.border || "none"};
  padding: 0.5rem;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1rem;

  input {
    border-color: transparent;
    outline-color: var(--clr-grey-9);
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

export default Search;
