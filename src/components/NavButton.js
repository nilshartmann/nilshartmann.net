// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react'
import { Link } from 'gatsby'

const BACK = Symbol('Back')

export default class NavButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const iconOrLabel = this.props.icon ? (
      <i className={`fa fa-${this.props.icon} fa-${this.props.scale}`} />
    ) : (
      this.props.label
    )

    if (!this.props.url) {
      return <div className="NavButton Disabled">{iconOrLabel}</div>
    }

    if (this.props.url === BACK) {
      return (
        <div
          className="NavButton"
          title={this.props.title || 'Back'}
          onClick={() => {
            window.history.back()
          }}
        >
          {iconOrLabel}
        </div>
      )
    }

    return (
      <Link className="NavButton" to={this.props.url} title={this.props.title}>
        {iconOrLabel}
      </Link>
    )
  }
}

NavButton.BACK = BACK

NavButton.defaultProps = {
  scale: '2x',
}
