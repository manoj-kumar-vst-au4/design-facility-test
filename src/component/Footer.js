import React from 'react'

export default function Footer(props) {
    return (
        <div className="footer">
            <div className="header-align">
                <div className="button-align">
                    <h3 className="button1" onClick={props.onSave}>Mark for Review & Next</h3>
                    &nbsp;
                    <h3 className="button1" onClick={props.clearResponse}>Clear Response</h3>
                </div>
                <div>
                    <h3 className="button2" onClick={props.onSave}>Save & Next</h3>
                </div>
            </div>
        </div>
    )
}
