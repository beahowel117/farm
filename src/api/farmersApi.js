import axios from 'axios';

export default axios.create({
  baseURL: 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc'

});
