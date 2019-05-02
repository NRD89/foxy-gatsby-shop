import { Component } from "react"

export default class ToggleRPC extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  handleHover = (event) => {
    this.setState({
      on: true,
    })
  }

  handleLeave = (event) => {
    this.setState({
      on: false,
    })
  }

  render() {
    const { children } = this.props
    return children({
      on: this.state.on,
      toggle: this.toggle,
      handleHover: this.handleHover,
      handleLeave: this.handleLeave,
    })
  }
}
