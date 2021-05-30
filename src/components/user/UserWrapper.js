import React from "react";
import styled, { css } from "styled-components";

const UserWrapper = ({ children, className, content }) => {
  return (
    <WrapperStyle className={className} content={content}>
      {children}
    </WrapperStyle>
  );
};

const pseudoElement = css`
  &::before {
    content: "${(props) => props.content || ""}";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
`;
const WrapperStyle = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  padding: 0.5rem 1rem;
  min-width: 270px;
  width: 100%;

  ${(props) => (props.content ? pseudoElement : "")}
`;

export default UserWrapper;
