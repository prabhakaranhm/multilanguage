import React from 'react'
import Link from 'next/link';
import {useTranslations} from 'next-intl';

const NavBar = ({lang}) => {
    const menu = useTranslations('Menus');
    return (
        <div>
            <nav>
                <ul className='flex'>
                    <li><Link href="/" locale={lang}>{ menu('home') }</Link></li>
                    <li><Link href="/about" locale={lang}>{ menu('about') }</Link></li>
                </ul>
            </nav>
            <br/><br/>
        </div>
    )
}

export default NavBar