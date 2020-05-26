import React from 'react';

class ShopPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            welcomeMessage: 'Welcome to the Shop!'
        }
    }

    render() {
        return (
            <div>
                <span>{this.state.welcomeMessage}</span>
            </div>
        )
    }

}

export default ShopPage;