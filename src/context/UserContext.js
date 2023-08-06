import React, {useMemo, useContext} from 'react';
import { useCookies  } from 'react-cookie';
import { login } from 'api/general';

const UserContext = React.createContext();



function UserProvider({children}){
    const [cookies, setCookies, removeCookie] = useCookies();


    const tryLogin = async (username, password) => {
        console.log("trying login", username, password);
        return login(username, password).then(res => {
            console.log('res', res)
            if(res.data?.token){
                const token = res.data.token;
                // localStorage.setItem('token', token);
                setCookies('token', res.data.token); // your token
                // console.log('auth success');
                // use jwt for auth
            } else {
                console.log('auth failed')
            }
        }).catch(err => {
            console.log('err', err)
        })
    }

    const logout = () => {
        ['token', 'name'].forEach(obj => removeCookie(obj)); // remove data save in cookies
    };

    const value = useMemo(
        () => ({
            cookies,
            login: tryLogin,
            logout,
            // logout
        }),
        [cookies]
    );

    

    return (<>
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    </>)
}

export default UserProvider;


export const useAuth = () => {
    return useContext(UserContext)
};