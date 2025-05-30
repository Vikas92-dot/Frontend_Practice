import { Component } from "react";
import createConnection from "./Chat";

export default class ChatRoom extends Component{

    state={
        serverUrl:'https://localhost:1234'
    };


    //It will render after component is loaded into dom.
    componentDidMount(){
        this.setupConnection();
    }

    //it will update if props/state change
    componentDidUpdate(prevProps, prevState) {
    if ( this.props.roomId !== prevProps.roomId || this.state.serverUrl !== prevState.serverUrl) {
      this.destroyConnection();
      this.setupConnection();
    }
    }

    //this will run when component remove from DOM
    componentWillUnmount() {
        this.destroyConnection();
    }

    setupConnection(){
        this.connection = createConnection(
            this.state.serverUrl,
            this.props.roomId
        )
        this.connection.connect();
    }
    destroyConnection(){
        this.connection.disconnect();
        this.connection = null;
    }
    render(){
        return(
            <>
            <label>
                Server URL:{' '}
                <input value={this.state.serverUrl} onChange={e => {
              this.setState({
                serverUrl: e.target.value
              });
            }} />
            </label>
            <h1>Welcome to the {this.props.roomId} room!</h1>
            </>
        )
    }
}