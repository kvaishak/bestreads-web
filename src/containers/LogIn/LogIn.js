import React, {useRef, useState } from 'react';
import { useHistory} from 'react-router-dom';
import { useAuth } from '../../utils/auth/AuthContext';

import LogInUI from '../../components/LogInUI/LogInUI'


const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const { signIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setError('');
            setLoading(true);

            var currentUser = await signIn(emailRef.current.value, passwordRef.current.value );

            console.log("New User = ", currentUser);

            history.push("/profile");
        }catch(e){
            setError('Failed to Create Account');
        }
        setLoading(false);
    }

    return ( 
        <LogInUI 
            emailRef={emailRef} 
            passwordRef={passwordRef} 
            handleSubmit={handleSubmit}
        />
     );
}

export default SignUp;