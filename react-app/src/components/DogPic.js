import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Dog from './Dog';
import { fetchPics } from '../actions';
import styled from 'styled-components';

const ImagesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;
const Loading = styled.h2`
	font-family: 'Dancing Script', cursive;
	font-size: 2.0rem;
	color: #8b0000;
`;
const DogPic = (props) => {
	useEffect(() => {
		props.fetchPics();
	}, []);
	if (props.isFetching) {
		return <Loading>Loading Dog Images...</Loading>;
	}
	return (
		<ImagesContainer>
			{props.error && <p>{props.error}</p>}
			{props.dogPic.map((dog, index) => <Dog key={index} dog={dog} />)}
		</ImagesContainer>
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
