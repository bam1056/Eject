import React, { Component } from 'react'

class Board extends Component {
  render () {
    return (
      <div className='Board'>
        <Alphabet onPlay={this.props.onPlay} disabled={this.props.disabled}/>

      </div>
    )
  }
}

class Alphabet extends Component {
  wholeAlphabet () {
    return [...Array(26).keys()].map(
      (i) => <AlphaLetter onPlay={this.props.onPlay} character={String.fromCharCode(65 + i)} disabled={this.props.disabled} />
    )
  }
  render () {
    return (
      <div className='AlphaLetter'>
        {this.wholeAlphabet()}
      </div>
    )
  }
}

class AlphaLetter extends Component {
  constructor () {
    super()
    this.state = {
      used: false
    }
  }
  handleClick = () => {
    this.props.onPlay(this.props.character)
    this.setState({used: true})

  }
  render () {
    return <button disabled={this.state.used} onClick={this.handleClick}>{this.props.character}</button>;
  }
}
 export default Board
