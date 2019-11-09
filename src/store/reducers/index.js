import { combineReducers } from "redux";
import { SAMPLE_TYPE, SAMPLE_CONSTANT } from "../actions";

const initialState = {
	constants: SAMPLE_CONSTANT.FIRST,
	state: {}
};

function sampleReducer(state = initialState, action) {
	switch (action.type) {
		case SAMPLE_TYPE:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}

const appReducers = combineReducers({
	sampleReducer
});

export default appReducers;
