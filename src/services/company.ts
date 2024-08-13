import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_COMPANY_SERVICE_LOCAL_URL;
const CompanyApi = {
    getAllCompanies: () => {
      return axios.get(`${BASE_URL}/getall`);
    },

  };
  
  export default CompanyApi;