import React from 'react';
import TestTimer from './Timer';
export default function Header(props) {

    return (
        <div className="header">
            
            <div className="header-align">
                <div className="row-align">
                    <h1>Design Facility</h1>
                    <p className="pointer color-pointer">.</p>
                    <h1 className="color-title">{props.data.examTitle}</h1>
                </div>
                <div>
                    <p className="time-button"><TestTimer timer={props.timer}/></p>
                </div>
            </div>
            <div className="row-align">
                <div>
                    <p className={props.selectSection==="Section1"?'select-sectionafter':'select-section'} value="Section1" onClick={() => props.onClickSection('Section1')}>Section1</p>
                </div>
                <div>
                    <p className={props.selectSection==="Section2"?'select-sectionafter select-section-margin-left':'select-section select-section-margin-left'} value="Section2" onClick={() => props.onClickSection('Section2')}>Section2</p>
                </div>
                <div>
                    <p className={props.selectSection==="Section3"?'select-sectionafter select-section-margin-left select-section-last-border-right':'select-section select-section-margin-left select-section-last-border-right'} value="Section3" onClick={() => props.onClickSection('Section3')}>Section3</p>
                </div>
            </div>
            <div>
                <p className="q-number">QUESTION NUMBER { props.qIndex+1}</p>
            </div>
        </div>
    )
}
