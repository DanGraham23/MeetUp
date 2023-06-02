import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/v1';

export default axios.create({
    baseURL: BASE_URL,
});

//This is temporary and needs to be hardcoded. Need to set header from API eventually

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    withCredentials:true,
    headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huQGVtYWlsLmNvbSIsImlhdCI6MTY4NTczMjg0MSwiZXhwIjoxNjg1NzQ3MjQxfQ.y9M1tW-9Hb1e1GRRyZ7OXOmKdk6vB-SGqZCs0Ii89hI`
    },
});