import React from 'react'
import './index.css'

import BoardTextItem from './TextItem'
import BoardPlusItem from './PlusItem'

const BoardItem = ({ isPlus }) => {
        return (
        <div className='BoardItem'>

            { !isPlus ? <BoardTextItem /> : <BoardPlusItem /> }

        </div>)
}

export default BoardItem