import React, { Component } from 'react'
import Word from './Word'
import Board from './Board'
import Hangman from './Hangman'
import './Style.sass'

class App extends Component {

  constructor () {
    super()
    this.state = {
      solutionArray: ['WINNING','STORK','BABY','ALLIGATOR','DOG','PEOPLE','TRAIN','AIRPLANE','POST', 'CHINA'],
      solution: '',
      used: [],
      matched: []
    }
  }
componentWillMount = () => {
  let num = Math.floor(Math.random() * (this.state.solutionArray.length))
   this.setState({solution: this.state.solutionArray[num]})
}


  onPlay = (character, disabled) => {
    console.log(character)
    let matched = this.state.matched
    let solution = this.state.solution
    let used = this.state.used
    // let disabled = this.state.disabled

    this.setState({
      used: this.state.used,
      matched: this.state.matched
    })

    used.push(character)

    for (let i = 0; i < solution.length; i++) {
      if (character === solution[i]) {
        matched.push(character)
        if (matched.length === solution.length) {
          alert("YOU WIN!");
        }
      }
    }
    if (used.length === 6) {
      alert("YOU LOSE")
      this.setState({
        used: [],
        matched: []
      })
    }
  }

  render () {
    let hangImage
    switch (this.state.used.length) {
    case 1: hangImage = <Hangman image='http://new-box.surge.sh/hang1.png' />
      break
    case 2: hangImage = <Hangman image='http://new-box.surge.sh/hang2.png' />
      break
    case 3: hangImage = <Hangman image='http://new-box.surge.sh/hang3.png' />
      break
    case 4: hangImage = <Hangman image='http://new-box.surge.sh/hang4.png' />
      break
    case 5: hangImage = <Hangman image='http://new-box.surge.sh/hang5.png' />
      break
    case 6: hangImage = <Hangman image='http://new-box.surge.sh/hang6.png' />
      break
    case 7: hangImage = <Hangman image='http://new-box.surge.sh/hang7.png' />
      break
    default: hangImage = <Hangman image='http://cdn.marketplaceimages.windowsphone.com/v8/images/c8284977-a6c7-4061-a185-6aa16c64f64a?imageType=ws_icon_large' />
    }
    return <div className='App'>
      <h1>Hangman!</h1>
      {hangImage}
      <Word solution={this.state.solution} used={this.state.used} />
      <Board onPlay={this.onPlay}/>
    </div>
  }
}

export default App
