import React from 'react'
import Navbar from '../components/Navbar'


export default function Admin() {
  return (
    <div id='Container' className='flex column'>
      <Navbar />
      <div id="bodyContainer" >
        <div id="huntSection" className='flex column'>
          <p className="titleHeadText">Admin</p>
          <div id="clueSection" className='flex row space-between'>
            <div id="clueForm" className='flex column'>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Team Name</p>
                <input type="text" className='inputBox'/>
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Clue No</p>
                {/* Add clueBoxDisabled for diabled buttons */}
                <div id="clueBoxContainer" className='flex row'>
                  <div className="clueBox flex centerVH" id='Cbox1'><p className="clueno">1</p></div>
                  <div className="clueBox flex centerVH" id='Cbox2'><p className="clueno">2</p></div>
                  <div className="clueBox flex centerVH" id='Cbox3'><p className="clueno">3</p></div>
                  <div className="clueBox flex centerVH" id='Cbox4'><p className="clueno">4</p></div>
                  <div className="clueBox flex centerVH" id='Cbox5'><p className="clueno">5</p></div>
                </div>
              </div>
              <div className='flex row' id='clueFormBtnContainer'>
                <button className='btn_lite greenShade'>SET CLUE</button>
                <button className='btn_lite redShade'>RESET CLUE</button>
              </div>
            </div>
            <div id="clueForm" className='flex column'>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Question ID</p>
                <input type="text" className='inputBox'/>
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Answer</p>
                <input type="text" className='inputBox'/>
              </div>
              <div className="inputBoxContainer flex row space-between align_items_center">
                <p className="inputTitle">Hint</p>
                <input type="text" className='inputBox'/>
              </div>
              
              <div className='flex row' id='clueFormBtnContainer'>
                <button className='btn_lite purpleShade'>UPDATE</button>
                <button className='btn_lite purpleShade'>FETCH</button>
              </div>
            </div>
          </div>
          <div id="clueForm" className='flex column formPoints'>
              <div className="inputBoxContainer flex row align_items_center space-between">
                <p className="inputTitle">Team Name</p>
                <input type="text" className='inputBox'/>
              </div>
              <div className="inputBoxContainer flex row  align_items_center space-between">
                <p className="inputTitle">Points</p>
                <div className="scoreBox flex row">
                  <button className='btn_lite redShade'>-</button>
                  <input type='number' className='inputBox'/>
                  <button className='btn_lite greenShade'>+</button>
                </div>
                
              </div>
              <div className="inputBoxContainer flex row  align_items_center space-between">
                <p className="inputTitle">Hints</p>
                <div className="scoreBox flex row">
                  <button className='btn_lite redShade'>-</button>
                  <input type='number' className='inputBox'/>
                  <button className='btn_lite greenShade'>+</button>
                </div>
              </div>
              
              <div className='flex row' id='clueFormBtnContainer'>
                <button className='btn_lite purpleShade'>SUBMIT</button>
              </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
