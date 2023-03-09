// Write your code here

import './index.css'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

const Header = props => {
  const onClickIcon = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <nav className="navbar">
      <img
        onClick={onClickIcon}
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />

      <Popup
        className=".popup-content"
        modal
        trigger={
          <button
            className="closebtn"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul>
              <li>
                <Link to="/" onClick={() => close()}>
                  <AiFillHome />
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => close()}>
                  <BsInfoCircleFill />
                  <h1>About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
  )
}

export default withRouter(Header)
