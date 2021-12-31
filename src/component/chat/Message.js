import { useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useSelector, useDispatch } from "react-redux";

import { ChatHeader } from "../shared";
import { addMessage } from "./ChatSlice";

const Message = (props) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  let contactInfo = useSelector(
    (state) => state.contact.value[props.contactId]
  );
  const messages = useSelector((state) => {
    return state.chat.value[props.contactId];
  });
  console.log(messages);
  return (
    <Col xs={9} className="right-chat-wrapper">
      <ChatHeader>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="/chat">
              <ChevronLeftIcon style={{ fontSize: "50px" }} />
            </Link>
            <p className="m-0">{`${contactInfo.firstName} ${contactInfo.lastName}`}</p>
          </div>
          <Link to={`contact/edit/${props.contactId}`}>
            <button className="btn btn-secondary mx-5">Edit</button>
          </Link>
        </div>
      </ChatHeader>
      <div className="h-100 position-relative">
        <div className="message-sec">
          {typeof messages !== "undefined"
            ? Object.keys(messages).map((e, i) => {
                return (
                  <div
                    class={`message-slack d-flex align-items-center ${
                      messages[e].from == "888" ? "flex-row-reverse" : ""
                    }`}
                    id={i}
                  >
                    <img src={"/images/person.png"} alt={`person`} />
                    <p className="text-left">{messages[e].msg}</p>
                  </div>
                );
              })
            : "No messages yet"}
        </div>
        <div className="message-form-group">
          <input
            type="text"
            className="message-text"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={(e) => {
              if (message !== null && message !== "") {
                dispatch(
                  addMessage({
                    from: 888,
                    to: props.contactId,
                    msg: message,
                  })
                );
                e.target.parentElement.querySelector("input").value = "";
                setMessage("");
              }
            }}
          >
            Send
          </button>
        </div>
      </div>
    </Col>
  );
};

export default Message;
