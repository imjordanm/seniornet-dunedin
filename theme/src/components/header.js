/** @jsx jsx */
import { jsx, Header } from "theme-ui"
import { Link } from "gatsby"

export const HeaderWrapper = props => (
  <Header>
    <div sx={{
      margin: "0 auto",
      maxWidth: "container",
      width: "default",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div className="logo">
        <Link to="/" title="Home">
          <div>logo here</div>
        </Link>
      </div>
      <ul>
        {props.pages.map(page => (
          <li key={page.title}>
            <Link to={page.slug.current}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Header>
)

/*
<button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>

*/
