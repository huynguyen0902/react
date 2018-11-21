import React, {Component} from 'react';
class Time extends Component{
    constructor(props){
        console.log("constructor")
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount(){
        console.log("componentDidMount")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillMount(){
        console.log("componenWillMount")
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render(){
        console.log("aaaaaaaaaaa")
        return(
            <div>{this.state.date.toLocaleTimeString()}</div>
        );
    }
}
export default Time;