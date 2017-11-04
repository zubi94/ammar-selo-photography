import React from 'react'
import Gallery from './Gallery'
import Slider from './Slider'
import Photos from './Photos'
import {NavLink, Route, Switch} from 'react-router-dom'

function Home ({match}) {
  return (
    <div className='container'>

      <Slider />

      <div className="category-nav">
        <ul>
          <li>
            <NavLink onClick={() => window.scroll(0,900)} activeClassName='active' to='/home/portrait'><a>Portrait</a></NavLink>
          </li>
          <li>
            <NavLink onClick={() => window.scroll(0,900)} activeClassName='active' to='/home/wedding'><a>Wedding</a></NavLink>
          </li>
          <li>
            <NavLink onClick={() => window.scroll(0,900)} activeClassName='active' to='/home/food'><a>Food</a></NavLink>
          </li>
          <li>
            <NavLink onClick={() => window.scroll(0,900)} activeClassName='active' to='/home/products'><a>Products</a></NavLink>
          </li>
        </ul>
      </div>

      <div className="gallery">
        <Switch>
          <Route exact path="/home/general" render={() => <Gallery category="General" />} />
          <Route exact path="/home/portrait" render={() => <Gallery category="Portrait" />} />
          <Route exact path="/home/wedding" render={() => <Gallery category="Wedding" />} />
          <Route exact path="/home/real-estate" render={() => <Gallery category="Real Estate" />} />
          <Route exact path="/home/food" render={() => <Gallery category="Food" />} />
          <Route exact path="/home/products" render={() => <Gallery category="Products" />} />
        </Switch>
      </div>

      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          background-color: black;
          color: white;
        }

        section {
          margin-top: 50px;
        }

        .gallery {
          display: flex;
        }

        .ReactGridGallery {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 150px;
          padding-bottom: 50px;
        }

        .category-nav ul  {
          display: flex;
          color: white;
          list-style: none;
        }

        .category-nav li {
          margin-right: 15px;

        }

        .category-nav ul li a {
          font-size: 2em;
        }

        .category-nav ul li a:hover {
          color: skyblue;
        }

        active {
          color: skyblue;
          font-weight: bold;
        }

      `}</style>
    </div>
  )
}

export default Home
