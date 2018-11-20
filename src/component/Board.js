import React, { Component } from 'react'
import './Board.css'

import { Subscribe } from 'unstated'
import AppContainer from '../provider/container/AppContainer'

import BoardItem from './BoardItem'

class Board extends Component {

    state = {
        isEditMode : false
    }

    flagEditMode = () => this.setState({ isEditMode : !this.state.isEditMode })

    render() {
        return (
            <Subscribe to={[AppContainer]}>
            { (app) => {
                return (
                <div className='Board'>

                    <div className='Board__Title'>
                        { this.props.title }
                    </div>

                    <div className='Board__Item_Wrapper'>

                        { this.props.items && 
                            this.props.items.map((item, index) => 
                                <BoardItem 
                                    key={ index }
                                    boardState={ this.props.boardState } 
                                    title={ this.props.title }
                                    id={ item.id } 
                                    text={ item.text }
                                    setBoardItemText={ app.setBoardItemText } />) }

                        <BoardItem 
                            isPlus={ true } 
                            title={ this.props.title }
                            isEditMode={ this.state.isEditMode } 
                            flagEditMode={ this.flagEditMode }
                            addBoardItemText={ app.addBoardItemText }/>

                    </div>

                </div>
                )
            }}
            </Subscribe>)
    }
}

export default Board