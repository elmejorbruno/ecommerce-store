import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProducts from './Components/TopProducts/TopProducts';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Women from './Pages/Women';
import Men from './Pages/Men';
import Kids from './Pages/Kids';
import NotFound from './Pages/NotFound';
import Layout from './Layout/Layout';

const App = () => {
	React.useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
			easing: 'ease-in-sine',
			delay: 100,
		});
    AOS.refresh();
	}, []);
	return (
		<>
		
		<Routes>
			<Route element={<Layout/>} >
			<Route path='/' element={<Home/>} />
				<Route path='women' element={<Women/>} />
				<Route path='men' element={<Men/>} />
				<Route path='kids' element={<Kids/>} />
				<Route path='notfound' element={<NotFound/>} />
			</Route>
			
		</Routes>
			
		</>
	);
};

export default App;
