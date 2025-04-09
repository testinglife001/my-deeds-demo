const initState = {
    loader: false,
    allArticle: [],
    allCategory: [],
    allTag: [],
    oldArticle: [],
    recentArticle: [],
    articleCount: 0,
    perPage: 0,
    related_article: [],
    readMore: "",
    read_article: "",
    moreTag: [],
    blogs:[],
    blogsError: '',
    blogsSuccessMessage: '',
}


export const homeReducer = (state = initState,action) => {
    const {type, payload} =action;
    if(type === 'HOME_ARTICLE_GET_SUCCESS'){
        // console.log(payload);
        return {
            ...state,
            allArticle: payload.articles,
            articleCount: payload.articleCount,
            perPage: payload.perPage 
        }
    }
    if(type === 'HOME_TAG_CATEGORY_GET_SUCCESS'){
        return {
            ...state,
            allCategory: payload.allCategory,
            allTag: payload.allTag
        }
    }
    if(type === 'HOME_OLD_RECENT_ARTICLE_GET_SUCCESS'){
        return {
            ...state,
            recentArticle: payload.recentArticle,
            oldArticle: payload.oldArticle
        }
    }
    return state;
}

