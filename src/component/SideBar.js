import React from 'react'
import Avatar from '../assets/Avatar.jpg';
export default function SideBar(props) {
    const items = [
        {
            key: '1',
            no: '2',
            text: 'Question not Visited',
            color: 'purple'
        },
        {
            key: '2',
            no: '2',
            text: 'Question not Answered',
            color: 'red'
        },
        {
            key: '3',
            no: '2',
            text: 'Question Answered',
            color: 'green'
        },
        {
            key: '4',
            no: '4',
            text: 'Question Marked',
            color: 'blue'
        },
        {
            key: '5',
            no: '5',
            text: 'Question Answered & Marked for Review',
            color: 'gray'
        }
    ]
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={Avatar} alt="avatar" className="avatar" />
                <p className="sidebar-text">Best of luck!</p>
            </div>
            <div className="sidebar-info">
                {items.map(obj => {
                    return (
                        <div className="sidebar-header2">
                            <p className="sidebar-number" style={{ backgroundColor: `${obj.color}` }}>{obj.no}</p>
                            <p className="sidebar-text">{obj.text}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <p className="section-name">{props.selectSection}</p>
            </div>
            <div>
                <p> Choose a question:</p>
                <div style={{ display: 'flex' }}>
                    {props.SelectedData.map((obj, index) => {
                        return (
                            <div className="q-icon" style={{ backgroundColor: 'grey' }} onClick={()=> props.changeQ(index)}>
                                <p style={{ marginTop: '9px' }}>{index+1}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
