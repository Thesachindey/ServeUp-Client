import React from 'react';
import NavBar from '../../Components/NavBar';
import Banner from '../../Components/Banner';
import Features from '../../Components/Features';

const Home = () => {
    return (
        <div>
            <header>
                <Banner />
            </header>
            <main>
                <Features/>
            </main>
        </div>
    );
};

export default Home;