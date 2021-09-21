import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Achievement from '../components/Achievement';
import Member from '../components/Member';
import Ask from '../components/Ask';
import Footer from '../components/Footer';
import Scrollup from '../components/Scrollup';

const MainPage = () => {
    return (
        <div>
            <Header />
            <Main />
            <About />
            <Timeline />
            <Achievement />
            <Member />
            <Ask />
            <Footer />
            <Scrollup />
        </div>
    );
};

export default MainPage;
