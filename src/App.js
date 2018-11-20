import React, { Component } from 'react'
import './App.css'

import { Subscribe } from 'unstated'
import AppContainer from './provider/container/AppContainer'

import Board from './component/Board'

class App extends Component {
    render() {
        return (
        <Subscribe to={[AppContainer]}>
            { (app) => (
            <div className='App'>

                <Board />

                <Board />

                <Board />

                <Board />                

            </div>) }
        </Subscribe>
        )
    }
}

export default App