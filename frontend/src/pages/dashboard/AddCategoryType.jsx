import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { add_category_type, get_category_type } from '../../store/actions/dashboard/categoryTypeAction';

const AddCategoryType = ({history}) => {

    const dispatch = useDispatch();

     const {loader, allCategoryType, categoryTypeError, categoryTypeSuccessMessage} 
            = useSelector(state=>state.dashboardCategoryTypeReducer);
    
    // console.log(allCategoryType);
    console.log(loader);
    console.log(allCategoryType);

     const [state, setState] = useState({
         name: '',
         parentId: ''
     })

     const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
     }
    
    // console.log(loader);
    // const [name, setName] = useState("");
    // const [categories, setCategories] = useState([]);
    // const [parentId, setParentId] = useState("");


    useEffect(() => {
        dispatch(get_category_type())
    }, []);
    
    const addCategory = (e) => {
        e.preventDefault();
         console.log(state);
        // console.log(categories);
         dispatch(add_category_type(state));
        // dispatch(add_category_type(name));
    }
    
    
    useEffect(() => {
        if(categoryTypeError && categoryTypeError.error){
            toast.error(categoryTypeError.error);
            dispatch({type: 'CATEGORY_TYPE_ERROR_MESSAGE_CLEAR'});
        }
        if(categoryTypeSuccessMessage){
            toast.success(categoryTypeSuccessMessage);
            dispatch({type: 'CATEGORY_TYPE_SUCCESS_MESSAGE_CLEAR'});
            history.push('/dashboard/all-category-type');
        }
    }, [categoryTypeError, categoryTypeSuccessMessage]);
    

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
            <title>Add Category</title>
        </Helmet>
        AddCategory
        <div className="mt-4">
        <form 
              onSubmit={addCategory} 
            >

        <div className="row px-5">

            <div className="mb-3 col-md-11">
            <label for="name" className="form-label">Title</label>
            
            <input type="text" id="name" className="form-control text-dark" placeholder="Category Title" 
                name="name"
                 onChange={inputHandle}
                 value={state.name}
                />
            
            </div>
            <p className="p-2 text-center text-danger" >
                { 
                    // categoryError ? categoryError.name : "" 
                }
            </p>

            <div className="mb-3 col-md-11">
            <label for="name" className="form-label">Title</label>
            
            <select  
                name="parentId"
                value={state.parentId}
                // onChange={e => setParentId(e.target.value)}
                onChange={inputHandle}
                >
                <option value="">No Parent</option>
                {
                     allCategoryType.map(cat => (
                     <option key={cat._id} value={cat._id}>{cat.name}</option>
                     ))
                }
            </select>
            
            </div>
            <p className="p-2 text-center text-danger" >
                { 
                    // categoryError ? categoryError.parentId : "" 
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
                "Add Category Type"
                </button>
            }          
        
        </div>

        </form>
        </div>
    </div>
    </div>
  )
}

export default AddCategoryType
