'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className='w-full flex justify-end py-3 px-6 bg-slate-950 text-violet-50 my-nav'>
			<ul className='flex space-x-5'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/projects'>Projects</Link>
				</li>
				<li>
					<Link href='/info'>Info</Link>
				</li>
			</ul>
		</nav>
	);
};

export default function Home() {
	const [mainContentHeight, setMainContentHeight] = useState('auto');

	useEffect(() => {
		const handleResize = () => {
			const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
			const windowHeight = window.innerHeight;
			const newHeight = windowHeight - navbarHeight;
			setMainContentHeight(`${newHeight}px`);
		};
		// Set initial height
		handleResize();
		// Add event listener
		window.addEventListener('resize', handleResize);
		// Clean up
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<>
			<div className='w-full h-screen'>
				<Navbar />
				<main className={`w-full items-center text-white bg-slate-700`}>
					<div
						style={{ height: mainContentHeight }}
						className='w-full flex flex-col items-center justify-center'>
						<div className='w-1/2 min-w-[550px] max-w-[770px]  bg-slate-600 flex relative flex-col overflow-clip rounded-lg shadow-2xl'>
							<div className='flex p-8 justify-between items-center h-1/6 bg-gray-950 border-b-4 border-sopd border-[#61dafb]'>
								<div className='flex items-center space-x-3 text-2xl font-bold'>
									<Image
										src='/react-2.svg'
										width={50}
										height={50}
										alt='React'
									/>
									<h1>ReactFacts</h1>
								</div>
								<h3 className='text-lg'>React Course - Project 1</h3>
							</div>
							<div className='flex justify-start h-5/6 bg-gray-900'>
								<div className='flex flex-col pt-8 pb-20 px-8 space-y-8 z-20'>
									<div className='w-full text-3xl font-bold'>
										<h1>Fun Facts About React</h1>
									</div>
									<div className='ml-8'>
										<div className='flex'>
											<div className='text-xl text-[#61dafb] -translate-y-1'>
												●&nbsp;
											</div>
											<div>Was first released in 2013</div>
										</div>
										<div className='flex'>
											<div className='text-xl text-[#61dafb] -translate-y-1'>
												●&nbsp;
											</div>
											<div>Was originally created by Jordan Walke</div>
										</div>
										<div className='flex'>
											<div className='text-xl text-[#61dafb] -translate-y-1'>
												●&nbsp;
											</div>
											<div>Has well over 100K stars on GitHub</div>
										</div>
										<div className='flex'>
											<div className='text-xl text-[#61dafb] -translate-y-1'>
												●&nbsp;
											</div>
											<div>Is maintained by Facebook</div>
										</div>
										<div className='flex'>
											<div className='text-xl text-[#61dafb] -translate-y-1'>
												●&nbsp;
											</div>
											<div>
												Powers thousands of enterprise apps, including mobile
												apps
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='absolute -right-[125px] bottom-10 opacity-5'>
								<Image
									src='/react-2.svg'
									width={250}
									height={250}
									alt='React'
								/>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
