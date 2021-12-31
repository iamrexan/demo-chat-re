import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactReducer from "../component/contact/contactSlice";
import chatReducer from "../component/chat/ChatSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  contact: contactReducer,
  chat: chatReducer,
});

const persistReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistReducers,
  // middleware: [thunk],
});

export default store;
