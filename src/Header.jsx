import { useState } from "react";

function Header(props) {
	const [category, setCategory] = useState([
		{ title: "Beds", Name: "Beds", link: "#" },
		{ title: "Tables", Name: "Table", link: "#" },
		{ title: "Wooden Arts", Name: "Wooden Arts", link: "#" },
		{ title: "Chairs", Name: "Chairs", link: "#" },
		{ title: "Rails", Name: "Chairs", link: "#" },
	]);

	console.log(" Category List", category);
	return (
		<>
			<header>
				<section className='logo-store-search-button'>
					<div className='store-name'>
						<p className='mosarch' title='Name of Store'>
							Mosarch store
						</p>
					</div>
					<input
						type='search'
						placeholder='search products & category'
						title='Type name of product'></input>
					<button type='button' title='Click to search for products'>
						search
					</button>
					<div className='user-profile icon'>
						<div className='icon-child' title='Profile'>
							<img
								src='../src/assets/profile-icon-OIP.png'
								alt='User profile '
								title='profile'></img>
							<span>Account</span>
						</div>
					</div>
					<div className='help icon'>
						<div className='icon-child' title='Need Help?'>
							<img
								src='../src/assets/red-button-help-icon-vector-19997793.jpg'
								alt='Get help'></img>
							<span className='help-span'>Help</span>
						</div>
					</div>
					<div className='cart icon'>
						<div className='icon-child' title='Cart'>
							<img src='../src/assets/cart-icon.jpeg' alt='Cart'></img>
							<span className='cart-span'>Cart</span>
							<span className='cart-quantity'>{props.num}</span>
						</div>
					</div>
				</section>
				<section className='product-category'>
					<nav>
						<ul>
							{category.map((item, index) => {
								<li title={item.title} key={index}>
									<a href={item.link}>{item.Name}</a>
								</li>;
							})}
						</ul>
					</nav>
				</section>
			</header>
		</>
	);
}

export default Header;
