import React, { useState } from 'react'; 
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25%;
  border: 2px solid red;
  margin: 0 5%;
`
const P = styled.p`
  padding: 1%
`

const X = styled.button`
  position: absolute;
`
const EditForm = styled.div`

`

export const Friends = (props) => {
  const { name, age, email, id} = props.friend;

  const [editName, setName] = useState("")
  const [editAge, setAge] = useState("")
  const [editEmail, setEmail] = useState("")
  const [editting, setEditting] = useState(true)

  const editOnClick = () => {
    setEditting(!editting)
  }

  const onChange = e => {
    return(
    e.currentTarget.name === "name" ? setName(e.target.value):
    e.currentTarget.name === "age" ? setAge(e.target.value):
    e.currentTarget.name === "email" ? setEmail(e.target.value):
    null)
  }

  const onSubmit = () => {
    axiosWithAuth().put(`/api/friends/${id}`, 
    ({
      name: editName,
      age: editAge,
      email: editEmail
    }))
  }

  return(
    <Wrapper>
      <X onClick={()=>{props.deleteFriend(id)}}>X</X>
      <P>Name: {name}</P>
      <P>Age: {age}</P>
      <P>Email: {email}</P>
  <EditForm>{editting ? <button onClick={editOnClick}>Edit!</button> : 
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={editName} onChange={onChange}/>
      <input type="number" name="age" value={editAge} onChange={onChange}/>
      <input type="text" name="email" value={editEmail} onChange={onChange}/>
      <br></br>
      <button>Change</button>
    </form>}
    </EditForm>
    </Wrapper>
)}