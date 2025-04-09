import axios from "axios";

export const get_tag_category = () => async (dispatch) => {
    try {
        // console.log('okko');
        const response = await axios.get(`/api/dashboard/get-tag-category`, 
            // data,
                {
                    withCredentials: true
                }
            );
            // console.log(response.data);
        dispatch({
            type: 'DASHBOARD_CATEGORY_TAG_GET_SUCCESS',
            payload: {
                 allTag: response.data.allTag,
                allCategory: response.data.allCategory
            }
        });

    } catch (error) {
            console.log(error.response);
    }
}


export const add_article = (data) => async (dispatch) => {
    // console.log(data);
    // console.log(data.get('title'));
    // console.log(data.get('category'));
    // console.log(data.get('tag'));
    // console.log(data.get('image'));
    // console.log(data.get('text'));
    
    
    dispatch({
        type: 'ARTICLE_SET_LOADER',
    })

    try {
        const response = await axios.post('/api/dashboard/add-article', 
            data,
            {
                withCredentials: true
            }
        );
         console.log(response.data);
        // dispatch({
        //    type: 'ARTICLE_ADD_SUCCESS',
        //    payload: {
        //        successMessage: response.data.successMessage
        //    }
        // })
        
    } catch (error) {
        // console.log(error.response);
         dispatch({
            type: 'ARTICLE_ADD_FAIL',
            payload: {
                errorMessage: error.response.data.errorMessage
            }
         })
    }
    
    
}


export const get_all_article = (currentPage, searchValue) => async (dispatch) => {
    // console.log(currentPage);

    try {
        const response = await axios.get(`/api/dashboard/get-article?currentPage=${currentPage}&&searchValue=${searchValue}`, 
            {
                withCredentials: true
            }
        );
        // console.log(response.data);
        dispatch({
            type: 'DASHBOARD_ARTICLE_GET_SUCCESS',
            payload: {
                allArticle: response.data.allArticle,
                perPage: response.data.perPage,
                articleCount: response.data.articleCount
            }
        });
    } catch (error) {
        console.log(error.response);
    }

}


export const edit_article = (articleSlug) => async (dispatch) => {
    // console.log(currentPage);
    // console.log(articleSlug);

    try {
        const response = await axios.get(`/api/dashboard/edit-article/${articleSlug}`, 
            {
                withCredentials: true
            }
        );
        // console.log(response.data);
        dispatch({
            type: 'EDIT_ARTICLE_GET_SUCCESS',
            payload: {
                editArticle: response.data.editArticle
            }
        });
        dispatch({
            type: 'EDIT_ARTICLE_REQUEST_SET'
        })
        
    } catch (error) {
        console.log(error.response);
    }

}


export const update_article = (data) => async (dispatch) => {

    dispatch({
        type: 'ARTICLE_SET_LOADER',
    })

    // console.log(data);
    
    try {
        
        const response = await axios.post('/api/dashboard/update-article', 
            data,
            {
                withCredentials: true
            }
        );
        
        // console.log(response.data);
        
        dispatch({
            type: 'ARTICLE_UPDATE_SUCCESS',
            payload: {
                successMessage: response.data.successMessage
            }
        })
        
        
    } catch (error) {
        // console.log(error.response);
        dispatch({
            type: 'ARTICLE_UPDATE_FAIL',
            payload: {
                errorMessage: error.response.data.errorMessage
            }
        })
    }

}


export const delete_article = (articleId) => async (dispatch) => {
    try {
        const response = await axios.delete(`/api/dashboard/delete-artical/${articleId}`, 
            // articleId,
            {
                withCredentials: true
            }
        );
        dispatch({
            type: 'ARTICLE_DELETE_SUCCESS',
            payload: {
                successMessage: response.data.successMessage
            }
        })
    } catch (error) {
        dispatch({
            type: 'ARTICLE_DELETE_FAIL',
            payload: {
                errorMessage: error.response.data.errorMessage
            }
        })
    }
}


