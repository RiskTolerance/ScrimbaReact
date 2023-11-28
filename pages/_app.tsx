// pages/_app.tsx or your custom layout component
import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
	const [mainContentHeight, setMainContentHeight] = useState('auto');

	useEffect(() => {
		const handleResize = () => {
			const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
			const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
			const windowHeight = window.innerHeight;
			const newHeight = windowHeight - (navbarHeight + footerHeight);
			setMainContentHeight(`${newHeight}px`);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<Navbar />
			<Component {...pageProps} mainContentHeight={mainContentHeight} />
			<Footer />
		</>
	);
}
