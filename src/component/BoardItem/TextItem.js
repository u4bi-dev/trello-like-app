import React from 'react'
import './TextItem.css'

const BoardTextItem = ({ text }) => {
    
    return (
    <div className='BoardTextItem'>

            <span className='BoardTextItem__MoveBtn'>{ '<' }</span>

            <input type='text' value={ text } />

            <span className='BoardTextItem__MoveBtn'>{ '>' }</span>

    </div>
    )

}

export default BoardTextItem