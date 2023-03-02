import {Component} from 'react'
import Choice from '../Choice'
import Rules from '../Rules'

import './index.css'

const resultStatusList = {
  initial: 'INITIAL',
  won: 'WON',
  lose: 'LOSE',
  draw: 'Draw',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    resultStatus: resultStatusList.initial,
    isGameRunning: true,
    userChoice: [],
    opponentChoice: [],
  }

  chooseOption = id => {
    const {choicesList} = this.props
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomNum]

    const userChoice = choicesList.filter(e => e.id === id)[0]

    console.log(opponentChoice)
    console.log(userChoice)

    if (id === opponentChoice.id) {
      this.setState({
        resultStatus: resultStatusList.draw,
        isGameRunning: false,
        userChoice,
        opponentChoice,
      })
    } else if (id === 'ROCK') {
      if (opponentChoice.id === 'SCISSORS') {
        this.setState(prev => ({
          resultStatus: resultStatusList.won,
          score: prev.score + 1,
          isGameRunning: false,
          userChoice,
          opponentChoice,
        }))
      } else {
        this.setState(prev => ({
          resultStatus: resultStatusList.lose,
          score: prev.score - 1,
          isGameRunning: false,
          userChoice,
          opponentChoice,
        }))
      }
    } else if (id === 'SCISSORS') {
      if (opponentChoice.id === 'PAPER') {
        this.setState(prev => ({
          resultStatus: resultStatusList.won,
          score: prev.score + 1,
          isGameRunning: false,
          userChoice,
          opponentChoice,
        }))
      } else {
        this.setState(prev => ({
          resultStatus: resultStatusList.lose,
          score: prev.score - 1,
          isGameRunning: false,
          userChoice,
          opponentChoice,
        }))
      }
    } else if (id === 'PAPER') {
      if (opponentChoice.id === 'ROCK') {
        this.setState(prev => ({
          resultStatus: resultStatusList.won,
          score: prev.score + 1,
          isGameRunning: false,
          userChoice,
          opponentChoice,
        }))
      } else {
        this.setState(prev => ({
          resultStatus: resultStatusList.lose,
          score: prev.score - 1,
          isGameRunning: false,
          userChoice,
          opponentChoice,
        }))
      }
    }
  }

  playAgain = () => {
    this.setState({isGameRunning: true})
  }

  renderResultView = status => {
    const {userChoice, opponentChoice} = this.state

    return (
      <>
        <div className="choice-result">
          <div>
            <p className="player">YOU</p>
            <img
              src={userChoice.imageUrl}
              className="choice-img"
              alt="your choice"
            />
          </div>
          <div>
            <p className="player">Opponent</p>
            <img
              src={opponentChoice.imageUrl}
              className="choice-img"
              alt="opponent choice"
            />
          </div>
        </div>
        <p className="status">{status}</p>
        <button
          className="play-again-btn"
          onClick={this.playAgain}
          type="button"
        >
          PLAY AGAIN
        </button>
      </>
    )
  }

  render() {
    const {score, isGameRunning, resultStatus} = this.state
    const {choicesList} = this.props

    let status

    switch (resultStatus) {
      case resultStatusList.draw:
        status = 'IT IS DRAW'
        break
      case resultStatusList.won:
        status = 'YOU WON'
        break
      case resultStatusList.lose:
        status = 'YOU LOSE'
        break
      default:
        break
    }

    return (
      <div className="bg-container">
        <div className="game-header">
          <div className="game-name">
            <h1 className="para">
              Rock <br />
              Paper <br />
              Scissors
            </h1>
          </div>
          <div className="score-counter">
            <p className="score-para">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        <div className="choices-container">
          {isGameRunning ? (
            <>
              {choicesList.map(choiceDetails => (
                <Choice
                  key={choiceDetails.id}
                  choiceDetails={choiceDetails}
                  chooseOption={this.chooseOption}
                />
              ))}
            </>
          ) : (
            <div className="result-container">
              {this.renderResultView(status)}
            </div>
          )}
        </div>
        <div className="popup-btn-container">
          <Rules />
        </div>
      </div>
    )
  }
}
export default RockPaperScissors
