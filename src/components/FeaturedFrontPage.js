import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ProductItem from "./productItem"

const ProductGrid = styled.section`
  display: grid;
  grid: auto/ repeat(4, 1fr);
  grid-gap: 40px 15px;

  @media (max-width: 922px) {
    grid: auto/ repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid: auto/ repeat(2, 1fr);
  }

  @media (max-width: 470px) {
    grid: auto/ repeat(1, 1fr);
  }
`

export default class FeaturedFrontPage extends Component {
  render() {
    const { products } = this.props
    console.log(products);
    return (
      <ProductGrid>
        {products.map(product => {
          let featured = false
          if (product.node.data.front_page_products[0].featured_on) {
            featured = product.node.data.front_page_products.map(
              f => f.featured_on.document[0].data.featured
            )
          }
          return (
            <ProductItem
              key={product.node.uid}
              node={product.node}
            />
          )
        })}
      </ProductGrid>
    )
  }
}

FeaturedFrontPage.propTypes = {
  products: PropTypes.array.isRequired,
}