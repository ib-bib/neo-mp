import * as actions from "./actionTypes";

const defaultState = {
	theme: actions.theme.IS_LIGHT,
	player: actions.PlayerState.IS_PAUSED,
	looper: actions.LooperState.IS_NOT_LOOPING,
	page: actions.pages.HOME,
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.pages:
			return {
				...state,
				page: action.payload,
			};
		case actions.PlayerState:
			return {
				...state,
				player: action.payload,
			};
		case actions.LooperState:
			return {
				...state,
				looper: action.payload,
			};
		case actions.VolumeState:
			return {
				...state,
				volume: action.payload,
			};
		case actions.theme:
			return {
				...state,
				theme: action.payload,
			};
		case actions.navbarState:
			return {
				...state,
				navbar: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
