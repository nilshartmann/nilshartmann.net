import React from 'react'
import { Link, withPrefix } from 'gatsby'

import SocialIcons from './SocialIcons'
import Sidebar from './Sidebar'

export default class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="Background">
        <header className="PageHeader">
          <div className="HeaderInner">
            <Link className="Title" to="/">
              Nils Hartmann
            </Link>
            <div>Software-Entwicklung | Software-Architektur</div>
          </div>
          <SocialIcons />
        </header>
        <div className="Main">
          <div className="Clearfix">
            <main>
              <div className="Container">{children}</div>
            </main>

            <aside>
              <Sidebar />
            </aside>
          </div>

          <footer>
            <nav>
              <Link to="/dienstleistungen">Dienstleistungen</Link>
              {' | '}
              <Link to="/pages/impressum">Impressum</Link> {' | '}
              <Link to="/pages/datenschutzerklaerung">
                Datenschutzerklärung
              </Link>
            </nav>
          </footer>
        </div>
      </div>
    )
  }
}
