import Link from 'next/link';

export const Navbar = () => {
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
