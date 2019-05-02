import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Toggle from "./ToggleRPC"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: #fff;
  text-align: left;
`

const StyledLink = styled.p`
  display: block;
  text-decoration: none;
  color: #fff;
  padding: 0 30px;
  transition: ease-in-out 0.5s;
  margin: 0;
  cursor: pointer;
  font-family: "Zilla Slab";

  @media (max-width: 570px) {
    font-size: 80%;
    padding: 0 10px;
  }

  @media (max-width: 381px) {
    font-size: 70%;
    padding: 0 10px;
  }
`

const NavMenu = styled.ul`
  line-height: 45px;
  font-weight: 700;
  text-transform: uppercase;
  list-style: none;
  margin: 0;
  position: relative;
`

const MenuItem = styled.li`
  display: inline-block;
  cursor: pointer;
  margin: 0;
  transition: ease-in-out 0.4s;

  &:hover {
    background-color: #fff;

    ${StyledLink} {
      color: #ffd100;
    }
  }
`

const NavSubMenu = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;

  @media (max-width: 470px) {
    display: block;
  }
`

const SubMenuItem = styled.li`
  margin: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const SubLink = styled(Link)`
  display: block;
  padding: 0 16px;
  margin: 0;
  text-decoration: none;
  color: #000;
  line-height: inherit;
  font-family: "Zilla Slab";
`
const SubMenuContainer = styled.div`
  font-weight: 300;
  text-transform: none;
  position: absolute;
  width: 130%;
  -webkit-box-shadow: 0px 29px 31px -5px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 29px 31px -5px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 29px 31px -5px rgba(0, 0, 0, 0.19);
  margin: 0;
  background-color: #fff;
  list-style: none;
  padding: 1rem;
  left: 0;
  z-index: 1000;

  @media (max-width: 930px) {
    width: 100%;
  }
`

const Menu = () => (
  <Nav>
    <NavMenu>
      <Toggle>
        {({ on, toggle, handleLeave }) => (
          <MenuItem onMouseLeave={handleLeave}>
            <StyledLink onClick={toggle}>Shop Categories</StyledLink>
            {on && (
              <SubMenuContainer>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/category-eyewear">Eyewear</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-first-aid-medical">
                      First Aid/Medical
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/category-head-face-protection">
                      Head &amp; Face Protection
                    </SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-hand-protection">
                      Hand Protection
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/category-protective-apparel">
                      Protective Apparel
                    </SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/category-foot-protection">
                      Foot Protection
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
              </SubMenuContainer>
            )}
          </MenuItem>
        )}
      </Toggle>

      <Toggle>
        {({ on, toggle, handleLeave }) => (
          <MenuItem onMouseLeave={handleLeave}>
            <StyledLink onClick={toggle}>Shop Brands</StyledLink>
            {on && (
              <SubMenuContainer>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/brand-ansell">Ansell</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/brand-crews">Crews</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/brand-dupont">Dupont</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/brand-gojo">Gojo</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/brand-microflex">Microflex</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/brand-west-chester">West Chester</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
              </SubMenuContainer>
            )}
          </MenuItem>
        )}
      </Toggle>

      <Toggle>
        {({ on, toggle, handleHover, handleLeave }) => (
          <MenuItem onMouseLeave={handleLeave}>
            <StyledLink onClick={toggle}>Resources</StyledLink>
            {on && (
              <SubMenuContainer>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/about-us">
                      About Us
                    </SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/blog">Blog</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/contact-us">Contact Us</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/shipping-return-policy">
                      Shipping &amp; Returns
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/terms-of-use">Terms of Use</SubLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubLink to="/request-a-quote">
                      Request a Quote
                    </SubLink>
                  </SubMenuItem>
                </NavSubMenu>
                <NavSubMenu>
                  <SubMenuItem>
                    <SubLink to="/custom-order-policy">Custom Order Policy</SubLink>
                  </SubMenuItem>
                </NavSubMenu>
              </SubMenuContainer>
            )}
          </MenuItem>
        )}
      </Toggle>
    </NavMenu>
  </Nav>
)

export default Menu
