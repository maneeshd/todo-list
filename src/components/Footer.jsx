'use strict';

import React from 'react';
import { useDispatchContext, useStateContext } from '../contexts/context';
import { Container, Button } from 'react-bootstrap';

const Footer = () => {
    const { tasks } = useStateContext();
    const dispatch = useDispatchContext();

    const handleClearAll = () => {
        dispatch({
            type: 'clear',
            value: null
        });
    };

    if (tasks.length > 0) {
        return (
            <Container fluid={true} className='text-center'>
                <Button variant='danger' size="sm" onClick={handleClearAll}>Clear All</Button>
            </Container>
        );
    } else {
        return <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>;
    }
};

export default Footer;
