/** @jsx jsx */
import { jsx, Footer, Styled } from "theme-ui"
import { Link } from "gatsby"
import Form from "./form"

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
            display: "block",
            mt: [5, 7, 8],
          }}
        >
          Copyright © 2019 SeniorNet Dunedin. All Rights Reserved
        </span>
      </div>
      <div>
        <Styled.h3 sx={headingStyles}>{props.footer.rightHeading}</Styled.h3>
        <Form signup={true} />
        <ul sx={socialStyles}>
          {props.footer.socialLinks.map(page => (
            <li key={page.label}>
              <img src={page.icon.asset.url} alt={page.label} />
              <a
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                title={page.label}
              >
                {page.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Footer>
)

const footerStyles = {
  margin: "0 auto",
  width: ["mobile"],
  maxWidth: "outer",
  display: "grid",
  gridTemplateColumns: [null, "repeat(2, 1fr)"],
  gridColumnGap: [null, 7, 9],
  gridRowGap: [7, null, 9],
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
    mb: 6,
  },
}

const listStyles = {
  display: "grid",
  gridTemplateColumns: [null, "repeat(3, 1fr)"],
  gridRowGap: [1, 3],
  li: { mr: 0 },
}

const socialStyles = {
  display: "flex",
  flexDirection: "column",
}
