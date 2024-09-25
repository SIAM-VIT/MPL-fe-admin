import React from 'react'
import Navbar from '../components/Navbar'
import PuzzleImage from '../assets/heroPageElement.svg'

export default function Homepage() {
  return (
    <div id='Container' className='flex column'>
        <Navbar />
        <div id="bodyContainer" className='flex row space-between align_items_center'>
          <div id="heroTextSection" className='flex column'>
            <p className="heroHeadText">Get Ready for the Ultimate Fun !</p>
            <p className="heroSubText">Why yall looking at home huh. Look at the other pages this page aint for yall</p>
            <div id="btnHolder" className='flex row align_items_center'>
              <button className='btn roundBtn purpleShade'>Get Started</button>
              <p className='btnUnderline'>Create Team</p>
            </div>
          </div>
          <div id="heroImageSection" className='flex column centerVH'>
              <img id='puzzleImage' src={PuzzleImage} />
          </div>
        </div>
    </div>
  )
}
