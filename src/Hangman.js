import React, { Component } from 'react'

class Hangman extends Component {
  render () {
    return <img src={this.props.image} alt='something' height='500' width='500' />
  }
}

Hangman.propTypes = {
  image: React.PropTypes.string.isRequired
}

export default Hangman
