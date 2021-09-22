import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Achievement from '../components/Achievement';
import Member from '../components/Member';
import Recruit from '../components/Recruit';
import Ask from '../components/Ask';
import Footer from '../components/Footer';
import Scrollup from '../components/Scrollup';

const MainPage = () => {
    return (
        <div>
            <Header />
            <Main />
            <About />
            <Achievement />
            <Member />
            <Recruit />
            <Ask />
            <Footer />
            <Scrollup />
        </div>
    );
};

export default MainPage;
