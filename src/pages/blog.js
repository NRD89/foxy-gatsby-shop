import React, { Component } from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"
import { graphql } from "gatsby"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/layout"
import Listing from "../components/Listing"

class Blog extends Component {
  render() {
    const {
      data: { posts },
    } = this.props
    return (
      <Layout>
        <PageTransition>
          <h2 style={{ marginTop: "4rem" }}>Recent posts</h2>
          <Listing posts={posts.edges} />
        </PageTransition>
      </Layout>
    )
  }
}

export default Blog

Blog.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            topics {
              topic {
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
