import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleActive, getCurrentProfile } from '../../actions/profile';

const DashboardActions = ({ toggleActive, profile: { profile, loading } }) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	const renderIsActiveButton = () => {
		return !profile.is_active ? (
			<button
				type='button'
				className='btn btn-success'
				onClick={() => toggleActive()}>
				Active Hours
			</button>
		) : (
			<button
				type='button'
				className='btn btn-danger'
				onClick={() => toggleActive()}>
				Deactivate Hours
			</button>
		);
	};

	return (
		<div>
			<Link to='/edit-profile' className='btn btn-light'>
				<i className='fas fa-user-circle' /> Edit Profile
			</Link>
			{renderIsActiveButton()}
			{/* <Link to="/upload-cover" className="btn btn-light">
        <i className="fas fa-user-circle" /> Upload Profile Photo
      </Link>
      <Link to="/upload-gallery" className="btn btn-light">
        <i className="fas fa-user-circle" /> Upload Gallery
      </Link> */}
		</div>
	);
};

DashboardActions.propTypes = {
	toggleActive: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(mapStateToProps, { toggleActive, getCurrentProfile })(
	DashboardActions
);
