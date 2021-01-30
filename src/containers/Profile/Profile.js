import React, {useRef, useState } from 'react';
import { useHistory} from 'react-router-dom';
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