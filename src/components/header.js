import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link
        to="/hand-protection"
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `5px`,
        }}
      >
        Hand Protection
      </Link>
      <Link
        to="/eye-protection"
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `5px`,
        }}
      >
        Eye Protection
      </Link>
      <p data-fc-id="minicart">
        <a href="https://upsafetysolutions.foxycart.com/cart?cart=view">
          <span data-fc-id="minicart-quantity">0</span>
          <span data-fc-id="minicart-singular"> item </span>
          <span data-fc-id="minicart-plural"> items </span>
          in cart. Total cost: $<span data-fc-id="minicart-order-total">0</span>
        </a>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
