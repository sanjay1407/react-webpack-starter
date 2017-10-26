import React from 'react';
import './app.scss';
import pandaImage from './panda.jpg';
import ShoppingList from './shopping-list';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ShoppingList name='Sanjay' />
                <img src={pandaImage} />
            </div>
        );
    }
}
