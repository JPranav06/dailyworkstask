import { configureStore } from "@reduxjs/toolkit"
import  userReducer  from "../Features/userSLicer"

export default configureStore(
    {
        reducer:{
            user: userReducer,
        },
    },
);