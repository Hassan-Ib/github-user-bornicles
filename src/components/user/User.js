import React from "react";
import styled from "styled-components";
import Card from "./UserCard";
import Followers from "./UserFollowers";
const User = () => {
  return (
    <section className="section">
      <Wrapper>
        <Card></Card>
        <Followers></Followers>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 1rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default User;
