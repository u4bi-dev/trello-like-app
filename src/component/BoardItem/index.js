import React from 'react'
import './index.css'

import BoardTextItem from './TextItem'
import BoardPlusItem from './PlusItem'

const BoardItem = ({ boardState, isPlus, text }) => {
        return (
        <div className='BoardItem'>

            { !isPlus ? 
                <BoardTextItem 
                    boardState={ boardState } 
                    text={ text } 
                />
                :
                <BoardPlusItem /> }

        </div>)
}

export default BoardItem