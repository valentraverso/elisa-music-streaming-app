const setIndex = (state, action) => {
    return{
        ...state,
        index: action.payload
    }
}

export default setIndex;