import React, { useState } from 'react';
import { useStateValue } from './state';
import { Input, Row, Col, Button } from 'reactstrap';


const Header = props => {
    const [inputText, setInputText] = useState("");
    const [{ items }, dispatch] = useStateValue();

    const submitHandler = () => {
        dispatch({
            type: 'addItem',
            item: inputText.trim()
        });
        setInputText("");
    };

    return (
        <React.Fragment>
            <h1 className="display-4 mb-4">TODO</h1>
            <hr />
            <Row className="my-2">
                <Col md={10}>
                    <Input
                        type="text"
                        name="item"
                        id="item"
                        placeholder="What do you want to do today?"
                        className="shadow-sm"
                        bsSize="lg"
                        onChange={e => setInputText(e.target.value)}
                        maxLength={64}
                        title="Max: 64 characters"
                        value={inputText}
                    />
                </Col>
                <Col md={2}>
                    <Button
                        color="success"
                        className="shadow-sm"
                        size="lg"
                        onClick={submitHandler}
                        disabled={!inputText.trim()}
                        title="Add TODO item"
                    >
                    Add
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Header;