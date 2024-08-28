import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Product() {
	const stars = [
		{
			image: "./src/assets/star-vector-icon.jpg",
			alternateText: "star",
			title: "Rating",
			className: "pointer",
		},
		{
			image: "./src/assets/star-vector-icon.jpg",
			alternateText: "star",
			title: "Rating",
			className: "pointer",
		},
		{
			image: "./src/assets/star-vector-icon.jpg",
			alternateText: "star",
			className: "pointer",
		},
		{
			image: "./src/assets/star-vector-icon (1).jpg",
			alternateText: "star",
			className: "pointer",
		},
		{
			image: "./src/assets/star-vector-icon (1).jpg",
			alternateText: "star",
			className: "pointer",
		},
	];
	const [count, setCount] = useState(1);
	const [cartQuantity, setCartQuantity] = useState(0);
	const [images, setImage] = useState(stars);

	// increase the quantity when the add button is clicked
	const add = () => {
		setCount(count + 1);
	};
	// decrease the quantity when the remove button is clicked
	const remove = () => {
		setCount(count >= 1 ? count - 1 : 1);
	};

	// add the total quantity to the cart when the add to cart button is clicked
	const addToCart = () => {
		setCartQuantity(cartQuantity >= 0 ? cartQuantity + count : cartQuantity);
	};
	// price of product
	const unitPrice = 76543;
	// price of multiply by count to get total price
	const total = count * 76543;

	return (
		<>
			<Header num={cartQuantity} />
			<section className='product-wrapper'>
				<div className='product-images'>
					<div className='primary-photo'>
						<img
							src='../src/assets/blue-bed-fixed.jpg'
							alt='Bed'
							title='Bed'
							className='pointer'></img>
					</div>
					<div className='secondary-photos'>
						<img
							src='./src/assets/blue-bed-sideview.jpg'
							alt='photo'
							className='pointer'></img>
						<img
							src='./src/assets/blue-bed.jpg'
							alt='photo'
							title=''
							className='pointer'></img>
						<img
							src='./src/assets/blue-bed-sideview.jpg'
							alt='bed'
							title=''
							className='pointer'></img>
					</div>
				</div>
				<div className='price-description-reviews'>
					<h2 className='price'>N {unitPrice.toLocaleString()}</h2>

					<p className='description'>
						<span className='desc-span '>Description:</span> <br></br>A good
						quality bed features a comfortable mattress, a sturdy frame, proper
						size, good ventilation, and aesthetic appeal. It ensures restful
						sleep and enhances overall well-being.
					</p>
					<br />

					<div className='reviews'>
						<div className='review-stars'>
							{stars.map((star, index) => {
								return (
									<img
										src={star.image}
										alt={star.alternateText}
										className={star.className}
										key={index}></img>
								);
							})}
							<span>3.0</span>
							<br />
							<span> 4564 reviews</span>
						</div>
					</div>

					<div className='second-secondary-photos'>
						<img
							className='pointer'
							src='./src/assets/blue-bed-fixed1.jpg'></img>
						<img
							className='pointer'
							src='./src/assets/blue-bed-sideview.jpg'></img>
						<img
							className='pointer'
							src='./src/assets/blue-bed-fixed1.jpg'></img>
					</div>
					<div className='increase-decrease-quantity'>
						<div>
							<span>
								<p>
									(
									<span className='total-cost-of-product'>
										N {total.toLocaleString()}
									</span>
									)
								</p>
							</span>
						</div>

						<div className='addRemove'>
							<span
								className='remove'
								onClick={remove}
								title='Decrease Quantity'>
								-
							</span>
							<input type='number' value={count} />
							<span className='add' onClick={add} title='Increase Quantity'>
								+
							</span>
						</div>
						<div className='buttons'>
							<button type='button' onClick={addToCart}>
								Add to Cart
							</button>
							<button type='button'>checkout</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
export default Product;
