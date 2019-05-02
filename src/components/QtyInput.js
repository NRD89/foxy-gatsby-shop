import React from "react"
import styled from "styled-components"

const Input = styled.input`
  border: 3px solid #000;
  font-family: inherit;
  font-size: inherit;
  color: #000 !important;
  background: none;
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
`

export default function QtyInput() {
  return <Input />
}
