import uuid from 'uuid/v1';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState ={
    items: [
            {id: uuid(), name: 'eggs'},
            {id: uuid(), name: 'mild'},
            {id: uuid(), name: 'stone'},
            {id: uuid(), name: 'wolf'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
            default:
                return state;
    }
}