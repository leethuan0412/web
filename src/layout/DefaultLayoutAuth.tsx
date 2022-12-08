import React from 'react'
import { Outlet } from 'react-router-dom'

export const DefaultLayoutAuth = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
