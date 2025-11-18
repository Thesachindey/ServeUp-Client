import React from 'react';
import { Outlet } from 'react-router';

import NavBar from '../Components/NavBar';
import Container from '../Components/Container';

const AuthLayouts = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>

            <main className=' min-h-screen'>

                <Container>
                    <Outlet />
                </Container>

            </main>

        </div>
    );
};

export default AuthLayouts;