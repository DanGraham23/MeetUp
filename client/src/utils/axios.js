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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5AZW1haWwuY29tIiwiaWF0IjoxNjg1OTAwODg0LCJleHAiOjE2ODU5MTUyODR9.bQrCNdAtovxT1ekxK36FNCZVAhKnuP6gXxj7SXbYRkU`
    },
});