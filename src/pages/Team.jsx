import React from 'react'
import Navbar from '../components/Navbar'
import eventFlow from '../assets/eventflowChart.svg'

export default function Team() {
  return (
    <div id='Container' className='flex column'>
      <Navbar />
      <div id="bodyContainer" >
        <div id="huntSection" className='flex column'>
          <p className="titleHeadText">Treasure Hunt</p>
          <div id="clueSection" className='flex row space-between'>
            <div id="clueForm" className='flex column'>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Team Name</p>
                <input type="text" className='inputBox' placeholder='Enter Team Name'/>
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Leader Reg No</p>
                <input type="text" className='inputBox' placeholder='22ABC0000'/>
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Member1 Reg No</p>
                <input type="text" className='inputBox' placeholder='22ABC0000'/>
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Member2 Reg No</p>
                <input type="text" className='inputBox' placeholder='22ABC0000'/>
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Member3 Reg No</p>
                <input type="text" className='inputBox' placeholder='22ABC0000'/>
              </div>
              <div className='flex row' id='clueFormBtnContainer'>
                <button className='btn_lite purpleShade'>SUBMIT</button>
              </div>
              <p className="errorMessage">Team Creation Error</p>
            </div>
            <div id="aboutSection" className='flex column'>
              <p className="titleHeadText">About MPL</p>
              
              <p className="descText">The Math Premier League, organized by SIAM-VIT, is an engaging event that combines mathematics with interactive challenges. It includes three distinct rounds: the Coding Relay, where teams solve programming problems in a timed relay format; the Treasure Hunt, which involves solving clues to uncover hidden items; and a Jeopardy-style game covering a wide range of genres beyond just mathematics. This event is designed to foster both competition and teamwork while providing a diverse and enjoyable experience for all participants.</p>
              
              <div className='flex row space-between'>
                <div id="detailContainer" className='flex column'>
                  <div className="detailBox flex row">
                    <p className="detailHead bold">Date</p>
                    <p className="detail">28 September 2024</p>
                  </div>
                  <div className="detailBox flex row">
                    <p className="detailHead bold">Time</p>
                    <p className="detail">09:00 AM - 07:00 PM</p>
                  </div>
                  <div className="detailBox flex row">
                    <p className="detailHead bold">Venue</p>
                    <p className="detail">Smart Classroom</p>
                  </div>
                </div>
                <img src={eventFlow} id='eventFlowImg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
