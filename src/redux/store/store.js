import { configureStore } from "@reduxjs/toolkit";
import root from "../reducers/RootReducer";

export default configureStore({reducer: root});

 