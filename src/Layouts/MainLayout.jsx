import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="pt-15">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;