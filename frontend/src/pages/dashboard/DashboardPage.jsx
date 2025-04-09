import React, { useState } from 'react'
// import "./Dashboard.css"
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom'
import  Helmet  from 'react-helmet'
import Navbar from '../../components/dashboard/Navbar';
import SideMenu from '../../components/dashboard/SideMenu';
import DashboardIndex from './DashboardIndex';
import AllCategory from './AllCategory';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import AllTag from './AllTag';
import AddTag from './AddTag';
import EditTag from './EditTag';
import DashboardArticle from './DashboardArticle';
import ArticleAdd from './ArticleAdd';
import ArticleEdit from './ArticleEdit';
import AddCategoryType from './AddCategoryType';
import AllCategoryType from './AllCategoryType';



const DashboardPage = () => {

  const [inactive, setInactive] = useState(false);

  return (
    <div>
      
      
      <div>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>

        <Navbar />

        <div className="container-fluid">

          <div className="row">
              <div className="col-md-3 col-lg-2 " >

              
              <SideMenu 
                    onCollapse={(inactive) => {
                      console.log(inactive);
                      setInactive(inactive);
                    }}
                />

              
              </div>
              <div className="col-md-9 col-lg-10" style={{marginTop:"40px"}} >
              Dashboard
              <Switch>
                  
                <Route path="/dashboard" component={DashboardIndex} exact />

                  {/* 
                  <Route path="/dashboard/all-article/:currentPage?" 
                    component={DashboardArticle} exact />
                  <Route path="/dashboard/add-article" component={ArticleAdd} exact />
                  <Route path="/dashboard/article/edit/:articleSlug" 
                    component={ArticleEdit} exact />
                  
                  <Route path="/dashboard/all-category/:currentPage?" 
                    component={AllCategory} exact />
                  <Route path="/dashboard/add-category" 
                    component={AddCategory} exact />
                  <Route path="/dashboard/category/edit/:categorySlug" 
                    component={EditCategory} exact />
                  

                  <Route path="/dashboard/all-tag/:currentPage?" 
                    component={AllTag} exact />
                  <Route path="/dashboard/add-tag" 
                    component={AddTag} exact />
                  <Route path="/dashboard/tag/edit/:tagSlug" 
                    component={EditTag} exact />
                  */} 

                  
                  <Route path="/dashboard/all-category/:currentPage?" component={AllCategory} exact />
                  <Route path="/dashboard/add-category" component={AddCategory} exact />
                  <Route path="/dashboard/category/edit/:categorySlug" component={EditCategory} exact />

                  <Route path="/dashboard/all-tag/:currentPage?" component={AllTag} exact />
                  <Route path="/dashboard/add-tag" component={AddTag} exact />
                  <Route path="/dashboard/tag/edit/:tagSlug" component={EditTag} exact />

                  <Route path="/dashboard/all-article/:currentPage?" component={DashboardArticle} exact />
                  <Route path="/dashboard/add-article" component={ArticleAdd} exact />
                  <Route path="/dashboard/article/edit/:articleSlug" component={ArticleEdit} exact /> 

                   <Route path="/dashboard/all-category-type/:currentPage?" component={AllCategoryType} exact />
                  <Route path="/dashboard/add-category-type" component={AddCategoryType} exact />                  

              </Switch>                        
              Dashboard Only
              </div>
          </div>
                      
        </div>
        
    </div>

    </div>
  )
}

export default DashboardPage