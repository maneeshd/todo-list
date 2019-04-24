import React, { useState } from 'react'
import {
    Container,
    Input,
    ListGroupItem,
    Row,
    Col,
    Button,
    Modal,
    ModalBody,
    ModalHeader } from 'reactstrap';
import { useStateValue } from './state';


const Item = props => {
    const [modal, toggleModal] = useState(false);
    const [inputText, setInputText] = useState(props.item);
    const [{ items }, dispatch] = useStateValue();

    return (
        <React.Fragment>
            <ListGroupItem>
                <Row>
                    <Col md={10}>
                        <p className="lead text-wrap">{props.item}</p>
                    </Col>
                    <Col md={2}>
                        <Button
                            close
                            color="danger"
                            id="delete-item"
                            onClick={() => dispatch({
                                type: 'deleteItem',
                                item: props.item,
                            })}
                            title="Delete TODO Item"
                            className="text-danger ml-1"
                        />
                        <Button
                            close
                            color="warning"
                            id="edit-item"
                            className="text-warning mr-1"
                            title="Edit TODO Item"
                            onClick={() => toggleModal(!modal)}
                        >
                            &#9998;
                        </Button>
                    </Col>
                </Row>
            </ListGroupItem>
            <Modal isOpen={modal} toggle={() => toggleModal(!modal)} className={props.className} backdrop="static" size="lg">
                <ModalHeader toggle={() => toggleModal(!modal)}>Edit TODO Item</ModalHeader>
                <ModalBody>
                    <Container fluid={true} className="text-center">
                        <Row className="my-2">
                            <Col md={12}>
                                <Input
                                    type="text"
                                    name="item"
                                    id="item"
                                    className="shadow-sm"
                                    bsSize="lg"
                                    onChange={e => setInputText(e.target.value)}
                                    maxLength={64}
                                    title="Max: 64 characters"
                                    value={inputText}
                                />
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col md={{ size:6, offset: 3 }}>
                                <Button
                                    color="success"
                                    className="shadow-sm"
                                    block
                                    onClick={() => {
                                        dispatch({
                                            type: 'editItem',
                                            index: props.index,
                                            item: inputText.trim()
                                        });
                                        toggleModal(!modal);
                                    }}
                                    disabled={!inputText.trim() || inputText.trim() === props.item}
                                    title="Update TODO item"
                                >
                            Update
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
};

export default Item;
