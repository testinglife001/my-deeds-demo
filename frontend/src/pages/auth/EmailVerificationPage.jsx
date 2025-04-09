import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { backend__url } from '../../server';
import { useAuthStore } from "../../authStore/authStore";

const EmailVerificationPage = ({ history }) => {

    /*
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
     const [loading, setLoading] = useState(false)

    const {error, isLoading, verifyEmail} = useAuthStore()

    const handleChange = (index, value) => {
        const newCode = [...code];
    
        // Handle pasted content
        if (value.length > 1) {
          const pastedCode = value.slice(0, 6).split("");
          for (let i = 0; i < 6; i++) {
            newCode[i] = pastedCode[i] || "";
          }
          setCode(newCode);
    
          // Focus on the last non-empty input or the first empty one
          const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
          const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
          inputRefs.current[focusIndex].focus();
        } else {
          newCode[index] = value;
          setCode(newCode);
    
          // Move focus to the next input field if value is entered
          if (value && index < 5) {
            inputRefs.current[index + 1].focus();
          }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
          inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const verificationCode = code.join("");
        // alert(`Verification code submitted: ${verificationCode}`);
        // console.log(`Verification code submitted: ${verificationCode}`);
        
        try {
          // await verifyEmail(verificationCode);
          await verifyEmail(verificationCode);
          history.push('/login');
          toast.success('Email verified successfully!');
          // setLoading(true);
          // await axios.post(`${backend__url}/auth/verify-email`,
          //      verificationCode,
          //      // { withCredentials: true }
          //  ).then((res)=>{
                // setLoading(false)        
          //      setLoading(false)
          //      toast.success(res.data.message);
          //      toast.success("Email verified successfully");
                // navigate('/login')
                // history.push('/login');
              //  history.push('/login');
          //  }).catch((error)=>{
          //    toast.error(error.response.data.message)
          //  })
                // navigate("/");
                // history.push('/login');
                // toast.success("Email verified successfully");
        } catch (error) {
          // console.error(error);
          console.log(error);
        }
        
    };

    // Auto submit when all fields are filled
    useEffect(() => {
        if (code.every((digit) => digit !== "")) {
        handleSubmit(new Event("submit"));
        }
    }, [code]);
    */

    // const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    // const [loading, setLoading] = useState(false)

     const [code, setCode] = useState();

    const [loading, setLoading] = useState(false)

    const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
    const inputsRefs = useRef([]);
    // const inputReferences = Array(6).fill(null).map(() => useRef(null));
    const handleChange = (index,value) => {
      if(!/^\d?$/.test(value)) return;
      const newCode = [...verificationCode];
      newCode[index] = value;
      if(index<5 && value && verificationCode.slice(0,index).
        includes("")){
        return;
      }
      if(!value && index<5){
        const hasNumbersAfter=newCode.slice(index+1).some
        (digit=>digit!=="");
        if(hasNumbersAfter){
          setVerificationCode(["", "", "", "", "", ""]);
          inputsRefs[0].current.focus();
          return;
        }
      }
      setVerificationCode(newCode);
      if(value && index<5){
        inputsRefs[index+1].current.focus()
      }
    }


    const handleSubmit = async(e)=>{
      e.preventDefault();
      // console.log(state);
      // console.log(code);
      // console.log(data);
      // console.log(data.avatar);
      // const url = await uploadFile(avatar);
      // console.log(url);
      
      console.log(code);
      try {
          setLoading(true);
          await axios.post(`${backend__url}/auth/verify-email`,
              // data
              // {
                //  ...data,
                //  image: url
              // }
              { code }  
            ).then((res)=>{
              setLoading(false)        
              // toast.success(res.data.message);
              // navigate('/login')
              // history.push('/login');
              // history.push('/verify-email');
              toast.success("Email verified successfully");
              // history.push('/');
              history.push('/login');
          }).catch((error)=>{
            // toast.error(error.response.data.message)
          })
      } catch (error) {
          // console.error(error);
          console.log(error);
          // toast.error(error.response.data.message)
      }
      
      
    }

  return (
    <div>
        EmailVerificationPage

        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card bg-dark text-light bg-opacity-50 shadow-lg rounded-4 p-4 w-100" style={{ maxWidth: "400px" }}>
            <h2 className="text-center fw-bold mb-4">Verify Your Email</h2>
            <p className="text-center text-secondary">Enter the 6-digit code sent to your email address.</p>

            <form 
                   onSubmit={handleSubmit} 
                  className="mt-3"
                >
            <div className="d-flex justify-content-between">
                {
                
                //  code.map((digit, index) => (
                  /*
                  verificationCode.map((digit,index) => (
                
                  <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      // onKeyDown={(e) => handleKeyDown(index, e)}
                      className="form-control text-center fw-bold fs-4 border-secondary bg-dark text-white me-2"
                      style={{ width: "50px", height: "50px" }}
                  />
                  
                ))
                  */
                }

                <div >
                  {
                    /*
                    verificationCode.map((digit,index) => (
                      <input
                        className="forn-control"
                        type="text"
                        maxLength={1}
                        key={index}
                        value={digit}
                        // ref={inputReferences[index]}
                        // ref={(el) => (inputReferences.current[index] = el)}
                          ref={(el) => (inputsRefs.current[index] = el)}
                        // ref={inputsRefs[index]}
                         onChange={(e)=>handleChange(index,e.target.value)} 
                        />
                    ))
                    */  
                  }
                
                </div>
                
                <div className="form-group" >               
                    
                {
                  
                    <input
                        className="forn-control"
                        type="text"
                        // maxLength={1}
                        // key={index}
                        // value={digit}
                        value={code}
                        onChange={(e) => setCode(e.target.value)} 
                        />
                  
                }
                           
                </div>

            </div>

            {
              // error && <p className="text-danger fw-semibold mt-2">{error}</p>
            }

            <button
                type="submit"
                 // disabled={isLoading || code.some((digit) => !digit)}
                // disabled={loading || code.some((digit) => !digit)}
                className="btn btn-success w-100 mt-4 shadow-sm"
            >
                {
                    // isLoading ? "Verifying..." : "Verify Email"
                    loading ? "Verifying..." : "Verify Email"
                }
            </button>
            </form>
        </div>
        </div>

    </div>
  )
}

export default EmailVerificationPage