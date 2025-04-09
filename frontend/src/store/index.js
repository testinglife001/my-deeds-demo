import { createStore, compose, applyMiddleware, combineReducers } from "redux";

// import ThunkMiddleware from "redux-thunk";
import {thunk} from 'redux-thunk';
import { adminReducer } from "./reducers/adminReducer";
import { dashboardCategoryReducer } from "./reducers/dashboard/dashboardCategoryReducer";
import { dashboardTagReducer } from "./reducers/dashboard/dashboardTagReducer";
import { dashboardArticleReducer } from "./reducers/dashboard/dashboardArticleReducer";
import { homeReducer } from "./reducers/home/homeReducer";
import { dashboardCategoryTypeReducer } from "./reducers/dashboard/dashboardCategoryTypeReducer";





const rootReducer = combineReducers({
    adminReducer,
    dashboardCategoryReducer,
    dashboardTagReducer,
    dashboardArticleReducer,
    dashboardCategoryTypeReducer,
    homeReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())    
// )
);



export default store; 
