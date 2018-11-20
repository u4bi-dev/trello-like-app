import React, { Component } from 'react'
import './App.css'

import { Subscribe } from 'unstated'
import AppContainer from './provider/container/AppContainer'

class App extends Component {
    render() {
        return (
        <Subscribe to={[AppContainer]}>
            { (app) => (
            <div className='App'>

            </div>) }
        </Subscribe>
        )
    }
}

export default App