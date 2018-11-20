import React, { Component } from 'react'
import './Board.css'

import BoardItem from './BoardItem'

class Board extends Component {
    render() {
        return (
        <div className='Board'>

            <div className='Board__Title'>
                { this.props.title }
            </div>

            <div className='Board__Item_Wrapper'>

                { this.props.items && this.props.items.map(item => <BoardItem key={ item.key } text={ item.text } />) }

                <BoardItem isPlus={ true } />

            </div>

        </div>)
    }
}

export default Board