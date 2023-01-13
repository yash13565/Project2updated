import React from 'react'
import './Home.css'
import { Link, NavLink } from 'react-router-dom'


export default function Home() {
  return (
    <div>
    <div className='home'>
    <h1 className='heading'>"Take Care Of Your <span style={{color:'red'}}>Body.</span>Its The only Place You Have To  <span style={{color:'red'}}>Live.</span>."</h1>
    <button className='mainpagebtn'>  <NavLink exact to='/registration' className='homelink' >
    Join With us
        </NavLink></button>
        <Link href='#about'/>
      </div>
      
      
      </div>
  )
}
