import { createContext } from "react";

//Set up data layer
import React, {useContext, useReducer } from "react";

export const StateContext = createContext();

//Build a provider

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);