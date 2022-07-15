import React from 'react'
import Logo from './ReusableComponents/Logo'
import { addDoc, getDocs, query, where } from 'firebase/firestore'
import { collectionRef } from "../Firebase";
import { useNavigate } from 'react-router-dom';

function AuthMobile() {
    const navigate = useNavigate();

    const authHandler = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.pass.value;

        if (email === "" || password === "") {
            alert("Fill the data to proceed");
            return;
        }
        try {
            const q = query(collectionRef, where('email', '==', email));
            const snapshot = await getDocs(q);

            if (snapshot.docs.length === 0) {
                await addDoc(collectionRef, {
                    email,
                    password
                });

                window.localStorage.setItem('state', true);
                navigate("/home");
            } else {
                alert('Email already exist')
            }

        } catch (e) {
            alert(e)
        }
    }
    return (
        <section id="auth-mobile" className='flex flex-col h-screen lg:flex-row-reverse' >
            <div className=' grow'  >
                <img className='h-full w-full' src={`https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} alt="" />
            </div>
            <form onSubmit={authHandler} className='flex flex-col gap-5 lg:gap-7 items-center justify-center grow lg:w-1/2' >
                <div className='lg:mb-4' >
                    <Logo />
                </div>
                <input className='inputStyle' name='email' type="email" placeholder='Enter Email' />
                <input className='inputStyle' name='pass' type="password" placeholder='Enter Password' />
                <button className="btn lg:mt-4" >Submit</button>
            </form>
        </section>
    )
}

export default AuthMobile