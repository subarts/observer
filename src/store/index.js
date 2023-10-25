
    import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {increment,decrement} from "./ReduserTest"
    import   reduserTest from "./ReduserTest"

const rootReduser=combineReducers({
    toolKit:reduserTest
})
    const store = configureStore({
        reducer: {rootReduser
        
        }
       
    })

    export default store;