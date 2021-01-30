import React from 'react';
import { useAuth } from '../../utils/auth/AuthContext';

import Layout from '../Layout/Layout'
import ProfileUI from '../../components/ProfileUI/ProfileUI';


const Profile = () => {

    const { currentUser } = useAuth();
    console.log(currentUser);

    return ( 
        <Layout>
            <ProfileUI userEmail={currentUser && currentUser.email}/>
        </Layout>
     );
}

export default Profile;