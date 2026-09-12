import { IoMdSearch } from 'react-icons/io';
import ShopBag from '../../../assets/icon/bag-blue-circulo-yellow.svg';
import {  FaBars, FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import DarkMode from '../../DarkMode';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Menu = [
	{
		id: 1,
		name: 'Inicio',
		link: '/',
	},
	{
		id: 2,
		name: 'Dama',
		link: '/women',
	},
	{
		id: 3,
		name: 'Caballero',
		link: '/men',
	},
	{
		id: 4,
		name: 'Niño y Niñas',
		link: '/kids',
	},
];
const DropdownLinks = [
	{
		id: 1,
		name: ' Products',
		link: '/productos',
	},
	{
		id: 2,
		name: 'Las más vendidas',
		link: '/services',
	},
	// {
	// 	id: 3,
	// 	name: 'Top Rated',
	// 	link: '/',
	// },
];

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(false);

	return (
		// <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200
		<header className='absolute top-0
			left-0 w-full z-50 text-gray-900 dark:text-white duration-200'>

		 {/* TOP NAVBAR */}

			{/* upper Navbar */}
			{/* <div className="bg-accent/90  py-3"> */}
			<div className=" py-3">
				<div className="container flex justify-between items-center">
					 {/* LOGO */}
					<div className="">
						<Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
							<img src={ShopBag} alt="Logo" className="w-10 " />
							Elegance
						</Link>
					</div>
					{/* search bar  + BUTTON + DARKMODE */}
					<div
						className="flex justify-between items-center
                gap-5"
					>  
					{/* SEARCH */}
						<div
							className="relative group hidden
                    sm:block"
						>
							<input
								type="text"
								placeholder="search"
								className="group: w-[200px] sm:w-[200px] group-hover:w[200px] transition-all 
                        duration-300 rounded-full border text-gray-500
                        border-gray-300 px-2 py-1
                        focus:outline-none 
                        focus:border-1
                       focus:border-primary
                       dark:bg-gray-800 dark:border-gray-500"
							/>
							<IoMdSearch
								className="text-gray-500
                        group-hover:text-primary absolute 
                        top-1/2 -translate-y-1/2 right-3 "
							/>
						</div>
						{/* order button */}
						<button
							onClick={() => alert('Ordering not available yet')}
							className="group bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-4 py-1 rounded-full flex items-center gap-3 "
						>
							<span
								className="group-hover:block
                    			hidden transition-all duration-200 "
							>
								Order
							</span>
							<FaCartShopping
								className="text-xl
								text-white drop-shadow-sm
								cursor-pointer"
							/>
						</button>

						{/* Darkmode Switch */}
						
							<DarkMode />
						
            			{/* HAMBURGER MOBILE */}
						<button 
						className="sm:hidden text-2xl" 
						onClick={() => setOpenMenu(true)}>
							<FaBars/>
						</button>
					</div>
				</div>
			</div>

      		{/* DESKTOP MENU */}

			<div className="flex justify-center items-center">
				<ul className="sm:flex hidden items-center gap-4 py-3">
					{Menu.map((data) => (
						<li key={data.id} className="">
							<Link
								to={data.link}
								className="inline-block px-4 hover:text-primary transition-all duration-200"
							>
								{data.name}
							</Link>
						</li>
					))}
					{/* DROPDOWN DESKTOP */}
					<li className="group relative cursor-pointer">
						<Link to="#" className="flex items-center gap-[2px] py-2">
							En circulacion
							<span>
								<FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
							</span>
						</Link>
						<div className="absolute z-[999] hidden group-hover:block w-[250px] rounded-md bg-white dark:bg-gray-900 shadow-md ">
							<ul className="absolute bg-white dark:bg-gray-900 shadow-md rounded-md py-2 px-4 mt-2">
								{DropdownLinks.map((data) => (
									<li key={data.id} className="">
										<Link
											to={data.link}
											className="inline-block w-full rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 "
										>
											{data.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</li>
				</ul>
			</div>
			 {/* MOBILE MENU OVERLAY */}
			
			{openMenu && (
				<div
				className="fixed inset-0 bg-black/40 backdrop-blur-sm sm:hidden"
				onClick={() => setOpenMenu(false)}
				></div>
			)}

			{/* MOBILE MENU SIDEBAR */}
			<div
				className={`fixed top-0 left-0 h-full w-[260px] bg-white dark:bg-gray-900 shadow-lg p-5 sm:hidden transition-transform duration-300 ${
				openMenu ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				{/* CLOSE BUTTON */}
				<button
				className="text-2xl mb-5"
				onClick={() => setOpenMenu(false)}
				>
				<FaTimes/>
				</button>

				{/* MOBILE LINKS */}
				<ul className="flex flex-col gap-4">
				{Menu.map((data) => (
					<li key={data.id}>
					<Link
						to={data.link}
						onClick={() => setOpenMenu(false)}
						className="block py-2 text-lg hover:text-primary"
					>
						{data.name}
					</Link>
					</li>
				))}

				{/* DROPDOWN MOBILE */}
				<li>
					<button
					className="flex items-center justify-between w-full py-2 text-lg"
					onClick={() => setOpenDropdown(!openDropdown)}
					>
					En circulación
					<FaCaretDown
						className={`transition-transform ${
						openDropdown ? 'rotate-180' : ''
						}`}
					/>
					</button>

					{openDropdown && (
					<ul className="pl-4 flex flex-col gap-2">
						{DropdownLinks.map((data) => (
						<li key={data.id}>
							<Link
							to={data.link}
							onClick={() => setOpenMenu(false)}
							className="block py-2 hover:text-primary"
							>
							{data.name}
							</Link>
						</li>
						))}
					</ul>
					)}
				</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
