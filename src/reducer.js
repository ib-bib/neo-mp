import * as actions from "./actionTypes";

let ACTION_COUNT = 0;

const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.pages:
			return [
				...state,
				{
					actionNum: ++ACTION_COUNT,
					navigated: action.payload.description,
				},
			];
		case actions.audioStates:
			return [
				...state,
				{
					actionNum: ++ACTION_COUNT,
					playerMode: action.payload.description,
				},
			];
		case actions.theme:
			return [
				...state,
				{
					actionNum: ++ACTION_COUNT,
					theme: action.payload.description,
				},
			];
		default:
			return state;
	}
};

export default reducer;
