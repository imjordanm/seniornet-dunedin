/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Link } from "gatsby"

const Hamburger = props => {
  const [isOpen, setOpen] = useState(false)

  const shared = {
    bg: "#fff",
    height: 3,
    right: 0,
    width: "2em",
    content: `" "`,
    position: `absolute`,
    transition: theme => `all 250ms`,
  }

  return (
    <>
      <button
        aria-controls="gatsby-nav"
        aria-expanded={isOpen ? `active` : `inactive`}
        aria-label="Toggle Navigation"
        className={isOpen ? `active` : `inactive`}
        onClick={() => setOpen(!isOpen)}
        sx={{
          display: ["block", null, "none"],
          background: `none`,
          border: 0,
          cursor: `pointer`,
          outline: "0",
          transition: theme => `all 250ms`,
          "&.active": {
            "& .hamburger": {
              "&:after": {
                transform: `rotate(-45deg)`,
              },
              "&:before": {
                transform: `rotate(45deg)`,
              },
              "&:hover": {
                transform: `scale(1.2)`,
              },
            },
          },
        }}
      >
        <div
          className="hamburger"
          sx={{
            width: "2em",
            height: 3,
            margin: `10px 0`,
            position: `relative`,
            zIndex: "2",
            bg: isOpen ? "transparent" : "#fff",
            transition: `all 250ms cubic-bezier(.68,-.55,.265,1.55)`,
            ":before": {
              content: JSON.stringify(``),
              top: isOpen ? 0 : -2,
              ...shared,
            },
            ":after": {
              content: JSON.stringify(``),
              top: isOpen ? 0 : 2,
              right: 0,
              ...shared,
            },
          }}
        />
      </button>
      {isOpen && (
        <div
          sx={{
            display: [`flex`, null, `none`],
            alignItems: `center`,
            bg: `primary`,
            transition: theme => `all 250ms`,
            opacity: isOpen ? `1` : `0`,
            position: `fixed`,
            margin: 0,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: `1`,
          }}
        >
          <nav
            sx={{
              margin: "0 auto",
              width: "mobile",
              maxWidth: "outer",
            }}
          >
            <ul
              sx={{
                alignItems: "center",
                listStyle: "none",
                variant: "textStyles.caps",
                fontSize: [3, 4],
              }}
            >
              {props.pages.map(page => (
                <li
                  sx={{ mb: 3, "&:last-of-type": { mb: 0 } }}
                  key={page.title}
                >
                  <Link to={page.slug.current}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Hamburger
