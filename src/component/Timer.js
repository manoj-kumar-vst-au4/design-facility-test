import React, { useRef, useEffect, useState } from 'react'
import Timer from "react-compound-timer";


 const TestTimer = () => {


return (<Timer
        initialTime={300000}
        direction="backward"
      >
        {(control) => {

          return (
            <React.Fragment>
                <div>
                  <Timer.Minutes /> :
                  <Timer.Seconds /> 
                </div>
              <br />
              
            </React.Fragment>
          )
        }}
        </Timer>
      )}
      export default TestTimer;