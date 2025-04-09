import React, { useEffect, useRef, useState } from 'react';
import  Helmet  from 'react-helmet';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast, {Toaster} from 'react-hot-toast';
import { add_article, get_tag_category } from '../../store/actions/dashboard/articleAction';
import axios from 'axios';


const ArticleAdd = ({history}) => {

    const dispatch = useDispatch();

    const {allCategory, allTag, loader, articleError, articleSuccessMessage}  = 
        useSelector(state=>state.dashboardArticleReducer);
    

    const [text, setText] = useState('');
    const editor = useRef();
    const config = {
        readonly : false
    }

    const [state, setState] = useState({
        title: '',
        category: '',
        tag: '',
        image: ''
    })

    const [slug, setSlug] = useState('');
    const [updateBtn, setUpdateBtn] = useState(false);
    
    const [file, setFile] = useState(null);

    // const [image, setImage] = useState(null)

     const [image, setImage] = useState({
        imageName: '',
        img: ''
     });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const titleHandle = (e) => {
        setState({
            ...state,
            title : e.target.value
        });
        const createSlug = e.target.value.trim().split(' ').join('-');
        setSlug(createSlug);
    }

    // console.log(state);

    const slugHandle = (e) => {
        setSlug(e.target.value);
        setUpdateBtn(true);
    }

    const updateSlug = (e) => {
        e.preventDefault();
        const newSlug = slug.trim().split(' ').join('-');
        setSlug(newSlug);
        setUpdateBtn(false);
    }

    const imageHandle = (e) => {
        if(e.target.files.length !== 0){
            setState({
                ...state,
                image: e.target.files[0]
            });
            const imageReader = new FileReader();
            imageReader.onload = () => {
                setImage(    
                {
                     ...image,
                     img: imageReader.result,
                    imageName: e.target.files[0].name
                }
                )
            }
            imageReader.readAsDataURL(e.target.files[0]);
             const file = e.target.files[0];
             console.log(file);
            // console.log(img);
             console.log(image);
            
        }
    }

    useEffect(() => {
        dispatch(get_tag_category());
    },[]);
    
    
    const handleFileUpload = async (file) => {
        // e.preventDefault();
        // const file = e.target.files[0];
        // const file = e.target.files[0];
         console.log(file);
        if(!file) return;
        // const file = image;
        // console.log(image);
        // console.log(file);
        const data = new FormData();
        data.append('file',file);
        data.append('upload_preset','mysimpleapp');
        data.append('cloud_name','dvnxusfy8');
        const res = await fetch('https://api.cloudinary.com/v1_1/dvnxusfy8/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const uploadedImageURL = await res.json();
        console.log(uploadedImageURL);
        console.log(uploadedImageURL.url); 
        return uploadedImageURL.url;
    }
    


    const addArticle = async (e) => {
        e.preventDefault();
        // console.log(state);
        // console.log(slug);
        // console.log(text);
        // console.log(url);
         const { title, category, tag, image } = state;
        // const uploadedImageLink = await handleFileUpload();
         const file = e.target.files;
         console.log(file);
         console.log(image);
         const uploadedImageLink = await handleFileUpload(image);
         const formData = new FormData();
         formData.append('title', title);
         formData.append('category', category);
         formData.append('tag', tag);
         formData.append('image', image); 
        // formData.append('image', uploadedImageLink); 
         formData.append('image_url', uploadedImageLink);
        // formData.append('image_url', url); 
         formData.append('slug', slug);
         formData.append('text', text);
         dispatch(add_article(formData));
        // dispatch(add_article({state,slug,text}));
        // console.log(state);
        // console.log(slug);
        // console.log(text);
        // console.log(formData);

    }

   
    useEffect(()=> {

        if(articleSuccessMessage){
            dispatch({
                type: 'ARTICLE_SUCCESS_MESSAGE_CLEAR'
            })
            history.push('/dashboard/all-article');
        }

    },[articleSuccessMessage]);

  return (
    <div>
      <div>
         <Toaster position={'bottom-center'} 
            reverseOrder={false}
            toastOptions={
                {
                    style: {
                        fontSize: '15px'
                    }
                }
            }
        />

        <Helmet>
            <title>Add Article</title>
        </Helmet>

        <h3>Article Add or <b>Create Article</b></h3>

        <div className="mt-4">
        <form 
              onSubmit={addArticle} 
              enctype="multipart/form-data"   method="post"  
            >

        <div className="row">

            <div className="mb-3 col-md-9">
            <label for="postTitle" className="form-label">Title</label>
            <input 
                type="text" 
                id="postTitle" 
                className="form-control text-dark" 
                placeholder="Post Title" 
                name="title"    
                 onChange={titleHandle}  
                 value={state.title}    
                />
            <small>Keep your post titles under 60 characters. Write
                heading that describe the topic content.
                Contextualize for Your Audience.</small>
            </div>
            <p className="p-2 text-center text-danger" >
                { 
                   articleError ? articleError.title : "" 
                }
            </p>

            <div className="mb-3 col-md-9">
            <label for="postSlug" className="form-label">Slug</label>
            <input 
                type="text" 
                id="postSlug" 
                className="form-control text-dark" 
                placeholder="Post Slug" 
                name="slug"     
                 onChange={slugHandle}    
                 value={slug}    
                />
            <small>your-post-titles-under-60-characters</small>
            <br/>
            {
                
                 updateBtn ? 
                (
                    <button className="mt-2 btn btn-sm btn-outline-secondary" 
                         onClick={updateSlug}    
                        >
                        Update
                    </button>
                )
                 : 
                 ''
                
            }
            </div>
             <p className="p-2 text-center text-danger" >
                { 
                  articleError ? articleError.slug : "" 
                }
            </p>


            <div className="mb-3 col-md-9">
            <label className="form-label">Category</label>
            <select 
                className="selectpicker form-control" 
                data-width="100%"
                name="category"    
                 onChange={inputHandle}  
                 value={state.category}    
                >
                <option value="">Choose Category</option>

                {
                    
                    allCategory.length > 0 ?
                    allCategory.map((c,index) => {
                        return (
                            <option key={index} value={c.categorySlug} >
                                {c.categoryName}
                            </option>
                        )
                    })
                    :
                    ''
                    
                }

            </select>
            </div>
            <p className="p-2 text-center text-danger" >
                { 
                     articleError ? articleError.category : "" 
                }
            </p>


            <div className="mb-3 col-md-9">
            <label className="form-label">Tag</label>
            <select 
                className="selectpicker form-control" 
                data-width="100%"
                name="tag"  
                 onChange={inputHandle}  
                 value={state.tag}    
                >
                <option value="">Choose Tag</option>

                {
                    
                    allTag.length > 0 ?
                    allTag.map((t,index) => {
                        return (
                            <option key={index} value={t.tagSlug} >
                                {t.tagName}
                            </option>
                        )
                    })
                    :
                    '' 
                    
                }

            </select>
            </div>
            <p className="p-2 text-center text-danger" >
                { 
                    articleError ? articleError.tag : "" 
                }
            </p>

            <div className="mb-3 col-md-9">
            <label for="postImage" className="form-label">Image</label>
            <input 
                type="file" 
                id="articleImage" 
                className="form-control text-dark"
                 placeholder="Article Image" 
                name="image"  
                // multiple="multiple"  
                 onChange={imageHandle}   
                // onChange={handleFileUpload}
                // onChange={event => handleFileUpload(event)}
                />
            <small>Image</small>
            </div>
            
            <div className="mb-3 col-md-9">
            
            <h3>Preview Image</h3>
            
            
            <br/>
            <br/>
            {
                
                 image.imageName ?
                 (
                    <span>
                        <b>
                            {
                                 image.imageName
                            }
                        </b>
                    </span>
                 )
                 :
                 ''
                
            }
            <br/><br/>
            <div className="col d-flex align-items-center justify-content-center" >
                {
                    
                     image ?
                    <img className="img-fluid img-responsive center-block" 
                        width="550" 
                        // src={image}    
                         src={image.img} 
                         />
                    :
                    '' 
                    
                }
                
            </div>
            <p className="p-2 text-center text-danger" >
                { 
                    articleError ? articleError.image : "" 
                }
            </p>
            </div>
            

            <div className="mb-3 col-md-9">
            <label for="Excerpt">Description</label>
            {/* 
            <JoditEditor
                value={text}
                tabIndex = {1}
                ref = {editor}
                config={config}
                onBlur={newText => setText(newText)}
                onChange={newText => {}}
            />
            */}
            <JoditEditor
                value={text}
                tabIndex = {1}
                ref = {editor}
                config={config}
                onBlur={newText => setText(newText)}
                onChange={newText => {}}
            />
            
            </div>
            <p className="p-2 text-center text-danger" >
                { 
                     articleError ? articleError.text : "" 
                }
            </p>

        </div>

        <div className="mb-3 col-md-11 text-center ">

            {
                loader ? 
                <div>

                    <div className="text-center">
                    <div className="spinner-border m-5 " role="status">
                    </div>
                    <h4 className="text-center">
                        Please Wait ...
                    </h4>
                    <br/>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-primary"
                            role="status">
                        </div>
                        <span className='px-4' >
                            <h5>Processing</h5>
                        </span>
                        <div className="spinner-grow text-primary"
                            role="status">
                        </div>
                    </div>
                    <br/>
                    <br/>
                    
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                        </div>
                    </div>
                    </div>
                    
                </div>

                : 

                <button
                className="btn btn-primary"
                type="submit"
                >
                "Add Article"
                </button>
            }          
        
        </div>

        </form>
        </div>
    </div>
    </div>
  )
}

export default ArticleAdd
