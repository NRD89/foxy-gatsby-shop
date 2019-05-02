import React, { Component } from "react"
import styled from "styled-components"
import Portal from "./Portal"

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled.div`
  position: relative;
  background-color: white;
  padding: 30px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  box-shadow: 3px 3px 1px lightgrey;
  /* top: -181px;

  @media (max-width: 480px) {
    top: -191px;
  } */
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props
    return (
      <>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>X</CloseButton>
              <div>{children}</div>
            </ModalCard>
          </ModalWrapper>
        )}
      </>
    );
  }
}
