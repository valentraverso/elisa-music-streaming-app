const addDataUser = (state, action) => {
    return{
        ...state,
        ...action.payload
    }
}

export default addDataUser