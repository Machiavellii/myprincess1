import React from 'react';

const HeaderAgency = ({ agency }) => {
	const {
		location,
		user: { nickname },
		phone
	} = agency;

	return (
		<div className='headerGirl'>
			<div className='container'>
				<h1>{nickname}</h1>
				<p className='subheading'>agency in {location ? location.city : ''}</p>
				<a href={`tel:${phone}`}>
					<i className='fas fa-phone rotate' /> {phone}
				</a>
			</div>
		</div>
	);
};

export default HeaderAgency;
