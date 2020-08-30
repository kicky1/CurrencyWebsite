
import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Avatar, Input} from 'antd';
import 'antd/dist/antd.css';


const { Search } = Input;
const { Meta } = Card;

const client = new W3CWebSocket('ws://127.0.0.1:8000');

class Chat extends Component {

  state ={
    userName: '',
    isLoggedIn: false,
    messages: []
  }

  onButtonClicked = (value) => {
    client.send(JSON.stringify({
      type: "message",
      msg: value,
      user: this.state.userName
    }));
    this.setState({ searchVal: '' })
  }
  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('got reply! ', dataFromServer);
      if (dataFromServer.type === "message") {
        this.setState((state) =>
          ({
            messages: [...state.messages,
            {
              msg: dataFromServer.msg,
              user: dataFromServer.user
            }]
          })
        );
      }
    };
  }
  render() {
    return (
      <div className="container my-5">
        {this.state.isLoggedIn ?
        <div>
          <div className="title">
          <h3 className="section-heading text-uppercase">Użytkownik czatu: {this.state.userName}</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50 }} id="messages">
            {this.state.messages.map(message => 
              <Card key={message.msg} style={{ width: 300, margin: '16px 4px 0 4px', alignSelf: this.state.userName === message.user ? 'flex-end' : 'flex-start' }} loading={false}>
                <Meta
                  avatar={
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{message.user[0].toUpperCase()}</Avatar>
                  }
                  title={message.user}
                  description={message.msg}
                />
              </Card> 
            )}
          </div>
          <div className="bottom">
            <Search
              placeholder="Wprowadź wiadomość i wyślij"
              enterButton="Wyślij"
              value={this.state.searchVal}
              size="large"
              onChange={(e) => this.setState({ searchVal: e.target.value })}
              onSearch={value => this.onButtonClicked(value)}
            />
          </div> 
        </div>
        :
        <div style={{ padding: '200px 40px' }}>
          <Search
            placeholder="Podaj nazwę użytkownika"
            enterButton="Login"
            size="large"
            onSearch={value => this.setState({ isLoggedIn: true, userName: value })}
          />
        </div>
      }
      </div>
    )
  }
}

export default Chat