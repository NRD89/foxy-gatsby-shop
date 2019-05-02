import React from "react"
import { graphql } from "gatsby"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import styled from "styled-components"
import Layout from "../components/layout"

const PostContainer = styled.div``

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <Layout>
      <PageTransition>
        <PostContainer>
          <h1>{data.title.text}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        </PostContainer>
      </PageTransition>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
