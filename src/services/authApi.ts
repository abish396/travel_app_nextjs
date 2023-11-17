import axios from 'axios';

const BASE_URL = process.env. AUTH_SERVICE_URL;
console.log({BASE_URL})
const AuthApi = {
  login: (values:Object) => {
    console.log({values});
    return axios.post(`${BASE_URL}/signin`, values);
  },
  // ... other product-related API functions
  loginWithGoogle:() => {
    return axios
      .get('https://accounts.google.com/o/oauth2/v2/auth', {
        params: {
          client_id: '973399729505-lcncpvha8i7tsaoc137jequm1tl2qqq7.apps.googleusercontent.com',
          redirect_uri: 'http://localhost:3000/auth', // Your redirect URI
          response_type: 'token',
          include_granted_scopes: 'true',
          scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        },
      });
      /* .then((response) => {
        // Handle successful login
        window.location.href = response.request.responseURL;
      })
      .catch((error) => {
        console.error('Google login error', error);
      }); */
  }
};

export default AuthApi;