import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_COMPANY_SERVICE_LOCAL_URL;
const CompanyApi = {
  getAllCompanies: () => {
    return axios.get(`${BASE_URL}/getall`);
  },

  create: (values: Object) => {
    console.log({ values });
    return axios.post(`${BASE_URL}`, values);
  },

};

export default CompanyApi;