import axios from "axios";


export const admin_login = (data) => async (dispatch) => {
    // console.log(data);   
    
    dispatch({
        type: 'LOADER_RUN',
    })
    try {
        // console.log("ok");
        const response = await axios.post('/api/auth/admin-login', 
            data, 
            {
                withCredentials: true
            }
        );
        // console.log(response);
         localStorage.setItem('token', response.data.token);
         dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
                successMessage: response.data.successMessage,
                token: response.data.token
            } 
         })
    } catch (error) {
         dispatch({
            type: 'LOGIN_FAIL',
            payload: {
                error: error.response.data.errorMessage
            }
         })
        // console.log(error.response);
        // console.log(error.response.data.errorMessage);
    }
    
}


export const user_register = (data) => async (dispatch) => {
     console.log(data);   
    
    dispatch({
        type: 'LOADER_RUN',
    })
    try {
        // console.log("ok");
        const response = await axios.post('/api/auth/signup', 
            data, 
            {
                withCredentials: true
            }
        );
         console.log(response);
        // dispatch({
        //    type: 'LOGIN_SUCCESS',
        //    payload: {
        //        successMessage: response.data.successMessage,
        //        token: response.data.token
        //    } 
        // })
    } catch (error) {
        // dispatch({
        //    type: 'LOGIN_FAIL',
        //    payload: {
        //        error: error.response.data.errorMessage
        //    }
        // })
         console.log(error.response);
        // console.log(error.response.data.errorMessage);
    }
    
}



