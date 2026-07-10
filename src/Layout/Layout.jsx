import React from 'react';
import Navbar from '../Components/Global/Navbar/Navbar';
import Footer from '../Components/Global/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Navbar/>
			<main>
				<Outlet />
			</main>
			<Footer/>
		</>
	);
};

export default Layout;
