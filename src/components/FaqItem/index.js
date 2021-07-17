// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: true}

  onClicked = () => {
    this.setState(prev => ({
      isActive: !prev.isActive,
    }))
  }

  render() {
    const {item} = this.props
    const {questionText, answerText} = item
    const {isActive} = this.state
    return (
      <li className="item-section">
        <div className="question-section">
          <h1 className="question">{questionText}</h1>
          {isActive ? (
            <button className="button" type="button" onClick={this.onClicked}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="img-size"
              />
            </button>
          ) : (
            <button className="button" type="button" onClick={this.onClicked}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="img-size"
              />
            </button>
          )}
        </div>

        {isActive ? null : (
          <div>
            <hr className="horizontal-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
