/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"

export default class Form extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isValid: true,
      signup: false,
    }

    this.formValid = this.formValid.bind(this)
  }

  formValid(event) {
    /*if (grecaptcha.getResponse() === "") {
      event.preventDefault()
      if (this.state.isValid) {
        this.setState({ isValid: false })
      }
    } else if (this.state.isValid === false) {
      this.setState({ isValid: true })
    }*/
  }

  render() {
    let form
    if (this.props.node) {
      form = this.props.node.fields
    }
    return (
      <React.Fragment>
        {this.props.signup ? (
          <FormSignup isValid={this.state.isValid} formValid={this.formValid} />
        ) : form ? (
          <FormContact
            form={form}
            isValid={this.state.isValid}
            formValid={this.formValid}
          />
        ) : null}
      </React.Fragment>
    )
  }
}

const FormContact = props => (
  <form
    name="contact"
    autoComplete="nope"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit={props.formValid}
  >
    <input type="hidden" name="form-name" value="contact" />
    {props.form.map(item => (
      <div key={item.label}>
        <label htmlFor={item.label}>
          {item.label}
          {item.required ? "*" : ""}
        </label>

        {item.input === "number" ? (
          <input
            name={item.label}
            type="text"
            id={item.label}
            pattern="[0-9]{6,}"
            required={item.required}
          />
        ) : item.input === "message" ? (
          <textarea
            name={item.label}
            id={item.label}
            required={item.required}
          />
        ) : (
          <input
            name={item.label}
            type={item.input}
            id={item.label}
            required={item.required}
          />
        )}
      </div>
    ))}

    {props.isValid === true ? (
      <div id="recaptcha" className="g-recaptcha" data-sitekey="enterhere" />
    ) : (
      <div className="captcha-form">
        <div id="recaptcha" className="g-recaptcha" data-sitekey="enterhere" />
        <div className="captcha-text">
          <span>Please tick the reCAPTCHA before resubmitting the form.</span>
        </div>
      </div>
    )}
    <button type="submit">Send Message</button>
  </form>
)

const FormSignup = props => (
  <form
    name="signup"
    autoComplete="nope"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit={props.formValid}
  >
    <input type="hidden" name="form-name" value="signup" />
    <div sx={signupStyles}>
      <label
        htmlFor="signupEmail"
        style={{ position: "absolute", opacity: "0" }}
      >
        Subscribe to our Newsletter
      </label>
      <input
        name="signupEmail"
        type="email"
        id="signupemail"
        required={true}
        placeholder="Enter email to join our mailing list."
      />

      {props.isValid === true ? (
        <div id="recaptcha" className="g-recaptcha" data-sitekey="enterhere" />
      ) : (
        <div className="captcha-form">
          <div
            id="recaptcha"
            className="g-recaptcha"
            data-sitekey="enterhere"
          />
          <div className="captcha-text">
            <span>Please tick the reCAPTCHA before resubmitting the form.</span>
          </div>
        </div>
      )}
      <button type="submit">Subscribe</button>
    </div>
  </form>
)

const signupStyles = {
  display: "flex",
  mb: [4, 6, 7],
  input: {
    flex: "2 1",
    p: [2, 5],
  },
  button: {
    flex: "1 1",
  },
}
