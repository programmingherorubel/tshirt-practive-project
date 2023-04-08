import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full bg-emerald-400'>
            <div className='container mx-auto'>
                <ul className='flex justify-start gap-10'>
                    <li><Link className='text-gray-700 font-bold' to='/'>Home</Link></li>
                    <li><Link className='text-gray-700 font-bold' to='/review'>Review</Link></li>
                    <li><Link className='text-gray-700 font-bold' to='/about'>About</Link></li>
                    <li><Link className='text-gray-700 font-bold' to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;