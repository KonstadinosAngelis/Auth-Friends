import React from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25%;
  border: 2px solid red;
  margin: 0 5%;
`
const P = styled.p`
  padding: 1%
`

export const Friends = (props) => {
  const { name, age, email} = props.friend;
  console.log(props.friend)
  return(
    <Wrapper>
      <P>Name: {name}</P>
      <P>Age: {age}</P>
      <P>Email: {email}</P>
    </Wrapper>
)}