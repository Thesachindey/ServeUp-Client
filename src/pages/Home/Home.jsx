import React from 'react';
import NavBar from '../../Components/NavBar';
import Banner from '../../Components/Banner';
import Features from '../../Components/Features';
import Gallery from '../../Components/Gallery';
import FAQ from '../../Components/FAQ';
import ImpactStats from '../../Components/ImpactStats';
import HomeUpcomingEvents from '../../Components/homeUpcomingEvents/HomeUpcomingEvents';
import HowItWorks from '../../Components/HowItWorks';
import Testimonials from '../../Components/Testimonials';
import CallToAction from '../../Components/CallToAction';

const Home = () => {
    return (
        <div>
            <title>ServeUp</title>
            <header>
                <Banner />
            </header>
            <main>
                <Features />
                <Gallery />
                <ImpactStats />
                <HowItWorks />
                <HomeUpcomingEvents />
                <Testimonials />
                <CallToAction/>
                <FAQ />
            </main>
        </div>
    );
};

export default Home;