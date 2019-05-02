import React from "react"
import PropTypes from "prop-types"

const SpecsTable = ({ input }) => (
  <div style={{width: `100%`}}> dangerouslySetInnerHTML={{ __html: input.primary.specs.html }} </div>
)

export default SpecsTable

SpecsTable.propTypes = {
  input: PropTypes.object.isRequired,
}
