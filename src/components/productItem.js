import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const GridItem = styled.div`
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 3px solid #F6F7F8;
  border-radius: 5px;
  padding: 5px;
`

const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const ItemTitle = styled.h5`
  line-height: 1.45em;
`

const ItemPrice = styled.p`
  color: #ff5100;
`

export default class ProductItem extends Component {
  render() {
    const { node} = this.props
    return (
      <GridItem>
        <ItemLink to={`${node.uid}`}>
          <Img fluid={node.data.image.localFile.childImageSharp.fluid}/>
          <ItemTitle>{node.data.title.text}</ItemTitle>
        </ItemLink>
        <ItemPrice>{node.data.price}</ItemPrice>
      </GridItem>
    )
  }
}

ProductItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
}
