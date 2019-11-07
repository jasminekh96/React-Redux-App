import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Dog from './Dog';
import { fetchPics } from '../actions';

const DogPic = (props) => {
	useEffect(() => {
		props.fetchPics();
	}, []);
	if (props.isFetching) {
		return <h2>Loading Dog Images...</h2>;
	}
	return (
		<div>
			{props.error && <p>{props.error}</p>}
			{props.dogPic.map((dog, index) => <Dog key={index} dog={dog} />)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		dogPic     : state.dogPic,
		isFetching : state.isFetching,
		error      : state.error,
	};
};
export default connect(mapStateToProps, { fetchPics })(DogPic);
