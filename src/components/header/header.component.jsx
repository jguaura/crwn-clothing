import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options-container'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
        </div>
    </div>
)

export default Header;