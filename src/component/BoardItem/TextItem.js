import React from 'react'
import './TextItem.css'

const BoardTextItem = ({ boardState, title, id, text, setBoardItemText }) => {

    return (
    <div className='BoardTextItem'>

            { boardState !== 'first' && <span className='BoardTextItem__MoveBtn'>{ '<' }</span> }

            <input type='text' value={ text } onChange={ ({ target : { value }}) => { setBoardItemText(title, id, value) } } />

            { boardState !== 'last' && <span className='BoardTextItem__MoveBtn'>{ '>' }</span> }

    </div>
    )

}

export default BoardTextItem