import React from 'react'
import './index.css'

import BoardTextItem from './TextItem'
import BoardPlusItem from './PlusItem'

const BoardItem = ({ isPlus, text }) => {
        return (
        <div className='BoardItem'>

            { !isPlus ? <BoardTextItem text={ text } /> : <BoardPlusItem /> }

        </div>)
}

export default BoardItem