import { legacy_createStore as createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import reducer from "./reducer";

const authPersistConfig = { key: "user", storage: storageSession };

const store = createStore(persistReducer(authPersistConfig, reducer));

export default store;
