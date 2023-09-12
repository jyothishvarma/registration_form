// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameErr: false,
    showLastNameErr: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({
      firstNameInput: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastNameInput: event.target.value,
    })
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({
      showFirstNameErr: !isValidFirstName,
    })
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({
      showLastNameErr: !isValidLastName,
    })
  }

  renderFirstName = () => {
    const {firstNameInput} = this.state
    return (
      <>
        <label htmlFor="firstName" className="label-el">
          FIRST NAME
        </label>
        <input
          type="text"
          className="input-el"
          id="firstName"
          placeholder="First name"
          value={firstNameInput}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  renderLastName = () => {
    const {lastNameInput} = this.state
    return (
      <>
        <label htmlFor="LastName" className="label-el">
          LAST NAME
        </label>
        <input
          type="text"
          className="input-el"
          id="LastName"
          placeholder="Last name"
          value={lastNameInput}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    if (isValidFirstName && isValidLastName) {
      this.setState({
        isFormSubmitted: true,
      })
    } else {
      this.setState({
        showFirstNameErr: !isValidFirstName,
        showLastNameErr: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderRegistrationForm = () => {
    const {showFirstNameErr, showLastNameErr} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="registration-details">
          {this.renderFirstName()}
          {showFirstNameErr && <p className="err-msg">**Required</p>}
          {this.renderLastName()}
          {showLastNameErr && <p className="err-msg">**Required</p>}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderAnotherResponse = () => (
    <div className="submission-success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-img"
        alt="success"
      />
      <p className="submit-success-text">Submitted Successfully</p>
      <button
        type="submit"
        className="submit-another-response-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="registration-heading">Registration</h1>
        {isFormSubmitted
          ? this.renderAnotherResponse()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
