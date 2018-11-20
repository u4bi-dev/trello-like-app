import React, { Component } from 'react'
import './EditItem.css'

class BoardEditItem extends Component {

    state = {
        text : ''
    }

    render() {

        return (
        <div className='BoardEditItem'>
            <input 
                type='text'
                value={ this.state.text }
                onChange={ ({ target : { value }}) => this.setState({ text : value }) }
                onKeyPress={
                    ({ key, target : { value } }) => 
                        key === 'Enter' && (
                            this.props.addBoardItemText(this.props.title, value),
                            this.setState({ text : '' }),
                            this.props.flagEditMode()
                        )
                } />
        </div>
        )

    }

}

export default BoardEditItem