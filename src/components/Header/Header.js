import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logoimage from '../../static/svg/logo2.svg';

function Header() {
    return (
        <header className="text-gray-700 body-font border-b border-gray-200">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    href="/"
                >
                    <img alt="logo" src={logoimage} className="w-10 h-10" />
                    <span className="ml-3 text-xl text-blue-800">PASSION</span>
                    <span className="ml-1 text-xl text-gray-900">PIONEER</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <AnchorLink
                        href="#about"
                        className="mr-5 hover:text-gray-900"
                    >
                        ABOUT
                    </AnchorLink>
                    <AnchorLink
                        href="#achievement"
                        className="mr-5 hover:text-gray-900"
                    >
                        ACHIEVEMENTS
                    </AnchorLink>
                    <AnchorLink
                        href="#member"
                        className="mr-5 hover:text-gray-900"
                    >
                        MEMBERS
                    </AnchorLink>
                    <a href="#recruit" className="mr-5 hover:text-gray-900">
                        RECRUIT
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
