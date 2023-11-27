import { Navbar } from '../components/Navbar'; // Import your Navbar component
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<div>Footer</div>
		</>
	);
}

export default MyApp;
