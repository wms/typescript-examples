import * as React from 'react';

interface Props {
    initialCount: number;
    greeting: string;
}

interface State {
    name: string;
    count: number;
}

export class Counter extends React.Component<Props, State> {
    state: State = {
        count: this.props.initialCount,
        name: ''
    };

    render() {
        return (
            <div className="counter">
                <p>{this.props.greeting}, {this.state.name}</p>
                <input onChange={this.onNameChange} value={this.state.name} />
                <p>The current count is: {this.state.count}</p>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        )
    }

    onNameChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        this.setState({
            name: e.target.value
        })
    }

    onDecrement: React.MouseEventHandler<HTMLButtonElement> = e => {
        this.setState({
            count: this.state.count - 1
        });
    }

    onIncrement: React.MouseEventHandler<HTMLButtonElement> = e => {
        this.setState({
            count: this.state.count + 1
        });
    }
}