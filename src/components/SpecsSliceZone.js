import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SpecsTable  from "../slices/SpecsTable"

const Content = styled.div`
  max-width: 100%;
  height: 100%;
`

export default class SpecsSliceZone extends Component {
  render() {
    const { specSlice } = this.props
    const slice = specSlice.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case 'specs':
          return <SpecsTable key={s.id} input={s} />
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}

SpecsSliceZone.propTypes = {
  specSlice: PropTypes.array.isRequired,
}
