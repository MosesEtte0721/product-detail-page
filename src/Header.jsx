import { useState, useEffect } from "react";

function Header(props) {
	const list = [
		{ title: "Beds", Name: "Beds", link: "#" },
		{ title: "Tables", Name: "Tables", link: "#" },
		{ title: "Wooden Arts", Name: "Wooden Arts", link: "#" },
		{ title: "Chairs", Name: "Chairs", link: "#" },
		{ title: "Rails", Name: "Rails", link: "#" },
	];
	const [isVisible, setIsVisible] = useState(false);
	const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 765); // set the initial viewport to 765

	// const mediaQuery = window.innerWidth <= 765;
	const toggle = () => setIsVisible(!isVisible);
	// const toggle = () => setIsVisible(isVisible => {!isVisible;console.log("write me")});

	useEffect(() => {
		const updateScreen = () => {
			setSmallScreen(window.innerWidth <= 765); // update the viewport
		};

		window.addEventListener("resize", updateScreen); //add eventlistner "resize" to watch for resize events

		return () => window.removeEventListener("resize", updateScreen); //remove the evenlistner
	}, []);
	const [category, setCategory] = useState(list);

	return (
		<>
			<header>
				<section className='logo-store-search-button'>
					<div className='store-name'>
						<h1 className='mosarch' title='Name of Store'>
							Mosarch <br />
							store
						</h1>
					</div>
					<div className='search-box'>
						<input
							type='search'
							placeholder='search for products'
							title='Type name of product'></input>
						<button type='button' title='Click to search for products'>
							search
						</button>
					</div>
					<div className='search-profile-cart'>
						<div className='user-profile icon'>
							<div className='icon-child' title='Profile'>
								<img
									src='../assets/profile-icon-OIP.png'
									alt='User profile '
									title='profile'></img>

								<span className='account-span'>Account</span>
							</div>
						</div>
						<div className='help icon'>
							<div className='icon-child' title='Need Help?'>
								<img
									src='../assets/red-button-help-icon-vector-19997793.jpg'
									alt='Get help'></img>
								<br />
								<span className='help-span'>Help</span>
							</div>
						</div>
						<div className='cart icon'>
							<div className='icon-child' title='Cart'>
								<img src='../assets/cart-icon.jpeg' alt='Cart'></img>
								<span className='cart-span'>Cart</span>
								<span className='cart-quantity'>{props.num}</span>
							</div>
						</div>
					</div>
				</section>
				<section className='product-category'>
					<nav>
						<ul>
							{category.map((item, index) => {
								return (
									<li title={item.title} key={index}>
										<a href={item.link}>{item.Name}</a>
									</li>
								);
							})}
						</ul>
					</nav>
					{smallScreen && (
						<section
							className='hamburger-menu-wrapper'
							onClick={() => toggle()}>
							<span className='menu-bar first'></span>
							<span className='menu-bar second'></span>
							<span className='menu-bar third'></span>
						</section>
					)}
				</section>
			</header>
		</>
	);
}

export default Header;
