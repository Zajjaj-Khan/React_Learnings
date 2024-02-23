import React from 'react'
import {useSelector} from 'react-redux'
function Home() {
    const user = useSelector((state)=> state.user.value)
  return (
    <div>
        <h1>This is a Home Page</h1>
        <p>{user.username}</p>

        </div>
  )
}

export default Home