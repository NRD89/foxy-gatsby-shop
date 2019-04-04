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

export default class ProductCatalog extends Component {
  render() {
    const { products } = this.props
    return (
      <ProductGrid>
        {products.map(product => {
          let categories = false
          if (product.node.data.categories[0].category) {
            categories = product.node.data.categories.map(
              c => c.category.document[0].data.name
            )
          }
          return (
            <ProductItem
              key={product.node.uid}
              node={product.node}
              categories={categories}
            />
          )
        })}
      </ProductGrid>
    )
  }
}

ProductCatalog.propTypes = {
  products: PropTypes.array.isRequired,
}