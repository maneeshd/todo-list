import React from 'react'
import { Col, Row, Button, Input } from 'reactstrap'


export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputHandler(event) {
        event.preventDefault();
        const text = event.target.value.trim();
        this.setState(() => ({inputText: text}));
    }

    submitHandler() {
        this.props.addItem(this.state.inputText);
        this.setState(() => ({inputText: ""}));
    }

    render() {
        return (
            <Row className="my-2">
                <Col md={10}>
                    <Input
                        type="text"
                        name="item"
                        id="item"
                        placeholder="What do you want to do today?"
                        className="shadow-sm"
                        bsSize="lg"
                        onChange={this.inputHandler}
                        maxLength={64}
                        title="Max: 64 characters"
                        value={this.state.inputText}
                    />
                </Col>
                <Col md={2}>
                    <Button
                        color="success"
                        className="shadow-sm"
                        size="lg"
                        onClick={this.submitHandler}
                        disabled={!this.state.inputText}
                        title="Add TODO item"
                    >
                        Add
                    </Button>
                </Col>
            </Row>
        );
    }
}