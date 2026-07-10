import React from 'react';
import Navbar from './Components/Global/Navbar/Navbar';
import Hero from './Components/HomeSection/Hero/Hero';
import Products from './Components/HomeSection/FeaturedProducts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './Components/TopProducts/TopProducts';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Women from './Pages/Women/Women';
import Men from './Pages/Men/Men';
import Kids from './Pages/Kids/Kids';
import NotFound from './Pages/NotFound';
import Layout from './Layout/Layout';
import ProductDetails from './Pages/ProductDetails';
import ScrollToTop from './Components/Global/ScrollToTop';

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
		<ScrollToTop/>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="women" element={<Women />} />
					<Route path="men" element={<Men />} />
					<Route path="kids" element={<Kids />} />
					<Route
					path='/product/:id'
					element={<ProductDetails/>} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
