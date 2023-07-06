import {configureStore} from "@reduxjs/toolkit";
import historyReducer from './slice/historySlice'

export default configureStore({
    reducer:{
        history: historyReducer,
    },
})