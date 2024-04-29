import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./../Components/Header/Header";
import Footer from '../Components/Footer/Footer';

const Layout = () => {
  return (
    <main>
        <Header />
        <section>
            <Outlet />
        </section>
        <Footer />
    </main>
  )
}

export default Layout