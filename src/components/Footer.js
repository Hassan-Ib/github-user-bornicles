import React from "react";
import styled from "styled-components";

const Footer = ({ className, children }) => {
  return (
    <FooterStyle className={className}>
      <p>
        -- &copy; made by Hassan Ibrahim, inspired by{" "}
        <cite>Search github user project</cite> by John Smilga from Youtube
        channel{" "}
        <a href="https://www.youtube.com/results?search_query=coding+addict">
          Codding Addict
        </a>{" "}
        --
      </p>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  letter-spacing: var(--spacing);

  p {
    font-size: 0.6rem;
  }

  a {
    border-bottom: 1px solid blue;
    cursor: pointer;
  }

  @media (min-width: 698px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export default Footer;
