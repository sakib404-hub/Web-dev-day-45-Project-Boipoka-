import React from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>

        </div>
    );
};

export default Root;