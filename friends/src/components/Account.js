import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Friends } from './Friends'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Account = () => {
  const [friends, setFriends] = useState([])

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    axiosWithAuth().get('/api/friends')
      .then(res => { setFriends(res.data) })
      .catch(err => console.log(err))
  }, [])

  const onChange = e => {
    return(
    e.currentTarget.name === "name" ? setName(e.target.value):
    e.currentTarget.name === "age" ? setAge(e.target.value):
    e.currentTarget.name === "email" ? setEmail(e.target.value):
    null)
  }

  const onSubmit = () => {
    axiosWithAuth().post('/api/friends', ({
      name: name,
      age: age,
      email: email
    }))
    .then(res => { console.log(res)})
    .catch(err => console.log(err))
  }

  const deleteFriend = (id) => {
    friends.forEach(item => {
      if(item.id === id){
        axiosWithAuth().delete(`/api/friends/${item.id}`)
        setFriends([...friends.filter(item => item.id !== id)])
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={name}
          placeholder="Friend's Name"
        />

        <input 
          type="number"
          name="age"
          onChange={onChange}
          value={age}
          placeholder="Friend's age"
        />

        <input 
          type="text"
          name="email"
          onChange={onChange}
          value={email}
          placeholder="Friend's Email"
        />
        <button>Add Friend</button>
      </form>
      <Wrapper>
        {friends.map((friend) => (<Friends key={friend.id} friend={friend} deleteFriend={deleteFriend}/>))}
      </Wrapper>
    </div>
  )
}