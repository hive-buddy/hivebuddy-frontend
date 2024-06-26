import React from 'react';
import { Client } from '@stomp/stompjs';

const SOCKET_URL = 'ws://localhost:8080/ws-message';

class Overview extends React.Component {
    constructor() {
      super();
      this.state = {
        //messages: 'You server message here.',
        values: [0, 0, 0, 0, 0],
      };
    };
  
    componentDidMount() {
      let currentComponent = this;
      let onConnected = () => {
        console.log("Connected!!")
        client.subscribe('/overview/1', function (msg) {
          if (msg.body) {
            var jsonBody = JSON.parse(msg.body);
            if (jsonBody.value) {
              currentComponent.setState({ values: jsonBody.value })
            }
          }
        });
      }
  
      let onDisconnected = () => {
        console.log("Disconnected!!")
      }
  
      const client = new Client({
        brokerURL: SOCKET_URL,
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: onConnected,
        onDisconnect: onDisconnected
      });
  
      client.activate();
    };
  
    render() {
      return (
        <div>
          {/*<div>{this.state.messages}</div>*/}
          {this.state.values.map((value, index) => (
              <span key={index}>{value} </span>
          ))}
        </div>
      );
    }
  
  }
  
  export default Overview;