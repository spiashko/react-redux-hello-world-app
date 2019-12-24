import React, {Component} from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    render() {
        const data = this.props.data;

        return (
            <div className="HelloWorld">
                <p>data populated to HelloWorld Component:</p>
                <p>{data}</p>
            </div>
        );
    }
}

export default HelloWorld;

