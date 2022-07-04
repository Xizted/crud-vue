import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001/products',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});
