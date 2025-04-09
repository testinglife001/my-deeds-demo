import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';
import { EyeIcon, EyeOffIcon, Mail } from 'lucide-react';
import { useAuthStore } from '../../authStore/authStore';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login } from '../../store/actions/authAction';


const AdminLoginPage = ({ history }) => {

    const dispatch = useDispatch();

    const {loader, errorMessage, successMessage,
            authenticate, userInfo} 
        = useSelector(state=>state.adminReducer);

    console.log({userInfo});

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [showPassword, setShowPassword] = useState(false)


    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    // const {isLoading,error,adminLogin} = useAuthStore();

    // const AdminLogin = async(e) => {
    const AdminLogin = (e) => {
        e.preventDefault();
        // console.log({email,password});
        // await adminLogin(email,password);
        
        // dispatch(admin_login({email,password}));
         dispatch(admin_login(state));
         history.push('/dashboard');
        // history.push('/');
    }

    useEffect(() => {
        if(authenticate){
             history.push('/dashboard');
        }
        if(successMessage){
            toast.success(successMessage);
        }
        dispatch({ type: 'LOGIN_SUCCESS_MESSAGE_CLEAR' });
    }, [dispatch,successMessage])

    useEffect(() => {
        if(errorMessage.error){
            toast.error(errorMessage.error);
        }
         dispatch({ type: 'LOGIN_ERROR_CLEAR' });
    }, [ errorMessage.error ])

  return (
    <div>
        
        <div className="container-fluid mb-4" >
            
                <div className="col-12 text-center mt-3">

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

                <div className="text-center py-2">
                <h2 className="p-5 text-center" >
                    <span className="badge bg-danger" >Admin Login</span>
                </h2>
                </div>
                </div>
                
                <div style={{width:'500px',marginLeft:'350px'}} >
                    
                    <form onSubmit={AdminLogin} >
                        
                        <div className=" py-3">
                        <input
                            type="email"
                            className="form-control input-text-box"
                            placeholder="Email"
                            name="email"
                            onChange={inputHandle}
                            value={state.email}
                            
                        />
                        </div>
                        <p className="p-2 text-center text-danger" >
                            { errorMessage?.email }
                        </p>

                        <div className=" py-3">
                        <input
                            type="password"
                            className="form-control input-text-box"
                            placeholder="Password"
                            name="password"
                            onChange={inputHandle}
                            value={state.password}
                            
                        />
                        </div>
                        <p className="p-2 text-center text-danger" >
                            { errorMessage?.password }
                        </p>

                        <div className="  text-center">
                            
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
                                    "Sign-in"
                                </button>
                                
                            }

                            
                            
                        </div>

                    </form>
                    
                </div>

            
        </div>
    </div>
  )
}

export default AdminLoginPage