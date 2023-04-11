import { Component } from 'react'

const uikit = require('uikit')
const icons = require('uikit/dist/js/uikit-icons.min')

export default class UIKit extends Component {
  constructor (props) {
    super(props)
    this.state = { ready: false }
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      uikit.use(icons)
      this.setState({ ready: true })
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}
