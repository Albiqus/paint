import { main } from './reducers/main';

import { createStore, combineReducers } from "redux";


let reducers = combineReducers({
    main,
})

let store = createStore(reducers)

export { store }
export type RootState = ReturnType<typeof store.getState>