import React from 'react'

export default function Body(props) {
    return (
        <div className="body">
            <div className='q-text'>
    <p style={{ paddingTop: '51px' }}>{props.qText=== undefined?null:props.qText}</p>
            </div>
            <div>
                <div style={{ display: 'flex' }}>
                    <div className="q-icon" style={{ backgroundColor: '#2F6690', borderColor: 'white' }}>
                        <p style={{ fontSize: '16px', marginTop: '9px', color: '#ffffff' }}>A</p>
                    </div>
                    <div style={{ marginTop: '-17px' }}>
                        <p className={props.selectedOption===props.op1?'options2':'options'} onClick={()=>props.onHandleOption(props.op1)}>{props.op1}</p>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="q-icon" style={{ backgroundColor: '#2F6690', borderColor: 'white' }}>
                        <p style={{ fontSize: '16px', marginTop: '9px', color: '#ffffff' }}>B</p>
                    </div>
                    <div style={{ marginTop: '-17px' }}>
                        <p className={props.selectedOption===props.op2?'options2':'options'} onClick={()=>props.onHandleOption(props.op2)}>{props.op2}</p>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="q-icon" style={{ backgroundColor: '#2F6690', borderColor: 'white' }}>
                        <p style={{ fontSize: '16px', marginTop: '9px', color: '#ffffff' }}>C</p>
                    </div>
                    <div style={{ marginTop: '-17px' }}>
                        <p className={props.selectedOption===props.op3?'options2':'options'}  onClick={()=>props.onHandleOption(props.op3)}>{props.op3}</p>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="q-icon" style={{ backgroundColor: '#2F6690', borderColor: 'white' }}>
                        <p style={{ fontSize: '16px', marginTop: '9px', color: '#ffffff' }}>D</p>
                    </div>
                    <div style={{ marginTop: '-17px' }}>
                        <p className={props.selectedOption===props.op4?'options2':'options'} onClick={()=>props.onHandleOption(props.op4)}>{props.op4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
