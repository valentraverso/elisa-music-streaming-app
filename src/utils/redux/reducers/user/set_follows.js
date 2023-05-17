export const setFollows = (state, action) => {
    return {
        ...state,
        data: {
            ...state.data,
            follows: action.payload
        }
    }
}