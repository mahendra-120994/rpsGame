import Popup from 'reactjs-popup'
import './index.css'

const Rules = () => (
  <Popup
    modal
    trigger={
      <button className="rules-btn" type="button">
        Rules
      </button>
    }
  >
    {close => (
      <div className="rules-container">
        <button className="close-btn" onClick={() => close()} type="button">
          x
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
          className="rules-img"
        />
      </div>
    )}
  </Popup>
)

export default Rules
