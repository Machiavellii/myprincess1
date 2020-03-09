import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import AgencyDashboardAction from './AgencyDashboardAction';

import Carousel from '../landing/landingpages/landingcontent/singleGirl/carousel/Carousel';
import Header from '../landing/landingpages/landingcontent/singleAgency/describeAgency/componentAgency/HeaderAgency';
import DescribeAgency from '../landing/landingpages/landingcontent/singleAgency/gallery/galleryComponent/DescribeAgency';
import GalleryHolderAgency from '../landing/landingpages/landingcontent/singleAgency/gallery/GalleryHolderAgency';

import {
	getCurrentAgency,
	agencyDeleteAccount,
	typePlan
} from '../../actions/agencyProfile';

//import { getCurrentAgency } from '../../actions/agencyProfile';

const AgencyDashboard = ({
	getCurrentAgency,
	agency: { agency, loading },
	//getCurrentAgency,
	//agencyProfile,
	agencyDeleteAccount,
	typePlan
}) => {
	useEffect(() => {
		getCurrentAgency();
		//getCurrentAgency();
	}, [getCurrentAgency]);

	const [kindtype, setType] = useState(false);

	const [type, setFormData] = useState('');

	const onChange = e => {
		setType(!kindtype);
		setFormData({ type: e.target.value });
	};

	const onClick = e => {
		typePlan(type);
	};

	//console.log(agencyProfile);

	const renderPostAnAdButton = () => {
		return type === 'profile' ? (
			<Fragment>
				<Link
					to='/postanad'
					className='btn  my-3 rose-border'
					style={{ backgroundColor: '#2b2b2b', color: '#fff' }}
					onClick={onClick}>
					Post an Ad
				</Link>
			</Fragment>
		) : (
			<Fragment>
				<Link
					to='/postanad'
					className='btn  my-3 rose-border'
					style={{ backgroundColor: '#2b2b2b', color: '#fff' }}
					onClick={onClick}>
					Post an Ad
				</Link>
			</Fragment>
		);
	};

	return loading && agency === null ? (
		<Spinner />
	) : (
		<Fragment>
			{agency !== null ? (
				<Fragment>
					<div className='container text-center px-1'>
						<AgencyDashboardAction />
					</div>
					<Carousel photos={agency.photos} />
					<div className='holder dashboard-content'>
						<Header agency={agency} />
						<div className='container'>
							<div className='row'>
								<div className='col-sm-12 col-md-8'>
									<DescribeAgency agency={agency} />
								</div>
								<div className='col-sm-12 col-md-4 gallery'>
									<GalleryHolderAgency agency={agency} />
								</div>
							</div>
							<button
								className='btn btn-danger'
								onClick={() => agencyDeleteAccount()}>
								<i className='fas fa-user-minus'> Delete My Account</i>
							</button>
						</div>
					</div>
				</Fragment>
			) : (
				<Fragment>
					<div className='container m-5 dashboard-create'>
						<p>You have not yet setup a profile, please add some info</p>
						<p className='mt-4'>Please tell us are you Escort or an Agency?</p>
						<div className='form-group'>
							<div className='form-check form-check-inline radio'>
								<input
									className='form-check-input'
									type='radio'
									name='type'
									id='escort'
									value='escort'
									onClick={onChange}
								/>
								<label className='form-check-label' htmlFor='escort'>
									Escort
								</label>
							</div>
							<div className='form-check form-check-inline mb-3 radio'>
								<input
									className='form-check-input'
									type='radio'
									name='type'
									id='agency'
									value='agency'
									onClick={onChange}
								/>
								<label className='form-check-label' htmlFor='agency'>
									Agency
								</label>
							</div>
						</div>

						<br />
						{!kindtype ? (
							<Link
								to='/postanad'
								className='btn disabled'
								style={{ backgroundColor: '#2b2b2b', color: '#fff' }}>
								Post an Ad
							</Link>
						) : (
							renderPostAnAdButton()
						)}
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

AgencyDashboard.propTypes = {
	getCurrentAgency: PropTypes.func.isRequired,
	agency: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	agency: state.agency
	//agencyProfile: state.agencyProfile
});
export default connect(mapStateToProps, {
	getCurrentAgency,
	//getCurrentAgency,
	agencyDeleteAccount,
	typePlan
})(AgencyDashboard);
