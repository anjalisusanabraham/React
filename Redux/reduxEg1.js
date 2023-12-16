const redux = require('redux');
const createStore = redux.legacy_createStore
// const initialState = {age:21}
const initialState = {color : 'red'}
const myReducer = (state = initialState,action) =>{
    const newState = {...state};


    if(action.type='blue'){
        newState.color = 'blue';
    }
    if(action.type='yellow'){
        newState.color = 'yello';
    }
    if(action.type='white'){
        newState.color = 'white';
    }
    if(action.type='rose'){
        newState.color = 'rose';
    }

    // if(action.abc == 2){
    //     newState.age += 1;
    // }
    // if(action.type == 'add'){
    //     newState.age-=1
    // }
    return newState;
};
const store = createStore(myReducer);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch({type:'blue'});

store.dispatch({type:'yellow'});

store.dispatch({type:'white'});

store.dispatch({type:'rose'});

// store.dispatch({type:'add',xyz : 1, abc:2});
// console.log(store.getState());
