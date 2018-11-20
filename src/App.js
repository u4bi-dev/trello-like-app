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

                <Board title='A' items={
                    [
                        { key : '1', text : 'item 1' },
                        { key : '2', text : 'item 2' },
                        { key : '3', text : 'item 3' },
                        { key : '4', text : 'item 4' }
                    ]
                }/>

                <Board title='B' />

                <Board title='C' />

                <Board title='D' />                

            </div>) }
        </Subscribe>
        )
    }
}

export default App