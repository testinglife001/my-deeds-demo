import axios from "axios"



export const get_all_article = (currentPage, searchValue) => async (dispatch) => {
    // console.log(currentPage);

    try {
        // const response = await axios.get('')
        const response = await axios.get(`/api/home-article-get?currentPage=${currentPage}&&searchValue=${searchValue}`, 
            {
                withCredentials: true
            }
        );
        // console.log(response.data);
        dispatch({
            type: 'HOME_ARTICLE_GET_SUCCESS',
            payload: {
                articles: response.data.articles,
                perPage: response.data.perPage,
                articleCount: response.data.articleCount
            }
        })
    } catch (error) {
        console.log(error.message);
        console.log(error.response);
    }

}


export const get_home_tag_category = () => async (dispatch) => {
    //console.log("ok");

    try {
        const response = await axios.get('/api/home/get-tag-category', 
            {
                withCredentials: true
            }
        );
        // console.log(response);
        dispatch({
            type: 'HOME_TAG_CATEGORY_GET_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }

}


export const get_old_recent_article = () => async (dispatch) => {
    //console.log("ok");

    try {
        const response = await axios.get('/api/article/recent-old-get', 
            {
                withCredentials: true
            }
        );
        // console.log(response);
        dispatch({
            type: 'HOME_OLD_RECENT_ARTICLE_GET_SUCCESS',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }

}



