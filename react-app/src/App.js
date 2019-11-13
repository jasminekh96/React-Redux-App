import React from 'react';
import './App.css';
import DogPic from './components/DogPic';
import styled from 'styled-components';

const Title = styled.h1`
	color: white;
	font-size: 3.0rem;
	font-family: 'Dancing Script', cursive;
	margin-top: 50px;
`;
function App() {
	return (
		<div className='App'>
			{/* <div></div> */}
			{/* can use this to make a styled comp for background color as a container, set margins to zero in CSS  */}
			<Title>Random Doggo Images</Title>
			<DogPic />
		</div>
	);
}

export default App;
