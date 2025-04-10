import React from 'react'
import { useParams } from 'react-router-dom'

const Notifications = () => {
    const params=useParams();
    const number=params.id
  return (
    <div>
     {number}
    </div>
  )
}

export default Notifications
