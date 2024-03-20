import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/skill";

export const Skills = () => {
  return (
    <SectionStyled>
      <SectionTitle>Skills</SectionTitle>
      <StyledSkills>
        <Skill title={"javascript"} iconId={"codeSvg"} />
        <Skill title={"typescript"} iconId={"typescript"} />
        <Skill title={"mongo"} iconId={"mongo"} />
        <Skill title={"postgres"} iconId={"postgres"} />
        <Skill title={"jest"} iconId={"jest"} />
        <Skill title={"express"} iconId={"express"} />
        <Skill title={"nest"} iconId={"nest"} />
        <Skill title={"docker"} iconId={"docker"} />
        <Skill title={"react"} iconId={"react"} />
        <Skill title={"react-native"} iconId={"react-native"} />
        <Skill title={"styled-components"} iconId={"styled-components"} />
        <Skill title={"redux"} iconId={"redux"} />
        <Skill title={"git"} iconId={"git"} />
      </StyledSkills>
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  background-color: #1ca14b;
`

const StyledSkills = styled.div`
  min-height:100vh;
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
  align-items: center;
`
