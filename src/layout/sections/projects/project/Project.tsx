import React from "react";
import styled from "styled-components";



type ProjectPropsType = {
  title?: string
  text?: string
  src?: string
}

export const Project = (props: ProjectPropsType) => {
  return(
    <StyledProject>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Link href={"#"}>Javascript</Link>
      <Link href={"#"}>PostgreSQL</Link>
      <Link href={"#"}>React</Link>
      <Link href={"#"}>Redux</Link>
      <Text>{props.text}</Text>
    </StyledProject>
  )
}

const StyledProject = styled.div`
  background-color: #0a3fc5;
  max-width: 522px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 388px;
  object-fit: cover;
`

const Title = styled.h3`

`

const Link = styled.a`
  color: #a8e812;
`

const Text = styled.p`

`