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
              <Link to={page.slug.current}>{page.title}</Link>
            </li>
          ))}
        </ul>
        <span
          sx={{
            fontSize: 0,
            fontWeight: "normal",
            fontStyle: "italic",
            display: ["none", "block"],
            mt: [null, 8, 9],
          }}
        >
          Copyright © 2019 SeniorNet Dunedin. All Rights Reserved
        </span>
      </div>
      <div>
        <Styled.h3 sx={headingStyles}>{props.footer.rightHeading}</Styled.h3>
        <Form signup={true} />
        <div sx={{ display: "flex", flexDirection: "column" }}>
          {props.footer.socialLinks.map(page => (
            <div sx={socialStyles} key={page.label}>
              <figure sx={iconStyles}>
                <Img fluid={page.icon.asset.fluid} alt={page.label} />
              </figure>
              <a
                sx={{ flex: "10 1", textDecoration: "none", color: "#fff" }}
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                title={page.label}
              >
                {page.label}
              </a>
            </div>
          ))}
        </div>
        <span
          sx={{
            fontSize: 0,
            fontWeight: "normal",
            fontStyle: "italic",
            display: ["block", "none"],
            mt: 7,
          }}
        >
          Copyright © 2019 SeniorNet Dunedin. All Rights Reserved
        </span>
      </div>
    </div>
  </Footer>
)

const footerStyles = {
  margin: "0 auto",
  width: ["mobile"],
  maxWidth: "outer",
  display: "grid",
  gridTemplateColumns: [null, null, "repeat(2, 1fr)"],
  gridColumnGap: [null, 7, 9],
  gridRowGap: [7, 9],
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
    mt: [2, 4],
    mb: [5, 7],
  },
}

const listStyles = {
  display: "grid",
  gridTemplateColumns: ["repeat(2, 1fr)"],
  gridRowGap: [2, 3, 4],
  li: { mr: 0 },
}

const socialStyles = {
  display: "flex",
  alignItems: "center",
  mb: [3, 4],
}

const iconStyles = {
  p: 4,
  bg: "rgba(255,255,255,0.15)",
  borderRadius: "4px",
  boxShadow: theme => `0px 3px 6px ${theme.colors.text}85`,
  height: "1.5em",
  width: "1.5em",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  mr: [4, 5],
}
