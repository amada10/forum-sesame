import { RouteAxios } from "utils/urlAxios/UrlAxios";
import {LoginService} from "utils/service/LoginService";

class CompteService{
                /*ADD SERVICE*/
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
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`,
                'Content-Type': 'application/json'
            }
        }
        )
    }
    AddContenu(titre, description, type, link){
        var content = new FormData();

        content.append("titre", titre);
        content.append("description", description);
        content.append("type", type);
        content.append("file", link);

        return RouteAxios.post('/add_content', content,{
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            }
        })
    }
    AddFicheMetier(titre, domaine_id, file){
        var content = new FormData();

        content.append("titre", titre);
        content.append("domaine_id", domaine_id);
        content.append("file", file);

        return RouteAxios.post('/add_fiche_metier', content,{
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            }
        })
    }

                /*GET SERVICE*/
    getAllCompte(){
        return RouteAxios.get("/list_accounts",  {
                headers: {
                    'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
                }
        })
    }

    getAllContenu(){
        return RouteAxios.get("/list_contents",  {
                headers: {
                    'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
                }
        })
    }

    getAllFiche(){
        return RouteAxios.get("/list_fiche_metier", {
            headers: {
                    'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            }
        })
    }

    getStatGallerie(){
        return RouteAxios.get("/get_stats", {
            headers: {
                    'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            }
        })
    }


                /*DELETE SERVICE*/
    DeleteOneCompte(compte_id){
        return RouteAxios.delete("/delete_account", 
            {
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            },
            data: {
                compte_id: compte_id
            }
        },
        ) 
    }

    DeleteOneContent(content_id){
        return RouteAxios.delete("/delete_content", 
            {
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            },
            data: {
                content_id: content_id
            }
        }
        ) 
    }

    DeleteFicheMetier(fiche_metier_id){
        return RouteAxios.delete("/delete_fiche_metier", 
            {
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            },
            data: {
                fiche_metier_id: fiche_metier_id
            }
        }
        ) 
    }

            /*UPDATE SERVICE*/

    UpdateCompte(nom, email, tel, domaine, description, adresse, lien){
        return RouteAxios.patch('/update_account', {
            nom, 
            email, 
            tel, 
            domaine, 
            description, 
            adresse,
            lien
        }, {
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`,
                'Content-Type': 'application/json'
            }
        }
        )

    }

    UpdateFicheMetier(titre, domaine_id, fiche_metier_id, file){
        var content = new FormData();

        content.append("titre", titre);
        content.append("domaine_id", domaine_id);
        content.append("fiche_metier_id", fiche_metier_id);
        content.append("file", file);

        return RouteAxios.patch('/update_fiche_metier', content,{
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            }
        })
    }
        
    UpdateOneContent(titre, description, type, content_id, file){
        var content = new FormData();

        content.append("titre", titre);
        content.append("description", description);
        content.append("type", type);
        content.append("content_id", content_id);
        content.append("file", file);

        return RouteAxios.patch('/update_content', content,{
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            }
        })
    }

    UpdatePassword(old_password, new_password){
        return RouteAxios.patch('/change_password', {
            old_password,
            new_password
        }, {
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`,
                'Content-Type': 'application/json'
            }
        }
        )
    }

    UpdateLogo(logo){
        var content = new FormData();

        content.append("logo", logo);

        return RouteAxios.patch('/update_logo', content,{
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            }
        })
    }

    UpdateVideo(lien, fileVideo){
        var content = new FormData();
        let video = null;
        if(lien !== "" ){
            video = lien;
        } else {
            if(fileVideo.size < 25000000){
                video = fileVideo
            }
        }

        content.append("video", video);

        return RouteAxios.patch('/update_video', content,{
            headers: {
                'Authorization': `Bearer ${LoginService.getCurrentCompte().token}`
            }
        })
    }

}

export default new CompteService();
