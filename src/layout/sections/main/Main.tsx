import React from "react"
import styled from "styled-components"
import photo from "../../../assets/images/photo.jpg"


export const Main = () => {
  return (
    <StyledMain>
      <StyledSubMain>
        <div>
          <h1>WEB DEVELOPER</h1>
          <span>Ishimov Igor</span>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
          <Link href="#">Contact Me</Link>
        </div>
        <div>
          <Photo src={photo} alt="" />
        </div>
      </StyledSubMain>  
      <img src="" alt="" />
    </StyledMain>
  )
}

const StyledMain = styled.div`
  background-color: #1fda48;
`
const StyledSubMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`



const Photo = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`

const Link = styled.a`

`