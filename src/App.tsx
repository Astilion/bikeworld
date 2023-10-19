import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import UserPanel from "./components/userPanel/UserPanel";
import Nav from "./components/layout/Nav";
import MobileNav from "./components/layout/MobileNav";
import HeroImg from "./components/layout/HeroImage";
import Bestsellers from "./components/bestsellers/Bestsellers";
const App = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [isNavVisible, setIsNavVisible] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isShown = screenWidth >= 768;

	const mobileNavHandler = () => {
		setIsNavVisible(!isNavVisible);
	};
	return (
		<>
			<Header isShown={isShown} />
			{!isShown ? null : <Nav />}
			{isNavVisible && <MobileNav />}
			{isShown ? null : <UserPanel onShowNav={mobileNavHandler} />}
			<HeroImg />
			<main>
        <Bestsellers/>
        <div className="filler"></div>
      </main>
		</>
	);
};

export default App;
