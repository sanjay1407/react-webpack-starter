import React from 'react';
import PropTypes from 'prop-types';

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        );
    }
}

ShoppingList.propTypes = {
    name : PropTypes.string.isRequired
};

export default ShoppingList;