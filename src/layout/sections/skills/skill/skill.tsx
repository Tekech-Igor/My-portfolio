import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string
  title: string
}


export const Skill = (props: SkillPropsType) => {
  return(
    <StyledSkill>
      <SkillTitle>{props.title}</SkillTitle>      
      <Icon iconId={props.iconId}/>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  background-color: #8c2a6d;
  margin: 10px;
  width:15%;
  text-align: center;
`

const SkillTitle = styled.h3`

`