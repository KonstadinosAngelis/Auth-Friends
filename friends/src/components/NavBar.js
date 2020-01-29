import React from 'react'; 
import { Link } from 'react-router-dom'

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 1%;
  border-bottom: 2px dashed gray;
`

export const NavBar = () => {
  return(
  <Wrapper>
    <h2>Name of this Website</h2>
    <div>
    <Link to="/login">Login </Link>
    <Link to="/protected">Account</Link>
    </div>
  </Wrapper>
)}