import React, { useContext, useReducer } from 'react'


// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const myContext = React.createContext(null);

const Points = () => {
    
    const state = useContext(myContext)

    return (
        <p>Points: {state.count}</p>
    )

}

const Counter = () => {

    // Initial state for Reeducer
    const initialState = {
        count: 0
    }

    // Reducer to change State
    const reducer = (state, action) => {

        switch(action.type){

            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }

            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                }

            case RESET:
            return {
                count: 0
            }

            default:
                return state;

        }

    }

    // Asign useReducer to state, reducer and dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState)
    // Nuestra función reducer es la que va a controlar el estado y va a recibir el despacho de acciones
    // de tipo INCREMENT, DEREMENT o RESET
    /*
    state: estado
    dispatch: función para despachar acciones
    useReducer: asocia el reducer con el estado inicial de la aplicación
    */



  return (
    <myContext.Provider value={state}>
        <div>
            {/* Points: { state.count } */}
            <Points></Points>
            <button onClick={
                () => dispatch({
                    type: INCREMENT,
                    payload: {
                        quantity: 7
                    }})
            }>
                INCREMENT
            </button>
            <button onClick={
                () => dispatch({
                    type: DECREMENT,
                    payload: {
                        quantity: 1
                    }})
            }>
                DECREMENT
            </button>
            <button onClick={
                () => dispatch({type: RESET})
            }>
                RESET
            </button>
        </div>
    </myContext.Provider>
    
  )
}

export default Counter
