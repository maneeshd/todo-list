import React from 'react'
import {
    ListGroupItem,
    Row,
    Col,
    Button,
    Modal,
    ModalBody,
    ModalHeader } from 'reactstrap';
import EditItem from './edit-item'


export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            backdrop: true
        };

        this.toggle = this.toggle.bind(this);
        this.changeBackdrop = this.changeBackdrop.bind(this);
    }

    toggle() {
        this.setState(() => ({
            modal: !this.state.modal
        }));
    }

    changeBackdrop(event) {
        let value = event.target.value;
        if (value !== 'static') {
            value = JSON.parse(value);
        }
        this.setState(() => ({ backdrop: value }));
    }

    render() {
        return (
            <React.Fragment>
                <ListGroupItem>
                    <Row>
                        <Col md={10}>
                            <p className="lead text-wrap">{this.props.item}</p>
                        </Col>
                        <Col md={2}>
                            <Button
                                close
                                color="danger"
                                id="delete-item"
                                onClick={() => {
                                    this.props.deleteItem(this.props.item)
                                }}
                                title="Delete TODO Item"
                                className="text-danger ml-1"
                            />
                            <Button
                                close
                                color="warning"
                                id="edit-item"
                                className="text-warning mr-1"
                                title="Edit TODO Item"
                                onClick={this.toggle}
                            >
                                &#9998;
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop} size="lg">
                    <ModalHeader toggle={this.toggle}>Edit TODO Item</ModalHeader>
                    <ModalBody>
                        <EditItem
                            item={this.props.item}
                            index={this.props.index}
                            editItem={this.props.editItem}
                            modalToggle={this.toggle}
                        />
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}