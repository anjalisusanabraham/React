import {legacy_createStore} from 'redux';

const reducerfn = (state = {counter:0},action) =>{
    if(action.type == "Increament"){
        return{...state, counter : state.counter + 1};
    }
    else if(action.type == "Decreament"){
        return {...state, counter : state.counter - 1};
    }

    console.log(acton.type)
    return state;
};
const store = legacy_createStore(reducerfn);
export default store;