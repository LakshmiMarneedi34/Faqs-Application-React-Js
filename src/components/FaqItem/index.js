// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImage = () => {
    const {isActive} = this.state
    const imgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onToggle}>
        <img src={imgUrl} alt={altText} className="image-icon" />
      </button>
    )
  }

  renderContent = () => {
    const {isActive} = this.state
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails
    return (
      <li className="list-container">
        <div className="container">
          <h1 className="question-title">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderContent()}
      </li>
    )
  }
}

export default FaqItem
