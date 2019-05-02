import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductCatalog from "../components/productCatalog"

const Category = ({
  pageContext: { category },
  data: {
    products: { edges, totalCount },
  },
  location,
}) => {
  return (
    <Layout>
      <PageTransition>
        <SEO title={`${category}`} pathname={location.pathname} />
        <div style={{ textAlign: `center`, marginTop: `4rem`, marginBottom: `2rem` }}>
        <h1>
          {totalCount} {totalCount === 1 ? "Product" : "Products"}{" "} in "{category}"
        </h1>
        </div>
        <ProductCatalog products={edges} />
      </PageTransition>
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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
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
