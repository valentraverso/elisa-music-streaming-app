const setQueu = (state, action) => {
    console.log("redux", action.payload)
    return{
        ...action.payload
    }
}

export default setQueu;