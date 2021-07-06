/** @jsx jsx */
import { jsx, Footer, Styled } from "theme-ui"
import { Link } from "gatsby"
import Form from "./form"
import Img from "gatsby-image"

/* This could be useful
  const StyledLi = ({ children }) => (
  <li
    sx={{
      fontWeight: `normal`,
      display: ['none', 'list-item'],
    }}
  >
    {children}
  </li>
);

then  <StyledLi>
*/

export const FooterWrapper = props => (
  <Footer>
    <div sx={footerStyles}>
      <div>
        <Styled.h3 sx={headingStyles}>{props.footer.leftHeading}</Styled.h3>
        <ul sx={listStyles}>
          {props.footer.footerPages.map(page => (
            <li key={page.title}>
              <Link to={page.slug.current} title={page.title}>
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          sx={{
            fontSize: 0,
            opacity: "0.6",
            display: ["none", null, null, "block"],
            mt: [null, 8, null, 8],
          }}
        >
          Copyright © {new Date().getFullYear()} SeniorNet Dunedin. All Rights
          Reserved
        </span>
      </div>
      <div>
        <Styled.h3 sx={headingStyles}>{props.footer.rightHeading}</Styled.h3>
        <Form signup={true} />
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: [
              "none",
              "none",
              "repeat(2, 1fr)",
              "none",
              "repeat(2, 1fr)",
            ],
            gridColumnGap: [null, null, 4],
            gridRowGap: [2, 3],
          }}
        >
          {props.footer.socialLinks.map(page => (
            <a
              sx={socialStyles}
              key={page.label}
              href={page.url}
              target="_blank"
              rel="noopener noreferrer"
              title={page.label}
            >
              <figure sx={iconStyles}>
                <Img fluid={page.icon.asset.fluid} alt={page.label} />
              </figure>

              <span>{page.label}</span>
            </a>
          ))}
        </div>
        <span
          sx={{
            fontSize: "0.633em",
            opacity: "0.6",
            display: ["block", null, null, "none"],
            mt: 7,
          }}
        >
          Copyright © {new Date().getFullYear()} SeniorNet Dunedin. All Rights
          Reserved
        </span>
      </div>
    </div>
  </Footer>
)

const footerStyles = {
  margin: "0 auto",
  width: ["mobile", "tablet", null, "desktop"],
  maxWidth: ["maxSmall", null, null, "navigation"],
  display: "grid",
  gridTemplateColumns: [null, null, null, "repeat(2, 1fr)"],
  gridColumnGap: [null, 9],
  gridRowGap: [7, null, null, 9],
}

const headingStyles = {
  color: "#fff",
  fontSize: [1, 2],
  variant: "textStyles.caps",
  "::before": { content: "none" },
  "::after": {
    content: `""`,
    bg: "secondary",
    height: "4px",
    display: "block",
    mt: [2, 3],
    mb: [5, null, null, 6],
  },
}

const listStyles = {
  display: "grid",
  gridTemplateColumns: [
    "repeat(2, 1fr)",
    null,
    "repeat(3, 1fr)",
    "repeat(2, 1fr)",
  ],
  gridRowGap: [2, null, null, 3],
  overflow: "hidden",
  maxWidth: ["mobile", "unset"],
  li: {
    mr: 0,
    letterSpacing: "0.05em",
    fontSize: [0, "inherit"],
  },
}

const socialStyles = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#fff",
  lineHeight: "heading",
  letterSpacing: "0.05em",
  fontSize: [0, "inherit"],
}

const iconStyles = {
  p: 4,
  bg: "rgba(255,255,255,0.15)",
  borderRadius: "4px",
  height: "1em",
  width: "1em",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  mr: [4, 5],
}
