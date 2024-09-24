import React from 'react'
import Navbar from '../components/Navbar'

export default function JeopardyQuestions() {
  return (
    <div id='Container' className='flex column'>
      <Navbar />
      <div id="bodyContainer" >
        <div id="huntSection" className='flex column'>
          <div className="flex row gap_24">
            <p className="titleHeadText">Jeopardy</p>
            <p className="titleHeadText purpleText">Questions</p>
          </div>
            <div id="questionBoxContainer" className='flex row fwrap'>
              <div className="questionBox flex centerVH"><p className="topicText">Q1</p></div>
              <div className="questionBox flex centerVH"><p className="topicText">Q2</p></div>
              <div className="questionBox flex centerVH"><p className="topicText">Q3</p></div>
              <div className="questionBox flex centerVH"><p className="topicText">Q4</p></div>
              <div className="questionBox flex centerVH"><p className="topicText">Q5</p></div>
              <div className="questionBox flex centerVH"><p className="topicText">Q6</p></div>   
              <div className="questionBox flex centerVH"><p className="topicText">Q7</p></div>   
              <div className="questionBox flex centerVH"><p className="topicText">Q8</p></div>   
          </div>
        </div>
      </div>
    </div>
  )
}
