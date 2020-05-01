import React, { Component } from 'react';
import { connect } from 'react-redux'
// import * as actionTypes from '../../store/actions/actions';

import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveToCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFiveFromCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(res => {
                        return (<li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        storedResults: state.result.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddFiveToCounter: () => dispatch(actionCreators.add(5)),
        onSubtractFiveFromCounter: () => dispatch(actionCreators.subtract(5)),
        onStoreResult: (value) => dispatch(actionCreators.storeResult(value)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);