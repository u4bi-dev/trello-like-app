import React from 'react'
import './PlusItem.css'

import BoardEditItem from './EditItem'

const BoardPlusItem = ({ title, isEditMode, flagEditMode, addBoardItemText }) => {
    return (
    <div className='BoardPlusItem' onClick={ _ => !isEditMode && flagEditMode() }>
        { isEditMode 
            ? 
            <BoardEditItem 
                title={ title } 
                addBoardItemText={ addBoardItemText } 
                flagEditMode={ flagEditMode } 
            /> 
            : 
            '+' 
        }
    </div>
    )

}

export default BoardPlusItem