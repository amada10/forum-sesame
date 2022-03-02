import { Route,Redirect } from 'react-router-dom'
import { LoginService } from 'utils/service/LoginService'

export default function AdminRoute({component: Component, ...rest}){
    const compte = LoginService.getCurrentCompte();
    return(
        <Route {...rest} render = {props => {
            if(compte !== null && compte.type === 'ADMIN'){
                return(
                    <Component {...props} />
                )
            } else{
                return(
                    <Redirect to='/' />
                )
            }
        }} />
    )
}