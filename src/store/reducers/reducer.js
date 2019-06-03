const INITIAL_STATE = {
	articles: []
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
const reducer = (state = INITIAL_STATE, action) => {
	if (action.type === 'UPDATE_ARTICLES') {
		const { articles } = action.payload;
		return { articles: articles };
	}
	return state;
};

export default reducer;
