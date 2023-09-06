import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_AUTH_SERVICE_URL;
console.log({BASE_URL})
const AuthApi = {
  login: (values) => {
    console.log({values});
    axios.get(`${BASE_URL}/auth`)
  },
  // ... other product-related API functions
};

export default AuthApi;