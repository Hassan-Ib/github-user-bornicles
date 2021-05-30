import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useGithubContext } from "../context/context";
import { useHistory, useLocation } from "react-router";
import { useMediaQuery } from "react-responsive";

const Search = ({ className }) => {
  const maxWidth698 = useMediaQuery({ maxWidth: 698 });
  // console.log(media);

  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });

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
      history.push("/dashboard");
    }
  };

  return (
    <FormControlStyle className={className} action="" onSubmit={handleSubmit}>
      {!maxWidth698 && <MdSearch></MdSearch>}
      <input type="text" ref={inputRef} placeholder="enter github user" />
      {requestRate > 0 && !isLoading && (
        <button type="submit">{maxWidth698 ? <MdSearch /> : "search"}</button>
      )}
    </FormControlStyle>
  );
};

const FormControlStyle = styled.form`
  max-width: 45rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.5rem;
  align-items: center;

  background: var(--clr-white);

  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0 auto;
  margin-bottom: 1rem;

  input {
    border-color: transparent;
    outline-color: var(--clr-grey-9);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-3);
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
    grid-template-columns: 1fr auto;

    button,
    input {
      font-size: 1rem;
    }
    input {
      font-weight: 500;
      padding: 0.2rem;
      &::placeholder {
        opacity: 50%;
      }
    }

    button {
      padding: 0;
      background: transparent;
      border: 2px solid transparent;
      &:hover {
        background: transparent;
        border-color: var(--clr-black);
      }
      &:focus {
        background: transparent;
        outline-color: var(--clr-black);
      }
    }
    svg {
      color: var(--clr-black);
      font-size: 1.5rem;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  border: 2px solid black;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
  }
`;

export default Search;
