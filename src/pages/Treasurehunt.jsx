import React from 'react'
import Navbar from '../components/Navbar'


export default function Treasurehunt() {
  return (
    <div id='Container' className='flex column'>
      <Navbar />
      <div id="bodyContainer" >
        <div id="huntSection" className='flex column'>
          <p className="titleHeadText">Treasure Hunt</p>
          <div id="clueSection" className='flex row'>
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
                <button className='btn_lite purpleShade'>VIEW PROGRESS</button>
                <button className='btn_lite purpleShade'>VERIFY CLUE</button>
              </div>
              <p className="errorMessage">Previous Clue Not Solved</p>
            </div>
            <div id="tableSection">
                <table className='tbl'>
                  <tr className='headerRow'><th>Clue</th><th>Organiser</th></tr>
                  <tr><td className='bold'>Clue 1</td><td>Organiser 1</td></tr>
                  <tr><td className='bold'>Clue 2</td><td>Organiser 2</td></tr>
                  <tr><td className='bold'>Clue 3</td><td>Organiser 3</td></tr>
                  <tr><td className='bold'>Clue 4</td><td>Organiser 4</td></tr>
                  <tr><td className='bold'>Clue 5</td><td>Organiser 5</td></tr>
                </table>
            </div>
          </div>
        </div>
      </div>
      <div id="bgSection" className='patternBg'></div>  
    </div>
  )
}
