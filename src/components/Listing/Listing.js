import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ListItem from "./ListItem"

const List = styled.ul`
  margin-top: 4rem;
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
`

export default class Listing extends Component {
  render() {
    const { posts } = this.props
    return (
      <List>
        {posts.map(post => {
          let topics = false
          if (post.node.data.topics[0].topic) {
            topics = post.node.data.topics.map(
              t => t.topic.document[0].data.name
            )
          }
          return (
            <ListItem
              key={post.node.uid}
              node={post.node}
              topics={topics}
            />
          )
        })}
      </List>
    )
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
}
