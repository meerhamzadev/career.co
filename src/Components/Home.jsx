import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from './ReusableComponents/Logo';

function Home() {
    const navigate = useNavigate();
    const logOut = () => {
        window.localStorage.setItem('state', false);
        console.log(window.localStorage.getItem('state'));
        navigate('/')
    }
    return (
        <section className='h-screen py-12 flex flex-col justify-between items-center' >
            <div className='text-center m-auto' >
                <Logo />
                <h1 className='text-2xl font-medium lg:text-3xl ' >Hello,</h1>
                <h1 className='text-2xl font-medium lg:text-3xl ' > hamzababar37@gmail.com</h1>
            </div>
            <button onClick={logOut}
                className="btn" >logout</button>
        </section>
    )
}

export default Home