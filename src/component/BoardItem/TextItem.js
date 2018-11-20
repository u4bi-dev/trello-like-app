import React from 'react'
import './TextItem.css'

const BoardTextItem = ({ boardState, text }) => {

    return (
    <div className='BoardTextItem'>

            { boardState !== 'first' && <span className='BoardTextItem__MoveBtn'>{ '<' }</span> }

            <input type='text' value={ text } />

            { boardState !== 'last' && <span className='BoardTextItem__MoveBtn'>{ '>' }</span> }

    </div>
    )

}

export default BoardTextItem