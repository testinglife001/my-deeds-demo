import { jwtDecode } from "jwt-decode";

const initState = {
    authenticate: false,
    userInfo: '',
    errorMessage: '',
    successMessage: '',
    loader: false
}

const DT = (token) => {
    // const decodedToken = jwt_decode(token);
    const decodedToken = jwtDecode(token);
    // console.log(decodedToken);
    const expiresTime = new Date(decodedToken.exp*1000);
    if(new Date() > expiresTime){
        localStorage.removeItem('token');
        return null;
    } else {
        return decodedToken;
    }
}
const getToken = localStorage.getItem('token');
if(getToken){
    const decodeToken = DT(getToken);
    if(decodeToken) {
        initState.userInfo = decodeToken;
        initState.authenticate = true;
    }
}

export const adminReducer = (state=initState, action) => {
    const {payload, type} = action;
    if(type === 'LOADER_RUN'){
        return {
            ...state,
            loader: true
        }
    }
    if(type === 'LOGIN_SUCCESS' ){
        // DT(payload.token);
        return {
            ...state,
            loader: false,
            errorMessage: '',
            authenticate: true,
            userInfo: DT(payload.token),
            successMessage: payload.successMessage,
        } 
    }
    if(type === 'LOGIN_SUCCESS_MESSAGE_CLEAR'){
        return {
            ...state,
            successMessage: ''
        }
    }
    if(type === 'LOGIN_FAIL'){
        return {
            ...state,
            loader: false,
            errorMessage: payload.error,
            authenticate: false,
            userInfo: '',
            successMessage: '',
        }
    }
    if(type === 'LOGIN_ERROR_CLEAR' || type === 'ERROR_CLEAR'){
        return {
            ...state,
            errorMessage: ''
        }
    }
    return state;
}
