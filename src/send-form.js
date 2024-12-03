import axios from 'axios';

axios.defaults.baseURL = "https://musicproject-back-blxx.onrender.com/contacts";

export const fetchForm = async (value) => {
    const response = await axios.get("", {
        params: {
            email: value.email,
            name: value.name,
            phone: value.phone,
        }
    })
    console.log(response)
    return response.data;   
}

