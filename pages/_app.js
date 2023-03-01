import '@/styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {

  useEffect(() => {
		AOS.init({
			delay: 300,
			duration: 1000,
		});
	});
  return (
  <Component {...pageProps} />
  )
}
