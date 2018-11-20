import React from 'react'
import './index.css'

import BoardTextItem from './TextItem'
import BoardPlusItem from './PlusItem'

const BoardItem = ({ boardState, anchor, title, id, isPlus, text, setBoardItemText, isEditMode, flagEditMode, addBoardItemText, moveBoardItem }) => {

        return (
        <div className='BoardItem'>

            { !isPlus ? 
                <BoardTextItem 
                    boardState={ boardState }
                    anchor={ anchor }
                    title={ title }
                    id={ id }
                    text={ text } 
                    setBoardItemText={ setBoardItemText }
                    moveBoardItem={ moveBoardItem }
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