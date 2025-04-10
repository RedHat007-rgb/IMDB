import React from 'react'
import { Outlet } from 'react-router-dom'

const Messages = () => {
  return (
    <div>
        <Outlet/>
      In messages....
    </div>
  )
}

export default Messages
