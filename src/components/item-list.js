import React from 'react'
import Item from './item'
import { ListGroup } from 'reactstrap'
import { useStateValue } from './state';


const ItemList = props => {
    const [{ items }, dispatch] = useStateValue();
    let jsx = <p className="lead">Feels lonely out here...</p>;
    console.log(items);
    if(items.length) {
        jsx = (
            <ListGroup className="shadow-sm text-justify">
                {
                    items.map((item, index) => (
                        <Item
                            {...props}
                            item={item}
                            key={index + 1}
                            index={index}
                        />
                    ))
                }
            </ListGroup>
        );
    }

    return jsx
};


export default ItemList;