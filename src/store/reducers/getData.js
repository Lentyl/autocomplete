import {
    GET_DATA,
} from "../actions/getData";

const initialState = {
    usersData:null,
}

export default (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA:
           
            return {
                ...state,
                usersData: action.payload
            }

            default:
                return state;
            
    }
}

