import React, {useRef, useState } from 'react';
import { useHistory} from 'react-router-dom';
import { useAuth } from '../../utils/auth/AuthContext';

import Navbar from '../../components/Navbar/Navbar';


const Layout = (props) => {

    const { logout } = useAuth();
    const history = useHistory();
    
    async function handleLogout(){
        await logout();
        history.replace('/login');
    }


    return ( 
        <React.Fragment>
            <Navbar logoutHandler={handleLogout}/>
            {props.children}
        </React.Fragment>
     );
}

export default Layout;