import React, {useRef, useState } from 'react';
import { useHistory} from 'react-router-dom';
import { useAuth } from '../../utils/auth/AuthContext';

import SignUpUI from '../../components/SignUpUI/SignUpUI'


const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef= useRef();

    const { signUp } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Passoword do not match')
        }
        try{
            setError('');
            setLoading(true);

            var currentUser = await signUp(emailRef.current.value, passwordRef.current.value);

            console.log("New User = ", currentUser);

            // history.push("/profile");
        }catch(e){
            setError('Failed to Create Account');
        }
        setLoading(false);
    }

    return ( 
        <SignUpUI 
            emailRef={emailRef} 
            passwordRef={passwordRef} 
            confirmPasswordRef={confirmPasswordRef} 
            handleSubmit={handleSubmit}
        />
     );
}

export default SignUp;