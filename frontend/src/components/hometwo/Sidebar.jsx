import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import './Sidebar.css';
import Card from './Card';

import blogPost from './blog.json';
import { NavLink } from 'react-router-dom';
import { get_all_article } from '../../store/actions/home/homeAction';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const { currentPage } = useParams();
    // console.log(currentPage);
    const dispatch = useDispatch();

    const {allArticle, articleCount, perPage, allCategory, allTag} = useSelector(state => state.homeReducer);

    useEffect(() => {
        dispatch(get_all_article(currentPage ? currentPage.toString().split('-')[1] : 1, ""));
    }, [currentPage]);


  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGAb43NxZswWRLw9RoxC8YwykXlLy_efq2r674Xj0ffRR3D-0P" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Rizwan  Khan I am a software developer specialization in Front end developement....:)</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>

                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        allArticle.length > 0 ?
                        allArticle.map((art,index) => 
                            <NavLink key={art._id} to={`/article/detail/${art.slug}`} >
                                <div className="recentPost">
                                    <h3>{art.title}</h3>
                                    <span>{moment(art.updatedAt).fromNow()}</span>
                                </div>
                            </NavLink>
                        ) : 
                        <h5>Article not found ...</h5>
                    }
                </div>

            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>

                <div className="cardHeader">
                    <span>Category && Categories</span>
                </div>

                <div className="recentPosts">

                    {
                        allCategory.length > 0 &&
                        allCategory.map((cat,index) => 
                            <NavLink key={index} to="" >
                                <div className="recentPost">
                                    <h3>
                                    <Link  >
                                        {cat._id}
                                    </Link>
                                    </h3>
                                    <span>( {cat.count} )</span>
                                </div>
                            </NavLink>
                        )
                    }
                </div>

            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>

                <div className="cardHeader">
                    <span>Tag && Tags</span>
                </div>

                <div className="recentPosts">

                    {
                        allTag.length > 0 ?
                        allTag.map((tag,index) => 
                            <NavLink key={index} to="" >
                                <div className="recentPost">
                                    <h3>{tag}</h3>
                                </div>
                            </NavLink>
                        ) : 
                        <h5>Article not found ...</h5>
                    }
                   
                </div>

            </Card>

      </div>
    
   )

 }

export default Sidebar