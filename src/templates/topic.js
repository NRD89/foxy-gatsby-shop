import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import Layout from "../components/layout"
import Listing from "../components/Listing"

const Hero = styled.header`
  background-color: #ffd100;
  padding: 1rem;
  h1 {
    color: black;
  }
`

const Headline = styled.p`
  font-family: "Source Sans Pro", -apple-system, "BlinkMacSystemFont",
    "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  color: black;
  font-size: 1.25rem;
  a {
    font-style: normal;
    font-weight: normal;
  }
`

const Title = styled.p`
  font-size: 1.4444rem;
  color: black;
`

const Topic = ({
  pageContext: { topic },
  data: {
    posts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <PageTransition>
      <Hero>
        <Headline>Topic</Headline>
        <h1>{topic}</h1>
      </Hero>
      <Title style={{ marginTop: "4rem" }}>
        {totalCount} {totalCount === 1 ? "Post" : "Posts"}{" "}
        {totalCount === 1 ? "was" : "were"} tagged with "{topic}"
      </Title>
      <Listing posts={edges} />
    </PageTransition>
  </Layout>
)

export default Topic

Topic.propTypes = {
  pageContext: PropTypes.shape({
    topic: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query TopicPage($topic: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          topics: {
            elemMatch: {
              topic: {
                document: { elemMatch: { data: { name: { eq: $topic } } } }
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
            date(formatString: "MM.DD.YYYY")
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
