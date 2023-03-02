import './index.css'

const Choice = props => {
  const {choiceDetails, chooseOption} = props
  const {imageUrl, id} = choiceDetails

  let testid

  switch (id) {
    case 'ROCK':
      testid = 'rockButton'
      break
    case 'PAPER':
      testid = 'paperButton'
      break
    case 'SCISSORS':
      testid = 'scissorsButton'
      break
    default:
      break
  }

  console.log(testid)

  const onChoose = () => {
    chooseOption(id)
  }

  return (
    <button
      type="button"
      className="choice-btn"
      onClick={onChoose}
      data-testid={testid}
    >
      <img src={imageUrl} alt={id} className="choice-img" />
    </button>
  )
}
export default Choice
