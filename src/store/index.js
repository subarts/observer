
    import {combineReducers, configureStore} from '@reduxjs/toolkit';

    import   reducerTest from "./Reducers"

const rootReduser=combineReducers({
    toolKit:reducerTest

})
    const store = configureStore({
        reducer: {rootReduser
        
        }
       
    })

    export default store;