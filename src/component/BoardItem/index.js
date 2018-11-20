import React from 'react'
import './index.css'

import BoardTextItem from './TextItem'
import BoardPlusItem from './PlusItem'

const BoardItem = ({ boardState, title, id, isPlus, text, setBoardItemText, isEditMode, flagEditMode, addBoardItemText }) => {

        return (
        <div className='BoardItem'>

            { !isPlus ? 
                <BoardTextItem 
                    boardState={ boardState }
                    title={ title }
                    id={ id }
                    text={ text } 
                    setBoardItemText={ boardState && setBoardItemText }
                />
                :
                <BoardPlusItem 
                    title={ title }
                    isEditMode={ isEditMode }
                    addBoardItemText={ addBoardItemText }
                    flagEditMode={ flagEditMode } /> }

        </div>)
}

export default BoardItem