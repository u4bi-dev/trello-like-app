import React from 'react'
import './TextItem.css'

const BoardTextItem = ({ boardState, anchor, title, id, text, setBoardItemText, moveBoardItem }) => {

    return (
    <div className='BoardTextItem'>

            { boardState !== 'first' && <span onClick={ _ => moveBoardItem(title, id, text, anchor.left) } className='BoardTextItem__MoveBtn'>{ '<' }</span> }

            <input type='text' value={ text } onChange={ ({ target : { value }}) => { setBoardItemText(title, id, value) } } />

            { boardState !== 'last' && <span onClick={ _ => moveBoardItem(title, id, text, anchor.right) } className='BoardTextItem__MoveBtn'>{ '>' }</span> }

    </div>
    )

}

export default BoardTextItem