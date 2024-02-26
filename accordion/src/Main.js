import React from 'react'
import {data} from './data'
import Accordion from './Accordion'
function Main() {
  return (
    <div>
        <h3 className='main-title'>Most asked Question ?</h3>
        <div className='main-title-underline'></div>
        {data.map((section,index) => 
            <Accordion section={section}/>
        )}
    </div>
  )
}

export default Main