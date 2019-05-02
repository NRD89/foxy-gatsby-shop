import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo1.png"
import Menu from "./Menu"

const HeaderContainer = styled.header`
  margin-bottom: 0;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.75rem 1.0875rem 0;
`

const LogoWrapper = styled.div`
  max-width: 400px;
`

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
  margin-bottom: .5rem;

  p {
    margin: 0;
    
    a {
      text-decoration: none;
    }
  }
`

const MiniCart = styled.p`
  right: 23px;
  position: absolute;
  padding: 4px;
  font-size: .9rem;
  background-color: #000;
  border-radius: 2px;
  border: 3px solid #ffd100;
  z-index: 100;

  @media (max-width: 570px) {
    font-size: 80%;
    padding: 0;
  }

  @media (max-width: 381px) {
    font-size: 70%;
  }
`

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <LogoWrapper>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <img
            style={{ width: `100%` }}
            src={Logo}
            alt="Up Safety Solutions Logo"
          />
        </Link>
      </LogoWrapper>
    </LogoContainer>
    <NavMenu>
      <MiniCart data-fc-id="minicart minicart-empty">
        
        <a style={{padding: `10px`,}} href="https://upsafetysolutions.foxycart.com/cart?cart=view">
        <span style={{color: `#fff`, paddingRight: `8px`,}}>CART</span>
          <span style={{color: `#fff`,}} data-fc-id="minicart-quantity">0</span>
        </a>
      </MiniCart>
    </NavMenu>
    <Menu />
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
