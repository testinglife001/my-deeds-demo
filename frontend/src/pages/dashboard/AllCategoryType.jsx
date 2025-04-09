import React from 'react'
import toast, {Toaster} from 'react-hot-toast';

const AllCategoryType = () => {
  return (
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
        
        AllCategoryType
    </div>
  )
}

export default AllCategoryType