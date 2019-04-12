import React from 'react'
import { Container, Col, Row, Button, Input } from 'reactstrap'


export default class EditItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: this.props.item
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputHandler(event) {
        event.preventDefault();
        const text = event.target.value;
        this.setState(() => ({inputText: text}));
    }

    submitHandler() {
        this.props.editItem(this.props.index, this.state.inputText);
        this.setState(() => ({inputText: ""}));
        this.props.modalToggle();
    }

    render() {
        return (
            <Container fluid={true} className="text-center">
                <Row className="my-2">
                    <Col md={12}>
                        <Input
                            type="text"
                            name="item"
                            id="item"
                            className="shadow-sm"
                            bsSize="lg"
                            onChange={this.inputHandler}
                            maxLength={64}
                            title="Max: 64 characters"
                            value={this.state.inputText}
                        />
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col md={{ size:6, offset: 3 }}>
                        <Button
                            color="success"
                            className="shadow-sm"
                            block
                            onClick={this.submitHandler}
                            disabled={!this.state.inputText || this.state.inputText===this.props.item}
                            title="Update TODO item"
                        >
                            Update
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}