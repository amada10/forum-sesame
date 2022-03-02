import { Route,Redirect } from 'react-router-dom'
import { LoginService } from 'utils/service/LoginService'

export default function AdminRoute({children, ...rest}){
    const compte = LoginService.getCurrentCompte();
    return(
        <Route {...rest} render = {(props) => {
             return compte !== null && compte.type === 'ADMIN'
                ? children
                : <Redirect to='/' />
        }} />
    )
}
