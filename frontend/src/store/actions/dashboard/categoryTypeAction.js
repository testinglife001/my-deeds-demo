import axios from "axios";



export const get_category_type = () => async (dispatch) => {
    try {
        // console.log('sad');
        const response = await axios.get('/api/dashboard/getcategorytype', 
            // data,
                {
                    withCredentials: true
                }
            );
            console.log(response.data); 
            // console.log(response); 
         dispatch({
            type: 'CATEGORY_TYPE_ADD_GET_SUCCESS',
            payload: {
                allCategoryType: response.data.allCategoryType,
                // perPage: response.data.perPage,
                // categoryCount: response.data.categoryCount
            }
         });
    } catch (error) {
            console.log(error.response);
    }
}

export const add_category_type = (data) => async (dispatch) => {
    // console.log(data);
    
     dispatch({type: 'SET_LOADER'});
    try {
        const response = await axios.post('/api/dashboard/add-category-type', 
            data,
            {
                withCredentials: true
            }
        );
        // console.log(response.data);
         dispatch({
            type: 'CATEGORY_TYPE_ADD_SUCCESS',
            payload: {
                successMessage: response.data.successMessage
            }
         })
    } catch (error) {
        // console.log(error.response.data);
         dispatch({
            type: 'CATEGORY_TYPE_ADD_FAIL',
            payload: {
                error: error.response.data.errorMessage
            }
         })
    }
    
}





export const get_all_category_type = (page, searchValue) => async (dispatch) => {
    try {
        // console.log(page);
        const response = await axios.get(`/api/dashboard/get-category-type?page=${page}&&searchValue=${searchValue}`, 
            // data,
                {
                    withCredentials: true
                }
            );
             console.log(response.data); 
        // dispatch({
        //    type: 'DASHBOARD_CATEGORY_GET_SUCCESS',
        //    payload: {
        //        allCategory: response.data.allCategory,
        //        perPage: response.data.perPage,
        //        categoryCount: response.data.categoryCount
        //    }
        // });
    } catch (error) {
            console.log(error.response);
    }
}


export const edit_category = (categorySlug) => async (dispatch) => {
    // console.log(categorySlug);
    try {
        const response = await axios.get(`/api/dashboard/edit-category/${categorySlug}`, 
                {
                withCredentials: true
                }
            );
        // console.log(response.data);
        dispatch({
            type: 'EDIT_CATEGORY_GET_SUCCESS',
            payload: {
                editCategory: response.data.editCategory
            }
        });
        dispatch({
            type: 'EDIT_REQUEST_SET'
        })

    } catch (error) {
        console.log(error.response);
    }
}


export const update_category = (id, data) => async (dispatch) => {
    // console.log(categorySlug);
    try {
        const response = await axios.patch(`/api/dashboard/update-category/${id}`,
                data, 
                {
                withCredentials: true
                }
            );
        // console.log(response.data);
        dispatch({
            type: 'CATEGORY_UPDATE_SUCCESS',
            payload: {
                successMessage: response.data.successMessage
            }
        });

    } catch (error) {
        // console.log(error.response);
        dispatch({
            type: 'CATEGORY_UPDATE_FAIL',
            payload: {
                error: error.response.data.errorMessage
            }
        })
    }
}



export const delete_category = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`/api/dashboard/delete-category/${id}`, 
                {
                    withCredentials: true
                }
            );
        dispatch({
            type: 'CATEGORY_DELETE_SUCCESS',
            payload: {
                successMessage: response.data.successMessage
            }
        })
    } catch (error) {
        console.log(error.response);
    }
}


