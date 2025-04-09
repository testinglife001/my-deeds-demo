import React, { useEffect, useRef, useState } from 'react'
import { Link, Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomePost from './HomePost';

const Home = () => {
  return (
    <div>
      Home Page
      <div className="text-dark text-2xlfont-bold">
        <div className="text-center" >
          <h1 >Your Home Page Content Here</h1>
          <Link to="/home-one" >
            Home One
          </Link>
          <br/>
          <Link to="/home-two" >
            Home Two
          </Link>
          <br/>
          <Link to="/home-three" >
            Home Three
          </Link>
          <br/>
          <Link to="/home-four" >
            Home Four
          </Link>
          <br/>
          <Link to="/home-five" >
            Home Five
          </Link>
          <br/>
          <Link to="/home-post" >
            Home Post
          </Link>
          <br/>
          <Link to="/article/:currentPage?" >
            Home Post Article
          </Link>

          <Switch>
                        
            {/* 
            <Route path="/home-post" component={HomePost} exact />
            */}
            <Route path="/article/:currentPage?" component={HomePost} exact />
            <Route path="/article/detail/:slug" component={Home} exact />

          </Switch> 

          </div>
        </div>
    </div>
  )
}

export default Home