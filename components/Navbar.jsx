import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className='w-full flex justify-end py-3 px-6 bg-slate-950 text-violet-50 my-nav'>
			<ul className='flex space-x-5 font-bold'>
				<li>
					<Link
						style={{ color: `${pathname === '/' ? '#61dafb' : ''}` }}
						className='hover:text-react-blue'
						href='/'>
						Home
					</Link>
				</li>
				<li>
					<Link
						style={{
							color: `${pathname === '/projects' ? '#61dafb' : ''}`,
						}}
						className='hover:text-react-blue'
						href='/projects'>
						Projects
					</Link>
				</li>
				<li>
					<Link
						style={{ color: `${pathname === '/info' ? '#61dafb' : ''}` }}
						className='hover:text-react-blue'
						href='/info'>
						Info
					</Link>
				</li>
			</ul>
		</nav>
	);
};
