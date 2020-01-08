'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ToDoContextProvider } from './contexts/context';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

const App = props => {
    // Initial App State
    const initAppState = { tasks: [] };

    // Render App
    return (
        <Container className='w-50 mx-auto text-center shadow py-2 mt-4 rounded' fluid={true}>
            <h1>TODO List</h1>
            <ToDoContextProvider {...props} initialState={initAppState}>
                <Header />

                <hr className='shadow' />

                <TaskList />

                <hr className='shadow' />

                <Footer />
            </ToDoContextProvider>
        </Container>
    );
};

ReactDOM.render(<App />, document.getElementById('app-root'));
