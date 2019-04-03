import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Category = ({
  pageContext: { category },
  data: {
    products: { edges, totalCount },
  },
  location,
}) => {
  return (
    <Layout>
      <SEO title={`Category: ${category}`} pathname={location.pathname} />
      <h1 style={{ marginTop: "4rem" }}>
        {totalCount} {totalCount === 1 ? "Product" : "Products"}{" "}
        {totalCount === 1 ? "was" : "were"} tagged with "{category}"
      </h1>
      {edges.map(product => {
        let categories = false
        if (product.node.data.categories[0].category) {
          categories = product.node.data.categories.map(
            c => c.category.document[0].data.name
          )
        }
        return (
          <>
            <Link to={`/${product.node.uid}`}>
              <h1>{product.node.data.title.text}</h1>
              <img src={`${product.node.data.image.url}`} alt="" />
            </Link>
            <h4>Price: {product.node.data.price}</h4>
          </>
        )
      })}
    </Layout>
  )
}

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    products: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    products: allPrismicProduct(
      filter: {
        data: {
          categories: {
            elemMatch: {
              category: {
                document: { elemMatch: { data: { name: { eq: $category } } } }
              }
            }
          }
        }
      }
    ) {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
            image {
              url
            }
            name_hmac {
              text
            }
            name {
              text
            }
            price_hmac {
              text
            }
            price
            cart_image_hmac {
              text
            }
            cart_image {
              url
            }
            item_code_hmac {
              text
            }
            item_code_sku {
              text
            }
            weight_hmac {
              text
            }
            weight
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
