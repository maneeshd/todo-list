'use strict';

import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const StateContext = createContext();
const DispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'insert':
            if (action.value)
                return { ...state, tasks: state.tasks.concat(action.value) };
            return state;
        case 'remove':
            if (action.value)
                return { ...state, tasks: state.tasks.filter(ele => ele !== action.value) };
            return state;
        case 'edit':
            if (action.index > -1 && action.value) {
                state.tasks[action.index] = action.value;
                return { ...state };
            }
            return state;
        case 'clear':
            return { ...state, tasks: [] };
        default:
            console.log('[WARNING] Invalid action: ' + JSON.stringify(action));
            return state;
    }
};

export const ToDoContextProvider = ({initialState, children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

ToDoContextProvider.propTypes = {
    initialState: PropTypes.object.isRequired,
    children: PropTypes.node
};

export const useStateContext = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error('useStateContext must be used within a ToDoContextProvider');
    }
    return context;
};

export const useDispatchContext = () => {
    const context = useContext(DispatchContext);
    if (context === undefined) {
        throw new Error('useDispatchContext must be used within a ToDoContextProvider');
    }
    return context;
};

export const StateConsumer = ({children}) => (
    <StateContext.Consumer>
        {context => {
            if (context === undefined) {
                throw new Error('StateConsumer must be used within a ToDoContextProvider');
            }
            return children(context);
        }}
    </StateContext.Consumer>
);

StateConsumer.propTypes = {
    children: PropTypes.node
};

export const DispatchConsumer = ({children}) => (
    <DispatchContext.Consumer>
        {context => {
            if (context === undefined) {
                throw new Error('DispatchConsumer must be used within a ToDoContextProvider');
            }
            return children(context);
        }}
    </DispatchContext.Consumer>
);

DispatchConsumer.propTypes = {
    children: PropTypes.node
};
