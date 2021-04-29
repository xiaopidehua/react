import React from 'react'

class StateClass extends React.Component {
    state: { count: number; };
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return <div onClick={() => {
            this.setState({count: this.state.count + 1})
        }}>{this.state.count}</div>
    }
}

export default StateClass