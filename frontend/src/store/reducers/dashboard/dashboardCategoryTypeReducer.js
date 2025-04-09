const categoryState = {
    loader: false,
    categoryTypeError: '',
    categoryTypeSuccessMessage: '',
    allCategoryType: [],
    perPage: 0,
    categoryTypeCount: 0,
    editCategory: '',
    editRequest: false
}


export const dashboardCategoryTypeReducer = (state=categoryState, action) => {
    const {payload, type} = action;
    if(type === 'SET_LOADER'){
        return {
            ...state,
            loader: true
        }
    } 
    if(type === 'CATEGORY_TYPE_ADD_GET_SUCCESS') {
        console.log(payload);
       return {
           ...state,
           allCategoryType: payload.allCategoryType,
           // perPage: payload.perPage,
           // categoryCount: payload.categoryCount
       }
   }
    if(type === 'CATEGORY_TYPE_ADD_SUCCESS' || type === 'CATEGORY_DELETE_SUCCESS' || type === 'CATEGORY_UPDATE_SUCCESS'){
        return {
            ...state,
            loader: false,
            categoryTypeSuccessMessage: payload.successMessage,
            categoryTypeError: ''
        }
    } 
    // if(type === 'CATEGORY_TYPE_ADD_CATEGORY_TYPE_GET_SUCCESS') {
        // console.log(payload);
    //    return {
    //        ...state,
    //        allCategoryType: payload.allCategoryType,
    //        // perPage: payload.perPage,
    //        // categoryCount: payload.categoryCount
    //    }
    //}
    if(type === 'DASHBOARD_CATEGORY_GET_SUCCESS') {
        // console.log(payload);
        return {
            ...state,
            allCategory: payload.allCategory,
            perPage: payload.perPage,
            categoryCount: payload.categoryCount
        }
    }
    if(type === 'CATEGORY_TYPE_SUCCESS_MESSAGE_CLEAR'){
        return {
            ...state,
            categorySuccessMessage: ''
        }
    }
    if(type === 'CATEGORY_TYPE_ERROR_MESSAGE_CLEAR'){
        return {
            ...state,
            categoryError: ''
        }
    }
    if(type === 'CATEGORY_TYPE_ADD_FAIL' || type === 'CATEGORY_UPDATE_FAIL'){
        return {
            ...state,
            loader: false,
            categoryTypeError: payload.error,
            categoryTypeSuccessMessage: ''
        }
    }
    if(type === 'EDIT_CATEGORY_GET_SUCCESS') {
        return {
            ...state,
            editCategory: payload.editCategory 
        }
    }
    if(type === 'EDIT_REQUEST_SET') {
        return {
            ...state,
            editRequest: true
        }
    }
    if(type === 'EDIT_REQUEST_CLEAR') {
        return {
            ...state,
            editRequest: false
        }
    }
    return state;
}

