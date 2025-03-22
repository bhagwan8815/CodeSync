import React from 'react'
import Avatar from "react-avatar";

export default function Client({username}) {
  return (
    <div className='mx-auto mt-1'>
      <Avatar
       name={username.toString()}
       size={50}
       round="14px"
       className="mr-3"/>
       <span className='font-bold'>{username.toString()}</span>
    </div>
  )
}
