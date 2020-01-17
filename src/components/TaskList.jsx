'use strict';

import React from 'react';
import Task from './Task';
import { useStateContext } from '../contexts/context';
import { ListGroup } from 'react-bootstrap';


const TaskList = () => {
    const { tasks } = useStateContext();

    if (tasks.length > 0) {
        return (
            <ListGroup className='' >
                {
                    tasks.map((task, index) => (
                        <ListGroup.Item key={`task-${index+1}`}>
                            <Task index={index} task={task} />
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        );
    } else {
        return <p className='lead text-muted'>What do you want to do today?</p>;
    }
};

export default TaskList;
