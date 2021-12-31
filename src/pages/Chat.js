import React from "react";
import { Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import {
  ContactList,
  ChatWindow,
  Contact,
  EditContact,
  Message,
} from "../component";

const Chat = () => {
  const location = useLocation();
  const { contactId } = useParams();

  const getChatWindow = () => {
    if (
      !location.pathname.includes("contact") &&
      !location.pathname.includes(`chat/${contactId}`)
    ) {
      return <ChatWindow />;
    } else if (location.pathname.includes("contact/edit")) {
      return <EditContact contactId={contactId} />;
    } else if (location.pathname.includes("contact/add")) {
      return <Contact />;
    } else if (location.pathname.includes(`chat/${contactId}`)) {
      return <Message contactId={contactId} />;
    }
  };

  return (
    <div className="main-wrapper">
      <Row className="relative">
        {/* <Route path={`/contact`} component={Chat} name="chat contact" /> */}
        <ContactList />
        {getChatWindow()}
      </Row>
    </div>
  );
};

export default Chat;
