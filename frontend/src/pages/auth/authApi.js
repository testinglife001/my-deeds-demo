const BASE_URL = "http://localhost:5000";

export const CreateUser = async (userObj) => {
    // const url = `${BASE_URL}/api/auth/create-user`;
     const url = `${BASE_URL}/api/auth/signup`;
    try {
        const formData = new FormData();
        for (const key in userObj){
            formData.append(key,userObj[key]);
        }
        const options = {
            method: 'POST',
            'Content-Type': 'application/json',
            body: formData
        }
        const result = await fetch(url,options);
        const data = await result.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

