import React from "react";
import styled from "styled-components";
import { Project } from "./project/Project";
import projectImg from "../../../assets/images/project-1.png"

export const Projects = () => {
  return(
    <StyledProjects>
      <Project
        src={projectImg}
        title={"TITLE PROJECT"}
        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
      />
      <Project
        src={projectImg}
        title={"I N S I G H T G R A M"}
        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
      />
      <Project
        src={projectImg}
        title={"TITLE PROJECT"}
        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
      />
      <Project
        src={projectImg}
        title={"I N S I G H T G R A M"}
        text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
      />
      
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
background-color: #ca27a1;
  min-height:100vh;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-around;
  gap: 20px;
`