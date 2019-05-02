import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import Img from "gatsby-image"
import AddToCartBtn from "./AddToCartBtn"

const GridItem = styled.div`
  justify-items: center;
  justify-content: space-evenly;
  text-align: center;
  border: 3px solid #f6f7f8;
  border-radius: 5px;
  padding: 5px;
`

const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const ItemTitle = styled.p`
  line-height: 1.45em;
`

const ItemPrice = styled.p`
  color: #ff5100;
`

export default class ProductItem extends Component {
  render() {
    const { node } = this.props
    return (
      <GridItem>
        <ItemLink to={`${node.uid}`}>
          <Img fluid={node.data.image.localFile.childImageSharp.fluid} />
          <ItemTitle>{node.data.title.text}</ItemTitle>
        </ItemLink>
        <ItemPrice>${node.data.price}</ItemPrice>
        <form
          action="https://upsafetysolutions.foxycart.com/cart"
          method="post"
          accept-charset="utf-8"
        >
          <input
            type="hidden"
            name={`${node.data.name_hmac.text}`}
            value={`${node.data.name.text}`}
          />
          <input
            type="hidden"
            name={`${node.data.price_hmac.text}`}
            value={`${node.data.price}`}
          />
          <input
            type="hidden"
            name={`${node.data.item_code_hmac.text}`}
            value={`${node.data.item_code_sku.text}`}
          />
          <input
            type="hidden"
            name={`${node.data.cart_image_hmac.text}`}
            value={`${node.data.cart_image.url}`}
          />
          <input
            type="hidden"
            name={`${node.data.weight_hmac.text}`}
            value={`${node.data.weight}`}
          />
          <AddToCartBtn
            type="submit"
            value="Add To Cart"
            className="submit"
            style={{justifySelf:`end`,}}
          >
            ADD TO CART
          </AddToCartBtn>
          
        </form>
      </GridItem>
    )
  }
}

ProductItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
}
