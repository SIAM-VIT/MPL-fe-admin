import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

export default function Jeopardysections() {
  const nav = useNavigate();

  function handleSectionClick(e, section){
    nav("/question"); 
    console.log(section, " Selected for display of questions")
  }

  return (
    <div id='Container' className='flex column'>
      <Navbar />
      <div id="bodyContainer" >
        <div id="huntSection" className='flex column'>
          <div className="flex row gap_24">
            <p className="titleHeadText">Jeopardy</p>
            <p className="titleHeadText purpleText">Sections</p>
          </div>
          <div id="topicContainer" className='flex row align_items_center'>
            <div id="generalTopicContainer" className='flex row fwrap'>
              <div className="topicBox flex centerVH" id='topic1' onClick={(e)=>handleSectionClick(e,"Science")}><p className="topicText">Science</p></div>
              <div className="topicBox flex centerVH" id='topic2' onClick={(e)=>handleSectionClick(e,"Geography")}><p className="topicText">Geography</p></div>
              <div className="topicBox flex centerVH" id='topic3' onClick={(e)=>handleSectionClick(e,"Space")}><p className="topicText">Space</p></div>
              <div className="topicBox flex centerVH" id='topic4' onClick={(e)=>handleSectionClick(e,"Maths")}><p className="topicText">Maths</p></div>
              <div className="topicBox flex centerVH" id='topic5' onClick={(e)=>handleSectionClick(e,"GK")}><p className="topicText">Gk</p></div>
              <div className="topicBox flex centerVH" id='topic6' onClick={(e)=>handleSectionClick(e,"Language")}><p className="topicText">Language</p></div>
            </div>
            <div id="buzzerRoundContainer">
              <div className="buzzerBox flex centerVH" onClick={(e)=>handleSectionClick(e,"Buzzer")}><p className="topicText">Buzzer Round</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
