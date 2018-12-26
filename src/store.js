import {createStore} from 'redux';
import {combineReducers} from 'redux'
import flatReducer from "./reducers/flatReducer";
import profileReducer from "./reducers/profileReducer";
import registrationFlatReducer from "./reducers/registrationFlatReducer";
import chatReducer from "./reducers/chatReducer";

const loadState = () => {
    try {
        const serialisedState = window.sessionStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.sessionStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};

const oldState = loadState();
const ALLREDUCERS = combineReducers({
    flatReducer,
    profileReducer,
    registrationFlatReducer,
    chatReducer
});

const STORE = createStore(ALLREDUCERS, oldState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

STORE.subscribe(() => {
    saveState(STORE.getState());
});

export default STORE;