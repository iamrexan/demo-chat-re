import { useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useDispatch, useSelector } from "react-redux";

import { ChatHeader, ContactForm } from "../shared";
import { addContact } from "./contactSlice";

const Contact = () => {
  const contacts = useSelector((state) => state.contact.value);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumbers: [],
    profilePath: "",
    status: "alive",
  });

  const validateForm = () => {
    if (
      data.firstName.length > 0 &&
      data.lastName.length > 0 &&
      data.phoneNumbers[0].length == 10 &&
      /\S+@\S+\.\S+/.test(data.email)
    ) {
      let duplicate = Object.keys(contacts).filter((e) => {
        if (
          contacts[e].phoneNumbers[0] == data.phoneNumbers[0] ||
          contacts[e].email == data.email
        ) {
          return e;
        }
      });
      if (duplicate.length > 0) {
        return { msg: "Duplicate Entry", valid: false };
      }
      return { valid: true };
    }
    return { msg: "Should form contain valid inputs", valid: false };
  };

  const dispatch = useDispatch();

  const updateData = (e, field) => {
    setData((prevState) => {
      return {
        ...prevState,
        [field]: field == "phoneNumbers" ? [e.target.value] : e.target.value,
      };
    });
  };

  const submitForm = () => {
    let check = validateForm(contacts);
    if (check.valid) {
      dispatch(addContact(data));
    } else {
      alert(check.msg);
    }
  };

  return (
    <Col xs={9} className="right-chat-wrapper">
      <ChatHeader>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="/chat">
              <ChevronLeftIcon style={{ fontSize: "50px" }} />
            </Link>
            <p className="m-0">{`Add New Contact`}</p>
          </div>
        </div>
      </ChatHeader>
      <ContactForm
        data={data}
        updateData={updateData}
        submitForm={submitForm}
      />
    </Col>
  );
};

export default Contact;
