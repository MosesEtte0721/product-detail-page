import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Product() {
	const [count, setCount] = useState(1);
	const [cartQuantity, setCartQuantity] = useState(0);

	const add = () => {
		setCount(count + 1);
	};
	const remove = () => {
		setCount(count > 0 ? count - 1 : 0);
	};

	const addToCart = () => {
		setCartQuantity(cartQuantity >= 0 ? cartQuantity + count : cartQuantity);
	};

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
							src='../src/assets/blue-bed-sideview.jpg'
							alt='photo'
							className='pointer'></img>
						<img
							src='../src/assets/blue-bed.jpg'
							alt='photo'
							title=''
							className='pointer'></img>
						<img
							src='../src/assets/blue-bed-sideview.jpg'
							alt='bed'
							title=''
							className='pointer'></img>
					</div>
				</div>
				<div className='price-description-reviews'>
					<div className='price'>
						<h2>N {76543.0 * count}</h2>
					</div>
					<div className='description'>
						A good quality bed features a comfortable mattress, a sturdy frame,
						proper size, good ventilation, and aesthetic appeal. It ensures
						restful sleep and enhances overall well-being.
					</div>

					<div className='reviews'>
						<img
							src='../src/assets/star-vector-icon.jpg'
							alt='star'
							className='pointer'></img>
						<img
							src='../src/assets/star-vector-icon.jpg'
							alt='star'
							className='pointer'></img>
						<img
							src='../src/assets/star-vector-icon.jpg'
							alt='star'
							className='pointer'></img>
						<img
							src='../src/assets/star-vector-icon (1).jpg'
							alt='star'
							className='pointer'></img>
						<img
							src='../src/assets/star-vector-icon (1).jpg'
							alt='star'
							className='pointer'></img>
						<h4>3.5</h4>
						<p>4564 reviews</p>
					</div>

					<div className='second-secondary-photos'>
						<img
							className='pointer'
							src='../src/assets/blue-bed-fixed1.jpg'></img>
						<img
							className='pointer'
							src='../src/assets/blue-bed-sideview.jpg'></img>
					</div>
					<div className='increase-decrease-quantity'>
						<span className='remove' onClick={remove}>
							-
						</span>
						<input type='number' value={count} />
						<span className='add' onClick={add}>
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
			</section>
			<Footer />
		</>
	);
}
export default Product;
