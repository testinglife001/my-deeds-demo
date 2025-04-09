import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast, {Toaster} from 'react-hot-toast';
import {htmlToText} from 'html-to-text';
import { delete_article, get_all_article } from '../../store/actions/dashboard/articleAction';
import Pagination from '../home/Pagination';

const DashboardArticle = ({history}) => {

  const dispatch = useDispatch();
  const {currentPage} = useParams();

  const { allArticle, perPage, articleCount, articleSuccessMessage } = useSelector(state=>state.dashboardArticleReducer);

  useEffect(() => {
      dispatch(get_all_article(currentPage ? currentPage.toString().split('-')[1] : 1, ""));
  },[currentPage,dispatch])

  useEffect(()=> {

        if(articleSuccessMessage){
            toast.success(articleSuccessMessage)
            dispatch({
                type: 'ARTICLE_SUCCESS_MESSAGE_CLEAR'
            })
            dispatch(get_all_article(currentPage ? currentPage.toString().split('-')[1] : 1, ""));
            // history.push('/dashboard/all-article');
        }

    },[dispatch,articleSuccessMessage])


  return (
  
    <div >
        <Toaster position={'bottom-center'} 
            reverseOrder={false}
            toastOptions={
                {
                    style: {
                        fontSize: '15px'
                    }
                }
            }
        />

        <Helmet>
            <title>All Article</title>
        </Helmet>
        Dashboard Article
        <div className="Task ">  
            <h5 className="Task-header">All Articles</h5>
            <div className="Task-header border-bottom-0">
                
                <form className="d-flex align-items-center ">
                    <span className="position-absolute ps-3 search-icon">
                    <i className="fe fe-search"></i>
                    </span>
                    <input  className="form-control ps-6" 
                            placeholder="Search Article" 
                            type="text"
                            onChange={(e) =>dispatch(get_all_article(currentPage ? 
                                currentPage.toString().split('-')[1] : 1, e.target.value ))}    />
                </form>
            </div>
            <div className="Task-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                            <th scope="col">Total</th>
                            <th className="border-0"> 
                                DATE CREATED
                                <br/>
                                DATE UPDATED
                            </th>
                            <th className="border-0">
                            STATUS
                            </th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allArticle.length > 0 ?
                                allArticle.map((art, index) => 
                                    
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{art.title}</td>
                                        {/* 
                                        src="http://localhost:3000/articalImage/pp-img.jpg"
                                        */}
                                        <td>
                                            <img                  
                                                src={`http://localhost:3000/articalImage/${art?.image}`}  
                                                className="img-fluid img-responsive center-block" width="120" 
                                                alt="Article Image" />
                                            <br/>
                                            {art?.image}
                                        </td>
                                        <td> 
                                            {
                                            // htmlToText(art.articleText)
                                            }
                                            <br/>
                                            {art.articleText.substring(0, 10)}
                                        </td>
                                        <td>{art.createdAt} || {art.updatedAt}</td>
                                        
                                        <td>
                                            
                                            <Link to={`/article/details/${art.slug}`} >
                                                View
                                            </Link>
                                        </td>
                                        <td className="align-middle border-top-0">
                                            <span className="badge-dot bg-success"></span>Active
                                        </td>
                                        
                                        <td className="text-muted align-middle border-top-0">
                                            <span className="dropdown dropstart">                                   
                                            <span className="dropdown-header"></span>
                                                <a className="dropdown-item" href="#">
                                                <i className="fe fe-send dropdown-item-icon"></i>Publish</a>
                                                <a className="dropdown-item" href="#">
                                                    <i className="fe fe-inbox dropdown-item-icon"></i>Moved
                                                    Draft
                                                </a>                                               
                                                                                
                                                <Link  to={`/dashboard/article/edit/${art.slug}`} >
                                                <button type="button" className="btn btn-default btn-sm"
                                                        >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                                </svg>
                                                Edit
                                                </button>
                                                </Link>                                                
                                                
                                                <br/>
                
                                                <button type="button" className="btn btn-default btn-sm"
                                                    // onClick={() => dispatch(delete_tag(t._id))} 
                                                    onClick={()=> dispatch(delete_article(art._id))}
                                                    >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                                </svg>
                                                Delete
                                                </button>
                                                
                                            </span>                                  
                                        </td>
                                    </tr>
                                    
                                )
                                :
                                "Article not found ..."
                            }

                            
                        </tbody>
                    </table>
                </div>
                <a href="#" className="btn btn-block btn-light">View all</a>
            </div>
        </div>

        {
            articleCount === 0 || articleCount < perPage ? "" 
            : 
            <Pagination
                pageNumber={currentPage ? currentPage.split('-')[1] : 1}
                perPage={perPage}
                itemCount={articleCount}
                path='/dashboard/all-article'    
            />
        }

        

    </div>  
  )
}

export default DashboardArticle
