import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
  return(
    <StyledFooter>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon height={"37px"} width={"37px"} viewBox = {"0 0 37 37"} iconId={"gmail"}/>
            <span>gmail</span>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon height={"37px"} width={"37px"} viewBox = {"0 0 37 37"} iconId={"linkedin"}/>
            <span>linkedin</span>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon height={"37px"} width={"37px"} viewBox = {"0 0 37 37"} iconId={"github"}/>
            <span>github</span>
          </SocialLink>
        </SocialItem>
      </SocialList>
      <StyledFooterSubTitle>Projects</StyledFooterSubTitle>
      <StyledFooterSubTitle>Contact</StyledFooterSubTitle>
      <Copyright>WEB DEVELOPER 2021</Copyright>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
background-color: #881d1d;
min-height:30vh;
`

const SocialList = styled.ul`

`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const StyledFooterSubTitle = styled.h3`

`
const Copyright = styled.small`
`
