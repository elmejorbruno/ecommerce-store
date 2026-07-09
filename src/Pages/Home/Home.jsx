import React from 'react';

import Hero from '../../Components/HomeSection/Hero/Hero';
import Products from '../../Components/HomeSection/FeaturedProducts';
import TopProducts from '../../Components/TopProducts/TopProducts';
import { Banner } from '../../Components/HomeSection/Banner/Banner';
import Categoria from '../../Components/HomeSection/Categoria/Categoria';
import Footer from '../../Components/Global/Footer/Footer';

const Home = () => {
	return (
		<>
			<Hero />
			<Categoria />
			<Products />
			<TopProducts />
			<Banner/>
		</>
	);
};

export default Home;
