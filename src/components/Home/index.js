// Write your code here
// import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="mid">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
    </div>
    <div className="larg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
