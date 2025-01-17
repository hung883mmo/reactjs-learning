import React, { Component } from 'react';

class MyComponent extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    
    constructor() {
        super();

        this.state = {
            message: 'Xin chào! Đây là component đầu tiên của tôi.'
        };
    }

    render() {
        return (
        <div>
            <h1>{this.state.message}</h1>
            <p>Số đếm: {this.state.count}</p>
            <button onClick={this.increment}>Tăng</button>
        </div>
        );
    }
}