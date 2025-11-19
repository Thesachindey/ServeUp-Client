import React from 'react';
import NavBar from '../../Components/NavBar';
import Banner from '../../Components/Banner';
import Features from '../../Components/Features';
import Gallery from '../../Components/Gallery';

const Home = () => {
    return (
        <div>
            <header>
                <Banner />
            </header>
            <main>
                <Features/>
                <Gallery/>
            </main>
        </div>
    );
};

export default Home;