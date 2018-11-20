import React, { Component } from 'react'
import './App.css'

import { Subscribe } from 'unstated'
import AppContainer from './provider/container/AppContainer'

import Board from './component/Board'

class App extends Component {
    render() {
        return (
        <Subscribe to={[AppContainer]}>
            { (app) => {
            
            let last = Object.keys(app.state.boards).length - 1
            let left = title => Object.keys(app.state.boards)[Object.keys(app.state.boards).indexOf(title) - 1] || null
            let right = title => Object.keys(app.state.boards)[Object.keys(app.state.boards).indexOf(title) + 1] || null

            return (<div className='App'>

                { Object.keys(app.state.boards)
                            .map((title, index) =>
                                <Board 
                                    key={ index }
                                    boardState={ ((cur, last) => {
                                        if (cur === 0) return 'first'
                                        if (cur === last) return 'last'
                                        return 'middle'
                                    })(index, last) }
                                    anchor={{
                                        left : left(title),
                                        right : right(title)
                                    }}
                                    title={ title } 
                                    items={ Object.keys(app.state.boards[title])
                                                    .map(id => ({ 
                                                        id : id,
                                                        text : app.state.boards[title][id]
                                                    }))} />) }

            </div>) }}
        </Subscribe>
        )
    }
}

export default App