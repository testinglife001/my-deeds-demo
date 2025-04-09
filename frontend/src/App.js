// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import AdminLoginPage from './pages/auth/AdminLoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';

import Home from './pages/home/Home';
import EmailVerificationPage from './pages/auth/EmailVerificationPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import { useAuthStore } from './authStore/authStore';
import LoadingSpinner from './components/LoadingSpinner';
// import Dashboard from './pages/home/Dashboard';
import RedirectAuthenticatedUser from './utils/RedirectAuthenticatedUser';
import DashboardPage from './pages/dashboard/DashboardPage';
import HomeOne from './pages/home/HomeOne';
import HomeTwo from './pages/home/HomeTwo';
import HomeTwoPost from './components/hometwo/HomeTwoPost';
import ImageGallary from './pages/home/ImageGallary';
import ImageDetails from './pages/home/ImageDetails';
import HomePost from './pages/home/HomePost';
import HomeThree from './pages/home/HomeThree';
import HomeFour from './pages/home/HomeFour';
import HomeFive from './pages/home/HomeFive';
import PostForm from './pages/home/PostForm';
import PostList from './pages/home/PostList';



/*
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
		// return <Navigate to='/login' replace />;
    return <Redirect to='/login'  />;
	}
	 if (!user.isVerified) {
	// return <Navigate to='/verify-email' replace />;
    return <Redirect to='/verify-email'  />;
	 }
  // return isAuthenticated ? children : <Redirect to="/signup" />;
  return children;
};
*/
/*
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user?.isVerified) {
    // return <Redirect to="/dashboard" />;
    return <Redirect to="/" />;
  }
  return children;
};
*/


function App() {

  // const {isCheckingAuth,checkAuth} = useAuthStore();

  // useEffect(() => {
  //  checkAuth();
  // },[checkAuth]);

  // console.log("isAuthenticated",isAuthenticated);
  // console.log("user",user);

  // if(isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="App">
      
      <div  >
      
      <Router>
      <Switch>  
        <Route path="/" component={Home} exact />

        <Route path="/home-one" component={HomeOne} exact />
        <Route path="/home-two" component={HomeTwo} exact />
        <Route path="/home-three" component={HomeThree} exact />
        <Route path="/home-four" component={HomeFour} exact />
        <Route path="/home-five" component={HomeFive} exact />
        <Route path="/home-post" component={HomePost} exact />
        <Route path="/post/:slug" component={HomeTwoPost} />
        


        <Route path="/admin/login" component={AdminLoginPage} exact />           
                    
        {/* 
        <Route path="/dashboard" component={Home} exact />
        <ProtectedRoute path="/dashboard" component={DashboardPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <RedirectAuthenticatedUser path="/register" component={RegisterPage} exact />
        <Route path="/verify-email" component={EmailVerificationPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/forgot-password" component={ForgotPasswordPage} exact />
        <Route path="/reset-password/:token" component={ResetPasswordPage} exact />
        <RedirectAuthenticatedUser path="/register" component={RegisterPage} exact />
        <Route path="/verify-email" component={EmailVerificationPage} exact />
        <RedirectAuthenticatedUser path="/login" component={LoginPage} exact />
        <RedirectAuthenticatedUser path="/forgot-password" component={ForgotPasswordPage} exact />
        <RedirectAuthenticatedUser path="/reset-password/:token" component={ResetPasswordPage} exact />
        */}

        <Route path="/register" component={RegisterPage} exact />
        <Route path="/verify-email" component={EmailVerificationPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/forgot-password" component={ForgotPasswordPage} exact />
        <Route path="/reset-password/:token" component={ResetPasswordPage} exact />

        <Route path="/article/:currentPage?" component={Home} exact />
        <Route path="/article/detail/:slug" component={Home} exact />
        <Route path="/article/category/:categorySlug/:currentPage?" component={Home} exact />
        <Route path="/article/tag/:tagSlug/:currentPage?" component={Home} exact />
        <Route path="/article/search/:searchValue" component={Home} exact />


        <Route path="/image-gallary" component={ImageGallary} exact />
        <Route path="/images/:id" component={ImageDetails} exact />


        <Route path="/posts/create-post" component={PostForm} exact />
        <Route path="/posts/get-all-post" component={PostList} exact />
        

        {/* 
          <Route path="/dashboard" component={DashboardPage} exact />
          <ProtectedRoute path="/dashboard" component={DashboardPage} exact />
        */}
        <Route path="/dashboard" component={DashboardPage} exact />
        <Route path="/dashboard/all-article/:currentPage?" component={DashboardPage} exact />
        <Route path="/dashboard/add-article" component={DashboardPage} exact />
        <Route path="/dashboard/article/edit/:articleSlug" component={DashboardPage} exact />

        <Route path="/dashboard/all-category/:currentPage?" component={DashboardPage} exact />
        <Route path="/dashboard/add-category" component={DashboardPage} exact />
        <Route path="/dashboard/category/edit/:categorySlug" component={DashboardPage} exact />

        <Route path="/dashboard/all-tag/:currentPage?" component={DashboardPage} exact />
        <Route path="/dashboard/add-tag" component={DashboardPage} exact />
        <Route path="/dashboard/tag/edit/:tagSlug" component={DashboardPage} exact />

        <Route path="/dashboard/all-category-type/:currentPage?" component={DashboardPage} exact />
        <Route path="/dashboard/add-category-type" component={DashboardPage} exact />

      </Switch>
      </Router>
      
      </div>   
        
    </div>
  );
}

export default App;
