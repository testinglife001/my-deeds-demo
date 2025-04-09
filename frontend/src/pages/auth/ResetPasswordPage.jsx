import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EyeIcon, EyeOffIcon, Mail } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { backend__url } from '../../server';
import { useAuthStore } from '../../authStore/authStore';
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ResetPasswordPage = ({ history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const {message,error,isLoading,resetPassword} = useAuthStore();

  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    try {
        await resetPassword(token, password);

			toast.success("Password reset successfully, redirecting to login page...");
			setTimeout(() => {
                history.push('/login');
				// navigate("/login");
			}, 2000);
    } catch (error) {
        console.error(error);
        toast.error(error.message || "Error resetting password");
    }

  }

  return (
    <div>
      ResetPasswordPage
    
      <div className="card" style={{ width: '420px', marginLeft:'430px', marginBottom:'40px' }}>
              
          <div className="d-flex justify-content-center align-items-center" style={{ height: '20vh' }}>
          <Link to={'/'} className="position-absolute" style={{ top: '5%', left: '5%' }}>
              <h1 className="fs-4 fw-bold" style={{ fontFamily: 'League Spartan' }}>My Simple App</h1>
          </Link>
          </div>
      
              <div className="card-header">
                  <h5>Reset Password</h5>
                  <p>Enter new password to reset your account password.</p>
              </div>

                {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
                {message && <p className='text-green-500 text-sm mb-4'>{message}</p>}
      
              <div className="card-body">
              <form 
                   onSubmit={handleSubmit}
                  >

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="position-relative">
                        <input 
                         value={password} 
                         onChange={(e) => setPassword(e.target.value)} 
                        id="password" 
                        type={showPassword ? 'text' : 'password'} 
                        className="form-control"
                        placeholder='New Password'
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

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="position-relative">
                        <input 
                         value={confirmPassword} 
                         onChange={(e) => setConfirmPassword(e.target.value)} 
                        id="password" 
                        type={showPassword ? 'text' : 'password'} 
                        className="form-control"
                        placeholder='Confirm New Password'
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
      
                  <div className="d-grid gap-2">
                  <button 
                      type="submit" 
                      className="btn btn-primary" 
                      disabled={loading}
                  >
                      {loading ? "Resetting..." : "Set New Password"}
                  </button>
                  </div>
      
                  <div className="mt-3">
                  <p>
                  If an account exists for {email}, you will receive a password reset link shortly.
                  </p>
                  </div>
              </form>
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

export default ResetPasswordPage