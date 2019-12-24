import React, {Component} from 'react';
import './App.css';
import HelloWorld from "./components/HelloWorld/HelloWorld";
import {connect} from "react-redux";
import {store} from './index'
import {loadData, loadingData} from './redux/actions';

class App extends Component {

    componentDidMount() {
        store.dispatch(loadingData());

        fetch("http://localhost:8080/hello-world")
            // .then(data => data.json()) --> uncomment if response in json format
            .then(data => {
                store.dispatch(loadData(data));
            });
    }

    render() {
        if (this.props.status === "empty") return null;
        if (this.props.status === "loading") {
            return (
                <h1>Loading...</h1>
            );
        }

        const data = this.props.data;


        return (
            <div className="App">
                <HelloWorld data={data}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.loadReducer.data,
        status: state.loadReducer.status
    }
}

export default connect(mapStateToProps)(App);
