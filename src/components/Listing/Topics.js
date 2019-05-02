import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

export default class Topics extends Component {
  render() {
    const { topics } = this.props
    return (
      <>
        {topics.map((top, i) => (
          <React.Fragment key={top}>
            {!!i && ', '}
            <Link to={`/${kebabCase(top)}`}>{top}</Link>
          </React.Fragment>
        ))}
      </>
    )
  }
}

Topics.propTypes = {
  topics: PropTypes.array.isRequired,
}
