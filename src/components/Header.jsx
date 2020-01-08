'use strict';

import React, { useState, useRef } from 'react';
import { useDispatchContext } from '../contexts/context';
import { InputGroup, Col, Row, Button, FormControl, Overlay, Tooltip } from 'react-bootstrap';


const Header = () => {
    const dispatch = useDispatchContext();
    const [inputText, setInputText] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);
    const target = useRef(null);

    const addBtnHandler = event => {
        dispatch({type: 'insert', value: inputText});
        setInputText('');
        // event.target.blur();
        setShowTooltip(false);
    };

    const handleEnterKey = event => {
        if(event.key.toUpperCase() === 'ENTER')
            addBtnHandler(event);
    };

    return (
        <Row className='align-items-center justify-content-center'>
            <Col md={11} lg={11} xl={11} className='align-self-center text-center'>
                <InputGroup ref={target}>
                    <FormControl
                        id='task-input'
                        value={inputText}
                        onChange={event => setInputText(event.target.value)}
                        placeholder='What do you want to do today?'
                        onKeyDown={handleEnterKey}
                        onFocus={() => setShowTooltip(true)}
                        onBlur={() => setShowTooltip(false)}
                    />
                </InputGroup>
                <Overlay target={target.current} show={showTooltip} placement='top'>
                    {props => (
                        <Tooltip id="add-task-help" {...props} show={null}>
                            <strong>You can press Enter to add the task</strong>
                        </Tooltip>
                    )}
                </Overlay>
            </Col>
            <Col md={1} lg={1} xl={1} className='align-self-center'>
                <Button variant='success' className='font-weight-bold' disabled={inputText.length <= 0} onClick={addBtnHandler}>
                    &#43;
                </Button>
            </Col>
        </Row>
    );
};

export default Header;
