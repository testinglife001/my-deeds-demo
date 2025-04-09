import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, Mail } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { backend__url } from '../../server';
import upload from '../../utils/upload';
import { CreateUser } from './authApi';
import { user_register } from '../../store/actions/authAction';

const RegisterPage = ({ history }) => {
    /*
    const [avatar, setAvatar] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const handleImage = async(e) => {
        const reader = new FileReader();
        reader.onload=()=>{
          if(reader.readyState===2){
            setImage(reader.result)
            console.log(image);
          }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    const data = {
        name,
        email,
        password,
        image
    }
    const uploadFile = async () => {
        const data = new FormData();
        data.append("file",avatar);
        data.append("upload_preset",'images_preset');
        try {
            let cloudeName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
            let resourceType = "image";
            let api = `https://api.cloudinary.com/v1_1/${cloudeName}/${resourceType}/upload`;
            const res = await axios.post(api,data);
            const {secure_url} = res.data;
             console.log(secure_url);
            return secure_url;
        } catch (error) {
            console.error(error);
            console.log(error);
        }
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
         console.log(data);
        // console.log(data.avatar);
        // const url = await uploadFile(avatar); 
        const url = await upload(image);       
         console.log(url);              
        
         try {
            setLoading(true);
            await axios.post(`${backend__url}/auth/signup`,
                {
                    ...data,
                     image: url
                }  
              ).then((res)=>{
                setLoading(false)        
                toast.success(res.data.message);
                // navigate('/login')
                // history.push('/login');
                history.push('/verify-email');
            }).catch((error)=>{
              // toast.error(error.response.data.message)
              console.log(error);
            })
        } catch (error) {
            console.error(error);
            console.log(error);
        }
        
        
    }
    const uploadFile = async (file) => {
        const data = new FormData();
        data.append("file",file);
        data.append("upload_preset","mysimpleapp");
        try {
            const res = await axios.post("https://api.cloudinary.com/v1_1/dvnxusfy8/image/upload",data);
            const {url} = res.data;
            console.log(res.data);
            console.log(res);
            console.log(url);
            return url;
        } catch (error) {
            console.log(error);
        }
    }
    */

    const dispatch = useDispatch();
    const {loader, errorMessage, successMessage,
                authenticate, userInfo} 
            = useSelector(state=>state.adminReducer);
    const [showPassword, setShowPassword] = useState(false)
    // const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [file,setFile] = useState(null);
    const [user,setUser] = useState({
        name: '',
        email: '',
        password: '',
        image: null
    });
    const handleChange = (e) => {
        setUser((prev) => {
            return {...prev,[e.target.name]:e.target.value};
        });
    };
    const handle = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }
    const handleFile = (e) => {
        setUser({...user,image:e.target.files[0]});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
         console.log(user);
         console.log(user.image);
        
        try {
             const {success,message} = await CreateUser(user);
             console.log(success,message)
            // dispatch(user_register(user));
             // history.push('/login');
             // history.push('/login');
             history.push('/verify-email');
        } catch (error) {
            console.log(error);
        }
        
        
    }


  return (
    <div>
        RegisterPage
    
    <div className="card" style={{ width: '420px', marginLeft:'430px', marginBottom:'40px' }}>
        
    <div className="d-flex justify-content-center align-items-center" style={{ height: '20vh' }}>
    <Link to={'/'} className="position-absolute" style={{ top: '5%', left: '5%' }}>
        <h1 className="fs-4 fw-bold" style={{ fontFamily: 'League Spartan' }}>My Simple App</h1>
    </Link>
    </div>

        <div className="card-header">
            <h5>Create an account</h5>
            <p>Enter your email below to create your account.</p>
        </div>

        <div className="card-body">
        <form
            method="post" 
            // onSubmit={handleSubmit}
            onSubmit={(e)=> handleSubmit(e)}
            >
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
                type="text" 
                id="name" 
                className="form-control" 
                placeholder="abc"
                name="name"
                 value={user.name} 
                // onChange={(e) => setName(e.target.value)} 
                // onChange={handleChange}
                onChange={handle} 
            />
            </div>

            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="m@gmail.com"
                name="email"
                 value={user.email} 
                // onChange={(e) => setEmail(e.target.value)}
                // onChange={handleChange}
                onChange={handle}  
            />
            </div>

            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="position-relative">
                <input 
                id="password" 
                type={showPassword ? 'text' : 'password'} 
                className="form-control"
                name="password"
                 value={user.password} 
                // onChange={(e) => setPassword(e.target.value)} 
                // onChange={handleChange}
                onChange={handle}
                />
                <button 
                type="button" 
                className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? (
                    <EyeIcon className="h-4 w-4" aria-hidden="true" />
                ) : (
                    <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                )}
                </button>
            </div>
            </div>

            <div className="mb-3 text-center">
                
            <input 
                id="image" 
                type="file" 
                accept=".jpg,.jpeg,.png" 
                // onChange={handleImage} 
                className="form-control" 
                // onChange={(e)=>setFile(e.target.files[0])}
                name="image"
                onChange={handleFile}
            />
            {
                
                user.image ? (
                    <img 
                    src={user.image} 
                    alt="image" 
                    className="img-fluid rounded-circle" 
                    style={{ width: '50px', height: '50px' }}
                    />
                ) : (
                    <svg width="40" height="40" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z" fill="currentColor" />
                    </svg>
                )
                
            }
            </div>

            <div className="d-grid gap-2">
            <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={loading}
            >
                {loading ? "Creating..." : "Create account"}
            </button>
            </div>

            <div className="mt-3">
            <p>Already have an account? Social Auth ... <br/>
                <Link to="/login" className="text-decoration-underline">
                    Social Login
                </Link>
            </p>
            </div>
        </form>
        </div>

        <div className="card-footer">
        <div className="mt-3">
            <p>Already have an account? 
                <Link to="/login" className="text-decoration-underline">
                    Login
                </Link>
            </p>
        </div>
        </div>    

    </div>
    
    </div>
  )
}

export default RegisterPage