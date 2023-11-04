
    import {combineReducers, configureStore} from '@reduxjs/toolkit';
    import   reduser from "./Reducers"

const rootReduser=combineReducers({
    toolKit:reduser
})
    const store = configureStore({
        reducer: {rootReduser
        
        }
       
    })

    export default store;