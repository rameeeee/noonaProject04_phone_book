const initialState = {
    contactList: [],
    inputValue: '',
}

function reducer(state=initialState, action) {
    const {type, payload} = action
    console.log(action)
    switch(type) {
        case "ADD_CONTACT_ITEM" :
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    {   
                        id: Date.now(),
                        name: payload.name,
                        phoneNumber: payload.phoneNumber
                    }
                ]
            }
        case "SEARCH_BY_NAME" :
            return {
                ...state,
                inputValue: payload.inputValue
            }
        case "DELETE_CONTACT_ITEM" : 
            return {
                ...state,
                contactList: state.contactList.filter(item => item.id !== payload.id)
            }
        default :
            return {...state}
    }


}

export default reducer;