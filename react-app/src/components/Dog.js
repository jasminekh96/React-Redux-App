import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 400px;
	height: 600px;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 30px;
	border: solid 3px #ffc0cb;
`;
const Dog = (props) => {
	return (
		<Container>
			<Image src={props.dog} />
		</Container>
	);
};

export default Dog;
