import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, Mail } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { backend__url } from '../../server';
import { useAuthStore } from '../../authStore/authStore';

const LoginPage = ({ history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const {isLoading,error,login} = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
     await login(email,password);
     history.push('/');

    /*
    try {
      setLoading(true);
      await axios.post(`${backend__url}/auth/signup`,
          // data
          {}  
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
      
    }
    */
  }

  return (
    <div>
      LoginPage
    
      <div className="card" style={{ width: '420px', marginLeft:'430px', marginBottom:'40px' }}>
              
          <div className="d-flex justify-content-center align-items-center" style={{ height: '20vh' }}>
          <Link to={'/'} className="position-absolute" style={{ top: '5%', left: '5%' }}>
              <h1 className="fs-4 fw-bold" style={{ fontFamily: 'League Spartan' }}>My Simple App</h1>
          </Link>
          </div>
      
              <div className="card-header">
                  <h5>Welcome Back</h5>
                  <p>Enter your email below to login to your account.</p>
              </div>
      
              <div className="card-body">
              <form 
                   onSubmit={handleSubmit}
                  >

                  <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)} 
                      type="email" 
                      id="email" 
                      className="form-control" 
                      placeholder="m@gmail.com" 
                  />
                  </div>
      
                  <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="position-relative">
                      <input 
                       value={password} 
                       onChange={(e) => setPassword(e.target.value)} 
                      id="password" 
                      type={showPassword ? 'text' : 'password'} 
                      className="form-control"
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

                  
                  {
                    error &&
                    <p className='text-danger' >
                      {error}
                    </p>   
                  }
                    
                      
                  <div className="d-grid gap-2">
                  <button 
                      type="submit" 
                      className="btn btn-primary" 
                      disabled={loading}
                  >
                      {loading ? "Creating..." : "Login"}
                  </button>
                  </div>
      
                  <div className="mt-3">
                  <p>Forgot password? ... <br/>
                      <Link to="/forgot-password" className="text-decoration-underline">
                        Forgot password?
                      </Link>
                  </p>
                  </div>
              </form>
              </div>
      
              <div className="card-footer">
              <div className="mt-3">
                  <p>Don't have an account?{" "} 
                    <Link to="/register" className="text-decoration-underline">
                      Register
                    </Link>
                  </p>
              </div>
              </div>    
      
          </div>
    
    </div>
  )
}

export default LoginPage