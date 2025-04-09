import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast, {Toaster} from 'react-hot-toast';
import Pagination from '../home/Pagination';
import moment from 'moment';
import Card from '../../components/hometwo/Card';
import { get_all_article } from '../../store/actions/home/homeAction';



/**
* @author
* @function HomePost
**/

const HomePost = (props) => {

    const { currentPage } = useParams();
    // console.log(currentPage);
    const dispatch = useDispatch();

    const {allArticle, articleCount, perPage} = useSelector(state => state.homeReducer);

    useEffect(() => {
        dispatch(get_all_article(currentPage ? currentPage.toString().split('-')[1] : 1, ""));
    }, [currentPage]);

  return(
        <div className="blogPostContainer">

        {
            allArticle.length > 0 ?
            allArticle.map((art,index) => 
                <Card key={index} >
                    <div className="blogHeader">
                        <span className="blogCategory">Category {art.category}</span>
                        <span className="blogCategory">Tag {art.tag}</span>
                        <h1 className="postTitle">Title {art.title}</h1>
                            <span className="postedBy">posted on 
                                postedOn {moment(art.createdAt).fromNow()} 
                                by author {art.adminName}
                            </span>
                    </div>

                    <div className="postImageContainer">
                        <img 
                            src={`http://localhost:3000/articalImage/${art.image}`} 
                            alt="Post Image" 
                            />
                        
                    </div>

                    <div className="postContent">
                        <Link to={`/article/detail/${art.slug}`} >
                            <h3>Title {art.title}</h3>
                        </Link>
                        <p>Text {art.articleText}
                            {
                                // art.articleText.substring(0, 10) + '...'
                            }
                        </p>
                    </div>
                    
                </Card>
            ) : 
                <h3>Article not found ...</h3>
        }

        {
            perPage  < articleCount ?
            <Pagination 
                pageNumber={currentPage ? currentPage.split('-')[1] : 1}
                perPage={perPage}
                itemCount={articleCount}
                path="/article"
                /> 
            : null
        }

        </div>
   )

 }

export default HomePost