import axios from 'axios';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchPics = () => (dispatch) => {
	dispatch({ type: START_FETCHING });
	axios
		.get('https://dog.ceo/api/breeds/image/random/3')
		.then((res) => {
			console.log(res.data);
			return res;
		})
		.then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data.message }))
		.catch((err) => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

//redux thunk
// const thunk = next => action => store {
//     if (typeof action === 'object'){
//         next(action);
//     } else if (typeof action === 'function'){
//         action(store.dispatch )
//     }
// }
