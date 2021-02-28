import React from 'react';
import { useHistory} from 'react-router-dom';
import { useAuth } from '../../utils/firebase/AuthContext';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


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
            <Footer />
        </React.Fragment>
     );
}

export default Layout;