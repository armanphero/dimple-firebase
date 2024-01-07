import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.init';


const Login = () => {
    const [isLoggedin, setIsLoggedin] = useState(null);
    // const { email, displayName, photoURL } = isLoggedin;

    const auth = getAuth(app);
    const handleSignInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                const userInfo = result.user;
                setIsLoggedin(userInfo);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignInWithGithub = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                const userInfo = result.user;
                setIsLoggedin(userInfo)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <section className='container mx-auto my-5 text-xl font-semibold'>
            <h1>This is Login page</h1>
            <p>If you haven't logged in please login first</p>
            <hr className='mb-10 mt-5' />
            {
                !isLoggedin &&
                <div>
                    <h1>Login with these methods</h1>
                    <div className='flex gap-5'>
                        <button className='btn-style my-3' onClick={handleSignInWithGoogle}>Google</button>
                        <button className='btn-style my-3' onClick={handleSignInWithGithub}>Github</button>
                    </div>
                </div>
            }
            {
                isLoggedin &&
                <div className='mt-5'>
                    <img src={isLoggedin.photoURL} alt="" />
                    <h1>Name : {isLoggedin.displayName}</h1>
                    <h1>Email : {isLoggedin.email}</h1>
                    <button className='btn-style my-3' onClick={() => setIsLoggedin(null)}>Logout</button>
                </div>
            }
        </section>
    );
};

export default Login;