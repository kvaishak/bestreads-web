import React, {useRef } from 'react';
import { useHistory} from 'react-router-dom';
import { useAuth } from '../../utils/auth/AuthContext';

import SignUpUI from '../../components/SignUpUI/SignUpUI'


const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef= useRef();

    const { signUp } = useAuth();
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return 
        }
        try{
           
            await signUp(emailRef.current.value, passwordRef.current.value);

            history.replace("/profile");
        }catch(e){
            
        }
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