import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (

    <StyledHeader>
      <Navigation>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </Navigation>
      <Link href="#">Contact</Link>
    </StyledHeader>

  )
}

const StyledHeader = styled.header`
  background-color: #37c224;
  display:flex;
  align-items: center;
  justify-content:space-between;
  gap: 10px;

`

const Navigation = styled.nav`
    width:100%;
    ul{

      display:flex;
      justify-content:space-between;
      list-style:none ;
    }
  
`

const Link = styled.a`

`