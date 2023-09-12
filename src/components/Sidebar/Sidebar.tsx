import React from 'react'

// icons
import { CgCalendarDates } from 'react-icons/cg'
import { PiMonitorPlayLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";



export const navData = [
    {name: 'Home', path: '/', icon: <GoHome />},
    {name: 'Movies', path: '/movies', icon: <BiCameraMovie />},
    {name: 'TV Series', path: '/tvseries', icon: <PiMonitorPlayLight />},
    {name: 'Upcoming', path: '/upcoming', icon: <CgCalendarDates />},
]

const nav = () => {

    
  return (
    <div>nav</div>
  )
}

export default nav