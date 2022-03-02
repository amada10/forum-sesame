import Axios from 'axios';

const LoginAxios = Axios.create({
    baseURL: "http://localhost:5000/api/v1" /*route login endpoint '/login' */
})

export {
    LoginAxios
}