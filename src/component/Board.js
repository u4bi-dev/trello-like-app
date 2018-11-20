import React, { Component } from 'react'
import './Board.css'

import BoardItem from './BoardItem'

class Board extends Component {
    render() {
        return (
        <div className='Board'>

            <div className='Board__Title'>
                Title
            </div>

            <div className='Board__Item_Wrapper'>

                <BoardItem isPlus={ false } />

                <BoardItem isPlus={ false } />

                <BoardItem isPlus={ false } />

                <BoardItem isPlus={ false } />

                <BoardItem isPlus={ true } />

            </div>

        </div>)
    }
}

export default Board