/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Link } from "gatsby"

const Hamburger = props => {
  const [isOpen, setOpen] = useState(false)

  const shared = {
    bg: "primary",
    height: 3,
    right: 0,
    width: "2em",
    content: `" "`,
    position: `absolute`,
    transition: `all 250ms`,
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
          display: ["block", null, null, "none"],
          background: `none`,
          border: 0,
          cursor: `pointer`,
          outline: "0",
          transition: `all 250ms`,
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
            bg: isOpen ? "transparent" : "primary",
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
      <div
        sx={{
          display: [`flex`, null, null, `none`],
          alignItems: `center`,
          bg: "background",
          borderTop: theme => `3px solid ${theme.colors.secondary}`,
          transition: "opacity .35s",
          opacity: isOpen ? `1` : `0`,
          visibility: isOpen ? `visible` : `hidden`,
          position: `absolute`,
          margin: 0,
          top: "100%",
          zIndex: `1`,
          boxShadow: "0px 1px 3px rgba(150,150,150,0.3)",
        }}
      >
        <nav
          sx={{
            margin: "0 auto",
            width: ["mobile", "tablet"],
            maxWidth: "maxSmall",
            height: "100%",
            color: "primary",
          }}
        >
          <ul
            sx={{
              listStyle: "none",
              variant: "textStyles.caps",
              fontSize: [0, null, 1],
            }}
          >
            {props.pages.map(page => (
              <Link
                to={page.slug.current}
                key={page.title}
                title={page.title}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <li
                  sx={{
                    p: 5,
                    borderBottom: theme => `1px solid ${theme.colors.muted}`,
                    "&:last-of-type": { mb: 0 },
                    "&:hover": { bg: "muted" },
                  }}
                >
                  {page.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Hamburger
