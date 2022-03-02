import { Route,Redirect } from 'react-router-dom'
import { LoginService } from 'utils/service/LoginService'

export default function EntrepriseRoute({children, ...rest}){
    const compte = LoginService.getCurrentCompte();
    return(
        <Route {...rest} render = {() => {
            return compte !== null && compte.type === 'ENTREPRISE' 
            ? children
            : <Redirect to='/' />
        }} />
    )
}