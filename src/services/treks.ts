import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_TREKS_SERVICE_LOCAL_URL;
const TreksApi = {
    create: (values:Object) => {
      console.log({values});
      return axios.post(`${BASE_URL}/create`, values);
    },

  };
  
  export default TreksApi;