import React from 'react';
import { StateProvider } from './state';
import Header from './header';
import ItemList from "./item-list";


const Todo = props => {
    // Initial App State
    const initState = {
        items: []
    };

    // Action Reducer
    const reducer = (state, action) => {
        switch(action.type) {
            case 'addItem':
                if(action.item)
                    return {
                        ...state,
                        items: state.items.concat(action.item)
                    }
                return state;
            case 'editItem':
                if(action.index > -1 && action.item) {
                    state.items[action.index] = action.item;
                    return {
                        ...state
                    }
                }
                return state;
            case 'deleteItem':
                if(action.item)
                    return {
                        ...state,
                        items: state.items.filter(ele => ele !== action.item)
                    }
                return state;
            default:
                return state;
        }
    };

    // Return Render
    return (
        <StateProvider initialState={initState} reducer={reducer}>
            <Header {...props} />

            <hr />

            <ItemList {...props} />
        </StateProvider>
    );
};

export default Todo;