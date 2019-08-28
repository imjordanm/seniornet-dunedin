/** @jsx jsx */
import { jsx, Header } from "theme-ui"
import { Link } from "gatsby"
import Hamburger from "./hamburger"

export const HeaderWrapper = props => (
  <Header>
    <div sx={headerStyles}>
      <Link to="/" title="Home">
        <img
          sx={{
            width: "100%",
            maxWidth: ["8em", null, "10em"],
            display: "block",
          }}
          src={props.logo}
          alt="SeniorNet Logo"
        />
      </Link>
      <ul>
        {props.pages.map(page => (
          <li
            key={page.title}
            sx={{
              display: ["none", null, null, "inline-block"],
              variant: "textStyles.caps",
            }}
          >
            <Link to={page.slug.current} title={page.title}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
      <Hamburger pages={props.pages} />
    </div>
  </Header>
)

const headerStyles = {
  margin: "0 auto",
  width: ["mobile", null, null, "desktop"],
  maxWidth: "navigation",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

/*
<button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>

*/
