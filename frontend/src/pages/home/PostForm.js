import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CLOUD_NAME = "dvnxusfy8";
const UPLOAD_PRESET = "mysimpleapp";

const PostForm = () => {

    
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
     setPreviewUrls(files.map(file => URL.createObjectURL(file)));
  };

  const uploadImages = async () => {
    const urls = [];
    for (let image of images) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", UPLOAD_PRESET);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      urls.push(res.data.secure_url);
      urls.push(res.data.url);
      console.log(res.data);
    }
    return urls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title,content,images,tags,category);
    
    
    try {
       const imageUrls = await uploadImages();
      console.log(title,content,images,tags,category);
      console.log(title,content,imageUrls,tags,category);
      
      // const res = await axios.post("http://localhost:5000/api/posts/create-post", {
      //  title,
      //  content,
      //   imageUrls,
      //  tags: tags.split(',').map(t => t.trim()),
      //  category
      // });

      // console.log("Post created:", res.data);
        console.log(title,content,imageUrls,tags,category);
      setTitle('');
      setContent('');
      setImages([]);
      setPreviewUrls([]);
      setTags('');
      setCategory('');
    } catch (err) {
      console.error("Error submitting post:", err);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" /><br />
         
         
        <textarea 
            value={content} 
            // onChange={setContent} 
            onChange={e => setContent(e.target.value)}
            /><br />
        

      <input type="file" multiple onChange={handleImageChange} accept="image/*" /><br />
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {
             previewUrls.map((url, i) => (
             <img key={i} src={url} alt={`preview-${i}`} width="150" />
            ))
        }
      </div>
      <input value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags (comma separated)" /><br />
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" /><br />
      <button type="submit">Submit Post</button>
    </form>
  );
};

export default PostForm;
