import React from "react"
import { Link } from "gatsby"
import { Styled, Header } from "theme-ui"

export const HeaderWrapper = props => (
  <Header>
    <React.Fragment>
      <div className="logo">
        <Link to="/" title="Home">
          <div>logo here</div>
        </Link>
      </div>
      <Styled.ul>
        {props.pages.map(page => (
          <Styled.li key={page.title}>
            <Link to={page.slug.current}>{page.title}</Link>
          </Styled.li>
        ))}
      </Styled.ul>
    </React.Fragment>
  </Header>
)

/*
<button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        
*/
