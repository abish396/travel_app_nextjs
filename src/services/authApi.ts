import axios from 'axios';

const BASE_URL = process.env. AUTH_SERVICE_URL;
console.log({BASE_URL})
const AuthApi = {
  login: (values:Object) => {
    console.log({values});
    return axios.post(`${BASE_URL}/signin`, values);
  },
  // ... other product-related API functions
};

export default AuthApi;