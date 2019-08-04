/** @jsx jsx */
import { jsx, Header } from "theme-ui"
import { Link } from "gatsby"

export const HeaderWrapper = props => (
  <Header>
    <div sx={headerStyles}>
      <Link to="/" title="Home">
        <img
          sx={{ width: "100%", maxWidth: "10em", display: "block" }}
          src={props.logo}
          alt="SeniorNet Logo"
        />
      </Link>
      <ul>
        {props.pages.map(page => (
          <li key={page.title} sx={{ variant: "textStyles.caps" }}>
            <Link to={page.slug.current}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Header>
)

const headerStyles = {
  margin: "0 auto",
  width: ["mobile"],
  maxWidth: "outer",
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
