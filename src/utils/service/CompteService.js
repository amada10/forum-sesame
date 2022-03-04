import { RouteAxios } from "utils/urlAxios/UrlAxios";
import {LoginService} from "utils/service/LoginService";

const token = LoginService.getCurrentCompte().token;
const headers = {
    'Authorization': `Bearer ${token}`
}

class CompteService{
    AddAccount(nom, email, tel, domaine, lien, type, password, adresse){
        return RouteAxios.post('/add_account', {
            nom, 
            email, 
            tel, 
            domaine, 
            lien, 
            type, 
            password, 
            adresse
        }, {
            headers: headers
        }
        )
    }
    /*getAllCompte(){
        return RouteAxios.get("/all").then(response =>{
            return response;
        })
    }*/
}

export default new CompteService();