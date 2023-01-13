import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../Section/Footer'
import Activity from './Activity'
import Activity1 from './Activity1'

import './Pricing.css'
function Pricing() {
  return (
    <>
    <div id='pricing'>
        <div className='containerprice'>
            <section className='section1price'>
                <h1>DAY PASS</h1>
                <h1 className='lheading'>&#8377;200</h1>
                <h1>/PASS</h1>
                <ul className='pricelist'>
                     <li>&#9989; 1 DAY PASS</li>
                        <li>&#9989; FREE GYM ACCESS </li>
                        <li>&#9989; 24 HOURS ACCESS</li>
                </ul>
                <button > <NavLink exact to='/activity' className='pricebtn' >
        Subscribed
      </NavLink></button>
            </section>
            <section className='section2price'>
                <h1>MONTHLY</h1>
                <h1 className='lheading'>&#8377;5000</h1>
                <h1 >/MONTH</h1>
                <ul className='pricelist'>
                    <li>&#9989; &#8377;6000 JOINING FEE</li>
                        <li>&#9989; NO CONTRACT</li>
                        <li>&#9989; FREE GYM ACCESS</li>
                        <li>&#9989; 1 GROUP CLASS INCLUDED</li>
                        <li>&#9989; 24 HOURS ACCESS</li>
                </ul>
                <button className='pricebtn1'> <NavLink exact to='/activity1' className='navlogo' >
        Subscribed
      </NavLink></button>
            </section>
            <section className='section3price'>
                <h1 className='pheading'>MEMBERSHIPS<hr className='hrline'/></h1>
                <span>EQUIPMENT OF INTERNATIONAL STANDARDS | OUR REACH – 150 GYMS AND GROWING | TRANSFER FACILITY | CERTIFIED TRAINERS QUICK RESULT PROGRAM | INNOVATIVE PROGRAMS –GROUP EX CLASSES (E.G. BOLLYWOOD, POWER YOGA, ZUMBA, KICK BOXING, STEP-UP CLASS)</span>
                <h1 className='theading'>EACH PLAN INCLUDED</h1>
                <ul className='pricelist'>
                    <li>&#8594; The best equipment global brands</li>
                    <li>&#8594; The gym is open 24 hours a day.7 days a week</li>
                    <li>&#8594; Two safe payment methods</li>
                    <li>&#8594; Two safe payment methods</li>
                    <li>&#8594; Group fitness classes in the price of the subscription</li>
                    <li>&#8594; No long-term contract,period</li>
                </ul>
            </section>
        </div>
    </div>
    <div><Footer/></div>
    </>
  )
}

export default Pricing