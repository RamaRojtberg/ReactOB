// Este archivo tiene el contenido del Store de la aplicación y el rootReducer (que contiene a todos los reducers)
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducers/rootReducer";
import { watcherSaga } from "../sagas/sagas";

export const createAppStore = () => {
    let store = createStore (rootReducer, composeWithDevTools());

    return store;
}

export const createAppAsyncStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
        )
    )

    //We init the Watcher Saga
    sagaMiddleware.run(watcherSaga)

    return store;
}