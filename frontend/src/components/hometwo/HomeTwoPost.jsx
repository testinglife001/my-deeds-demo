import React from 'react';
import './HomeTwoPost.css';
import Card from './Card';
import BlogPost from './BlogPost';
import Sidebar from './Sidebar';
import Layout from './Layout';

/**
* @author
* @function Post
**/

const HomeTwoPost = (props) => {

    console.log(props);


  return(
        <Layout>
          <BlogPost {...props} />
        </Layout>
   )

 }

export default HomeTwoPost;