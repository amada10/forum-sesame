import Axios from 'axios';

//const uRI = "http://localhost:5000/api/v1"
const uRI = "https://forum-api.iteam-s.mg/api/v1"

const RouteAxios = Axios.create({
    baseURL: uRI 
})

export {
    RouteAxios, uRI
}
