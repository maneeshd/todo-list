'use strict';

import React, { useState, useRef  } from 'react';
import { InputGroup, Row, Col, Button, FormControl, Overlay, Tooltip } from 'react-bootstrap';
import { useDispatchContext } from '../contexts/context';
import PropTypes from 'prop-types';


const Task = ({index, task}) => {
    const [taskDone, setTaskDone] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(task);
    const [showTooltip, setShowTooltip] = useState(false);
    const target = useRef(null);
    const dispatch = useDispatchContext();

    const handleEdit = () => {
        if (editText.length > 0 && task!== editText)
            dispatch({
                type: 'edit',
                index: index,
                value: editText
            });
        setShowTooltip(false);
        setEditMode(false);
    };

    const handleDelete = () => {
        dispatch({
            type: 'remove',
            value: task
        });
    };

    const handleEnterKey = event => {
        if(event.key.toUpperCase() === 'ENTER')
            handleEdit();
    };

    if (editMode) {
        return (
            <Row className='align-items-center justify-content-center'>
                <Col md={11} lg={11} xl={11} className='align-self-center text-center px-0'>
                    <InputGroup ref={target}>
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox value={taskDone} checked={taskDone} disabled={true} />
                        </InputGroup.Prepend>
                        <FormControl
                            id='task-input'
                            value={editText}
                            onChange={event => setEditText(event.target.value)}
                            onKeyDown={handleEnterKey}
                            onFocus={() => setShowTooltip(true)}
                            onBlur={() => setShowTooltip(false)}
                        />
                    </InputGroup>
                    <Overlay target={target.current} show={showTooltip} placement='top'>
                        {props => (
                            <Tooltip id="add-task-help" {...props} show={null}>
                                <strong>You can press Enter to update the task after editing</strong>
                            </Tooltip>
                        )}
                    </Overlay>
                </Col>
                <Col md={1} lg={1} xl={1} className='align-self-center text-right p-0'>
                    <Button variant='success font-weight-bold' className='btn-xs mr-1' onClick={handleEdit}>&#10004;</Button>
                    <Button variant='warning font-weight-bold' className='btn-xs ml-1' onClick={() => setEditMode(false)}>↩︎</Button>
                </Col>
            </Row>
        );
    } else {
        const TaskText = () => {
            if (taskDone) {
                return <span className='mx-1'><strike>{task}</strike></span>;
            } else {
                return <span className='mx-1'>{task}</span>;
            }
        };
        return (
            <Row className='align-items-center justify-content-center'>
                <Col md={11} lg={11} xl={11} className='align-self-center text-center px-0'>
                    <InputGroup className='align-items-center jutify-content-center'>
                        <InputGroup.Checkbox value={taskDone} checked={taskDone} onChange={() => setTaskDone(!taskDone)} />
                        <TaskText />
                    </InputGroup>
                </Col>
                <Col md={1} lg={1} xl={1} className='align-self-center text-right p-0'>
                    <Button variant='primary font-weight-bold' className='btn-xs mr-1' onClick={() => setEditMode(true)}>
                        &#9998;
                    </Button>

                    <Button variant='danger font-weight-bold' className='btn-xs ml-1' onClick={handleDelete}>
                        &times;
                    </Button>
                </Col>
            </Row>
        );
    }
};

Task.propTypes = {
    index: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired
};

export default Task;
