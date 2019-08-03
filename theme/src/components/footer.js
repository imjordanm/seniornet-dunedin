/** @jsx jsx */
import { jsx, Footer, Styled } from "theme-ui"
import { Link } from "gatsby"

export const FooterWrapper = props => (
  <Footer>
    <div sx={footerStyles}>
      <div sx={columnStyles}>
        <Styled.h2>{props.footer.leftHeading}</Styled.h2>
        <ul>
          {props.footer.footerPages.map(page => (
            <li key={page.title} sx={{ variant: "textStyles.caps" }}>
              <Link to={page.slug.current}>{page.title}</Link>
            </li>
          ))}
        </ul>
        <span>Copyright © 2019 SeniorNet Dunedin. All Rights Reserved</span>
      </div>
      <div sx={columnStyles}>
        <Styled.h2>{props.footer.rightHeading}</Styled.h2>
        <div>Mailing list here: {props.footer.mailingList}</div>
        <ul>
          {props.footer.socialLinks.map(page => (
            <li key={page.label} sx={{ variant: "textStyles.caps" }}>
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
  width: ["mobile", "desktop"],
  display: "flex",
  justifyContent: "space-between",
}

const columnStyles = {
  flex: "1 1",
}
