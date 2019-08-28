/** @jsx jsx */
import { jsx } from "theme-ui"
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
    if (typeof grecaptcha !== "undefined") {
      if (typeof grecaptcha === "") {
        event.preventDefault()
        if (this.state.isValid) {
          this.setState({ isValid: false })
        }
      } else if (this.state.isValid === false) {
        this.setState({ isValid: true })
      }
    }
  }

  render() {
    let form
    if (this.props.node) {
      form = this.props.node.fields
    }
    return (
      <>
        {this.props.signup ? (
          <FormSignup isValid={this.state.isValid} formValid={this.formValid} />
        ) : form ? (
          <FormContact
            form={form}
            isValid={this.state.isValid}
            formValid={this.formValid}
          />
        ) : null}
      </>
    )
  }
}

const FormContact = props => (
  <form
    sx={formStyles}
    name="contact"
    autoComplete="nope"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit={props.formValid}
  >
    <input type="hidden" name="form-name" value="contact" />
    {props.form.map(item => (
      <div className="formFields" sx={formStyles} key={item.label}>
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
      <div
        id="recaptcha"
        className="g-recaptcha"
        data-sitekey="6Lc4mrIUAAAAAM0a6jYOVL4kVHB03jnjPN5nQrQb"
      />
    ) : (
      <div className="captcha-form">
        <div
          id="recaptcha"
          className="g-recaptcha"
          data-sitekey="6Lc4mrIUAAAAAM0a6jYOVL4kVHB03jnjPN5nQrQb"
        />
        <div className="captcha-text">
          <span>Please tick the reCAPTCHA before resubmitting the form.</span>
        </div>
      </div>
    )}
    <button sx={{ variant: "buttons.secondary" }} type="submit">
      Send Message
    </button>
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
        style={{ position: "absolute", opacity: "0", zIndex: "-2" }}
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
      <button sx={{ variant: "buttons.primary" }} type="submit">
        Subscribe
      </button>
    </div>
  </form>
)

const formStyles = {
  ".g-recaptcha": {
    mb: [3, 5],
  },
  ".formFields": {
    display: "flex",
    flexDirection: "column",
    mb: [6, 7, 8],
    label: {
      fontSize: [0, "inherit"],
      variant: "textStyles.caps",
      mb: 4,
    },
    "input, textarea": {
      border: theme => `.2em solid ${theme.colors.secondary}`,
      color: "text",
      padding: [2, 4],
      px: 4,
    },
    textarea: {
      height: ["8em", "12em"],
      resize: "vertical",
    },
  },
}

const signupStyles = {
  display: "flex",
  flexDirection: ["column", "row"],
  boxShadow: theme => `2px 2px 8px ${theme.colors.text}85`,
  mb: 6,
  input: {
    flex: [null, "4 1", "3 1"],
    p: [3, null, null, 4],
    fontFamily: "body",
    fontSize: 0,
    fontWeight: "regular",
    color: "text",
  },
  button: {
    flex: [null, "1 1"],
  },
}
