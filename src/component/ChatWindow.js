import React from "react";
import { Col } from "react-bootstrap";

import ChatCartoon from "../assets/images/chat-cartoon.png";
import { ChatHeader } from "./shared";

const ChatWindow = () => {
  return (
    <Col xs={9} className="right-chat-wrapper">
      <ChatHeader>
        <h4>Chat Window</h4>
      </ChatHeader>
      <section className="chat-body">
        <div>
          <img className="sample-cc-img" src={ChatCartoon} alt="chat cartoon" />
          {/* <p>Start your discussion</p> */}
        </div>
      </section>
    </Col>
  );
};

export default ChatWindow;
