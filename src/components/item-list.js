import React from 'react'
import Item from './item'
import { ListGroup } from 'reactstrap'


const ItemList = (props) => {
    let jsx = <p className="lead">Feels lonely out here...</p>;

    if(props.items.length) {
        jsx = (
            <ListGroup className="shadow-sm text-justify">
                {
                    props.items.map((item, index) => (
                        <Item
                            item={item}
                            key={index + 1}
                            index={index}
                            editItem={props.editItem}
                            deleteItem={props.deleteItem}
                        />
                    ))
                }
            </ListGroup>
        );
    }

    return jsx
};


export default ItemList;