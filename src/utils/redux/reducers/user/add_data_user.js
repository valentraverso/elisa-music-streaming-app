const addDataUser = (state, action) => {
    console.log("redux", action.payload)

    return{
        ...state,
        ...action.payload
    }
}

export default addDataUser