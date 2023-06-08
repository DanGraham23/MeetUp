import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/v1';

export default axios.create({
    baseURL: BASE_URL,
});

var TOKEN = "INVALID TOKEN";
if (localStorage.getItem('meetup-user')){
    TOKEN = JSON.parse(localStorage.getItem('meetup-user')).token;
}

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    withCredentials:true,
    headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer ${TOKEN}`,
    },
});