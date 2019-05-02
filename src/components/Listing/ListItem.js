import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import Topics from "./Topics"

const Item = styled.li`
  margin-bottom: 1.45rem;
`

const Headline = styled.p`
  color: grey;
  margin-bottom: 1rem;
  a {
    color: grey;
    font-style: normal;
    font-weight: normal;
  }
`

const StyledLink = styled(Link)`
  font-size: 2.369rem;
  color: black;
  font-style: normal;
`

export default class ListItem extends Component {
  render() {
    const { node, topics } = this.props
    return (
      <Item>
        <Headline>
          {node.data.date} —{" "}
          {topics && <Topics topics={topics} />}
        </Headline>
        <StyledLink to={node.uid}>{node.data.title.text}</StyledLink>
      </Item>
    )
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  topics: PropTypes.array.isRequired,
}
