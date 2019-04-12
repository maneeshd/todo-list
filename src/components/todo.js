import React from 'react';
import Header from './header'
import ItemList from './item-list'
import Footer from './footer'


export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(item) {
        if(item) {
            this.setState((prevState) => prevState.items.push(item));
            // this.setState(() => ({
            //     items: this.state.items.concat([item])
            // }));
        }
    }

    editItem(index, item) {
        if(item) {
            const newItems = this.state.items
            newItems[index] = item
            this.setState(() => ({
                items: newItems
            }));
        }
    }

    deleteItem(item) {
        if(item) {
            this.setState(() => ({
                items: this.state.items.filter((ele) => ele!==item)
            }));
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />

                <hr />

                <ItemList
                    items={this.state.items}
                    editItem={this.editItem}
                    deleteItem={this.deleteItem}
                />

                <hr />

                <Footer
                    addItem={this.addItem}
                    deleteAll={this.deleteAll}
                />
            </React.Fragment>
        );
    }
}