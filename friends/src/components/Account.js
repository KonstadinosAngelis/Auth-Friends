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

  useEffect(() => {
    axiosWithAuth().get('/api/friends')
    .then(res => {setFriends(res.data)})
    .catch(err => console.log(err))
  }, [])
  return(
  <Wrapper>
    {friends.map((friend) => (<Friends key={friend.id} friend={friend}/>))}
  </Wrapper>    
)}