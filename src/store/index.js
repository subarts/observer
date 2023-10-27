
    import {combineReducers, configureStore} from '@reduxjs/toolkit';
    import   reduserTest from "./Reducers"

const rootReduser=combineReducers({
    toolKit:reduserTest
})
    const store = configureStore({
        reducer: {rootReduser
        
        }
       
    })

    export default store;