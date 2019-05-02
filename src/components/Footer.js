import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import Btn from "./NLBtn"

import Logo from "../images/Asset 1.png"
import FaceBook from "../images/3185259 - circle design facebook material.png"
import Instagram from "../images/3185257 - circle design instagram material.png"
import YouTube from "../images/3185252 - circle design material youtube.png"
import Email from "../images/3185260 - circle design email material.png"


const PageFooter = styled.footer`
  background: #000;
  /* border-top: 2px solid #ffd100; */
  bottom: 0;
  color: #fff;
  left: 0;
  padding: 4em 0;
  right: 0;
  width: 100%;
  margin-top: 1.45rem;
  display: grid; 
  grid-template-columns: 4vw 1fr 4vw; 
  grid-template-rows: auto auto;

  @media (min-width: 960px) {

  }
`

const FooterContainer = styled.div`
  grid-column: 2 / 3;
  display: grid; /* ACTING AS A GRID CONTAINER */ grid-template-columns: 2fr 2fr 2fr 3fr; 
  grid-template-rows: auto auto; 
  grid-template-areas: "logo navigation secondary social" "contact contact . newsletter";

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;  
    grid-template-areas: "logo social" "contact newsletter";
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    grid-template-areas: "logo" "social" "newsletter" "contact";
  }
`

const LogoWrapper = styled.div`
  grid-area: logo;
  max-width: 300px;

  @media (max-width: 768px) {
    justify-self: center; 
    align-self: center;
  }
`

const FooterNav = styled.ul`
  grid-area: navigation; 
  justify-self: center;
  margin: 0;
  padding: 0;

  @media (max-width: 960px) {
    display: none;
  }
`

const FooterSecondaryNav = styled.ul`
  grid-area: secondary; 
  justify-self: center;
  margin: 0;
  padding: 0;

  @media (max-width: 960px) {
    display: none;
  }
`

const ListItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const PageLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: #fff;
  transition: all ease-in-out .4s;

  &:hover { 
    color: #FFD100; 
  }
`

const SocialNetworks = styled.div`
  grid-area: social;
  display: grid; /* ACTING AS A GRID CONTAINER */ grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: auto auto; 
  justify-items: center;
  border-bottom: 2px solid #ffd100;

  h3 {
    grid-column: 1 / -1;

    @media (max-width: 768px) {
      line-height: 3rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const ContactBlock = styled.div`
  grid-area: contact;
  align-self: end;

  @media (max-width: 768px) {
    justify-self: center; 
    align-self: center;
  }
`

const OutsideLink = styled.a`
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: #fff;
  display: block; 
  border: 2px solid #fff; 
  padding: 0.5rem; 
  margin: 10px 0 0; 
  text-align: center; 
  width: 70%;
  transition: all ease-in-out .4s;

  &:hover { 
    border: 2px solid #FF5100; 
    color: #FFD100; 
  }

  @media (max-width: 768px) {
    margin: 5px auto;
  }
`

const NewsLetter = styled.div`
  grid-area: newsletter;
  align-self: end;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

const BottomLine = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  color: #FFF;
  background: #6B6B6B;
  font-size: .7rem;

  p {
    margin: 0;
  }
`


export default function Footer() {
  return (
    <>
    <PageFooter>
      <FooterContainer>
        <LogoWrapper>
          <Link to="/">
            <img src={Logo} alt="Footer Logo" />
          </Link>
        </LogoWrapper>
        <FooterNav>
          <ListItem>
            <PageLink to="/">Home</PageLink>
          </ListItem>
          <ListItem>
            <PageLink to="/about-us">About Us</PageLink>
          </ListItem>
          <ListItem>
            <PageLink to="/blog">Blog</PageLink>
          </ListItem>
          <ListItem>
            <PageLink to="/contact-us">Contact Us</PageLink>
          </ListItem>
        </FooterNav>
        <FooterSecondaryNav>
          <ListItem>
            <PageLink to="/request-a-quote">Request a Quote</PageLink>
          </ListItem>
          <ListItem>
            <PageLink to="/shipping-return-policy">Shipping &amp; Returns</PageLink>
          </ListItem>
          <ListItem>
            <PageLink to="/custom-order-policy">Custom Order Policy</PageLink>
          </ListItem>
          <ListItem>
            <PageLink to="/terms-of-use">Terms of Use</PageLink>
          </ListItem>
        </FooterSecondaryNav>
        <ContactBlock>
          <h3>We're happy to hear from you!</h3>
          <OutsideLink href="tel:999-999-4321">
            <i/> 999-999-4321
          </OutsideLink>
          <OutsideLink href="mailto:sales@upsafetysolutions.com">sales@upsafetysolutions.com</OutsideLink>
        </ContactBlock>
        <NewsLetter>
          <div style={{textAlign: `center`,}}>
            <div style={{paddingTop: `1.45rem`,}}>
              <a href="mailto:sales@upsafetysolutions.com">
                <img src={Email} alt="Email" />
              </a>
            </div>
            <p>Subscribe to our Newsletter</p>
          </div>
          <div style={{textAlign: `center`,}}>
            <form style={{margin: `0`}} name="subscribe" method="POST" data-netlify-recaptcha="true" data-netlify="true">
              <div data-netlify-recaptcha="true"></div>
              <input style={{height: `2rem`, borderRadius: `3px`, border: `0`}} type="email" name="Enter Your Email Address" size="20" required />
              <Btn type="submit" value="Submit" />
            </form>
          </div>
        </NewsLetter>
        <SocialNetworks>
          <h3>Share our content!</h3>
          <div style={{justifySelf: `right`}} >
            <a href="https://www.facebook.com/Up-Safety-Solutions-435208757038430">
              <img src={FaceBook} alt="Facebook Logo" />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCexyI71DdTJfbMUBzQ0dzTQ/featured?view_as=public">
              <img src={YouTube} alt="YouTube Logo" />
            </a>
          </div>
          <div style={{justifySelf: `left`}} >
            <img src={Instagram} alt="Instagram Logo" />
          </div>
        </SocialNetworks>
      </FooterContainer>
    </PageFooter>
    <BottomLine>
      <p>© {new Date().getFullYear()} Up Safety Solutions. All Rights Reserved.</p>
    </BottomLine>
    </>
  )
}
