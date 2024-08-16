function Footer() {
	return (
		<>
			<footer>
				<div className='footer-wrapper'>
					<div className='store-name '>
						<p className='mosarch' title='Name of Store'>
							Mosarch store
						</p>
					</div>
					<div className='contact '>
						<div className='phone '>
							<img
								src='../src/assets/phone-icon-939.png'
								alt='Phone'
								title='Phone'></img>
							<a href='tel:+2348121715103'>
								<span className='span-phone' title='Phone number'>
									+2348121715103
								</span>
							</a>
						</div>
					</div>
					<div className='location'>
						<img
							src='../src/assets/location-icon-clipart.png'
							alt='address'
							title='Address'></img>
						<span title='Address'>
							<p>24, Mkpo Mbuk Lane, Eket, Akwa Ibom, Nigeria</p>
						</span>
					</div>
					<div className='social-media '>
						<a href='https://www.facebook.com/moses.ette0/' target='blank'>
							<img
								src='../src/assets/facebook-icon-1.png'
								alt='facebook'
								title='Facebook'></img>
						</a>
						<a href='https://www.instagram.com/moses.ette/' target='blank'>
							<img
								src='../src/assets/Instagram-Icon.png'
								alt='instagram'
								title='Instagram'></img>
						</a>

						<a href='https:/www.linkedin.com/in/mosesette' target='blank'>
							<img
								src='../src/assets/linkedin-icon-logo-png-transparent.png'
								alt='linkedIn'
								title='LinkedIn'></img>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
