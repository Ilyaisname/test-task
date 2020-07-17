import React, {Component} from 'react'
import './Layout.css'


class Layout extends Component {
  render() {
    return (
      <main className="Layout">

        { this.props.children }
        
      </main>
    )
  }
}

export default Layout