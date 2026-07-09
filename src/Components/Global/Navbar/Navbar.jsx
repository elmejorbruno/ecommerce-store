import { IoMdSearch } from 'react-icons/io';
import ShopBag from '../../../assets/icon/bag-blue-circulo-yellow.svg';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import DarkMode from '../../DarkMode';

const Menu = [
	{
		id: 1,
		name: 'Inicio',
		link: '/',
	},
	{
		id: 2,
		name: 'Mujer',
		link: '/women',
	},
	{
		id: 3,
		name: 'Hombre',
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
	return (
		// <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200
		<div
			className="absolute
    top-0
    left-0
    w-full
    z-50
    text-gray-900
    dark:text-white
    duration-200"
		>
			{/* upper Navbar */}
			{/* <div className="bg-accent/90  py-3"> */}
			<div className=" py-3">
				<div className="container flex justify-between items-center">
					<div className="">
						<a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
							<img src={ShopBag} alt="Logo" className="w-10 " />
							Elegance
						</a>
					</div>
					{/* search bar */}
					<div
						className="flex justify-between items-center
                gap-5"
					>
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
                    hidden transition-all duration-200 
                    "
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
						<div className="">
							<DarkMode />
						</div>
					</div>
				</div>
			</div>
			{/* lower Navbar */}

			<div className="flex justify-center items-center">
				<ul className="sm:flex hidden  items-center gap-4 py-3">
					{Menu.map((data) => (
						<li key={data.id} className="">
							<a
								href={data.link}
								className="inline-block px-4  hover:text-primary transition-all duration-200"
							>
								{data.name}
							</a>
						</li>
					))}
					{/* Simple dropdown  */}
					<li className="group relative cursor-pointer">
						<a href="#" className="flex items-center fap-[2px] py-2">
							En circulacion
							<span>
								<FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
							</span>
						</a>
						<div className="absolute z-[999] hidden group-hover:block w-[250px] rounded-md bg-white dark:bg-gray-900 shadow-md ">
							<ul className="absolute bg-white dark:bg-gray-900 shadow-md rounded-md py-2 px-4 mt-2">
								{DropdownLinks.map((data) => (
									<li key={data.id} className="">
										<a
											href={data.link}
											className="inline-block w-full rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 "
										>
											{data.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
