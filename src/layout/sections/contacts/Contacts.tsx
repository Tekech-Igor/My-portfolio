import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <StyledSubhead>Name</StyledSubhead>
        <Field placeholder={"Example"} />
        <StyledSubhead>Email</StyledSubhead>
        <Field placeholder={"Value"} />
        <StyledSubhead>Message</StyledSubhead>
        <Field placeholder={"Hi, i will ..."} as={"textarea"} />
        <Button type={"submit"} >Submit</Button>
      </StyledForm>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  min-height:50vh;
  background-color: #0e0bb0ae;
`
const StyledSubhead = styled.h4`
`


const StyledForm = styled.form`
  max-width:500px;
  width: 100%;
  display: flex;
  flex-direction:column;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input`

`