import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className='container mx-auto my-3'>
            <nav className='flex justify-between items-center'>
                <Link to='/' className='text-blue-500 font-bold text-3xl'>firebase</Link>
                <ul className='flex justify-between gap-10'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Header;