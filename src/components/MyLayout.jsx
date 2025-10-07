import React from 'react'
import { Outlet } from 'react-router'
import { MyBottomNav } from './MyBottomNav'

export const MyLayout = () => {
  return (
    <>
      <Outlet/>{/*Ide kerül minden oldal*/}
      <MyBottomNav/>
    </>
  )
}
