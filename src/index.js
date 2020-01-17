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
        <React.Fragment>
            <Container className='w-50 mx-auto text-center shadow rounded my-4 py-3' fluid={true}>
                <h1 className="mb-2">TODO List</h1>
                <ToDoContextProvider {...props} initialState={initAppState}>
                    <Header />

                    <hr className='shadow' />

                    <TaskList />

                    <hr className='shadow' />

                    <Footer />
                </ToDoContextProvider>
            </Container>
            <div fluid={true} id="footer" className="text-center shadow-lg rounded bg-light text-muted py-2">
                <p className="lead mb-0">Maneesh Divana</p>
                <p>
                    <a href="mailto:maneeshd77@gmail.com" className="text-muted">
                        maneeshd77@gmail.com
                    </a>
                    <b> | </b>
                    <span>+1 312-973-9216</span>
                </p>
            </div>
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('app-root'));
