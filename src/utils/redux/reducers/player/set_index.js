const setIndex = (state, action) => {
    console.log(action)
    return{
        ...state,
        index: action.payload
    }
}

export default setIndex;