import { Route,Redirect } from 'react-router-dom'
import { LoginService } from 'utils/service/LoginService'

export default function EntrepriseRoute({component: Component, ...rest}){
    const compte = LoginService.getCurrentCompte();
    return(
        <Route {...rest} render = {props => {
            return compte !== null && compte.type === 'ENTREPRISE' 
            ? <Component {...props} />
            : <Redirect to='/' />
        }} />
    )
}