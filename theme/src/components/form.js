import React from "react"

export default class Form extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isValid: true,
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
    let form = this.props.node.fields
    return (
      <FormComponent
        form={form}
        isValid={this.state.isValid}
        formValid={this.formValid}
      />
    )
  }
}

const FormComponent = props => (
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
      <div>
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
