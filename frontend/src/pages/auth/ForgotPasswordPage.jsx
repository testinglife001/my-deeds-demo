import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, Mail } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { backend__url } from '../../server';
import { useAuthStore } from '../../authStore/authStore';

const ForgotPasswordPage = () => {

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {isLoading, forgotPassword} = useAuthStore()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setSubmitted(true);
  }

  return (
    <div>
      ForgotPasswordPage
    
      <div className="card" style={{ width: '420px', marginLeft:'430px', marginBottom:'40px' }}>
              
          <div className="d-flex justify-content-center align-items-center" style={{ height: '20vh' }}>
          <Link to={'/'} className="position-absolute" style={{ top: '5%', left: '5%' }}>
              <h1 className="fs-4 fw-bold" style={{ fontFamily: 'League Spartan' }}>My Simple App</h1>
          </Link>
          </div>
      
              <div className="card-header">
                  <h5>Forgot Password</h5>
                  <p>Enter your email below to change password of your account.</p>
              </div>
      
              <div className="card-body">

              {
                !submitted ? (
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
            
                        <div className="d-grid gap-2">
                        <button 
                            type="submit" 
                            className="btn btn-primary" 
                            disabled={loading}
                        >
                            {isLoading ? "Creating..." : "Send Reset Link"}
                        </button>
                        </div>
            
                    </form>
                ) : (
                    <div className="mt-3">
                        <p>
                        If an account exists for {email}, you will receive a password reset link shortly.
                        </p>
                    </div>
                )
              }

              </div>
      
              <div className="card-footer">
              <div className="mt-3">
                  <p>Back to Login{" "} 
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

export default ForgotPasswordPage