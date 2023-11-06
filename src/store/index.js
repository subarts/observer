
    import {combineReducers, configureStore} from '@reduxjs/toolkit';
    import   reducers from "./Reducers"

const rootReduser=combineReducers({
    toolKit:reducers
})
    const store = configureStore({
        reducer: {rootReduser
        
        }
       
    })

    export default store;