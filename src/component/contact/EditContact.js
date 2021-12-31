import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useDispatch, useSelector } from "react-redux";

import { ChatHeader, ContactForm } from "../shared";
import { updateContact, deleteContact } from "./contactSlice";

const EditContact = (props) => {
  const navigate = useNavigate();
  let contacts = useSelector((state) => state.contact.value);
  let contactInfo = useSelector(
    (state) => state.contact.value[props.contactId]
  );
  const [data, setData] = useState({
    firstName: contactInfo.firstName,
    lastName: contactInfo.lastName,
    email: contactInfo.email,
    phoneNumbers: contactInfo.phoneNumbers,
    profilePath: "",
    status: "alive",
  });
  console.log(contactInfo, data);

  useEffect(() => setData(contactInfo), [contactInfo]);

  const validateForm = (contacts) => {
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
      if (duplicate.length > 0 && !duplicate[0] == props.contactId) {
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
      dispatch(updateContact({ ...data, id: props.contactId }));
      navigate(-1, { replace: true });
    } else {
      alert(check.msg);
    }
  };

  const deleteCon = () => {
    dispatch(deleteContact(props.contactId));
    navigate("../chat", { replace: true });
  };

  return (
    <Col xs={9} className="right-chat-wrapper">
      <ChatHeader>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="/chat">
              <ChevronLeftIcon style={{ fontSize: "50px" }} />
            </Link>
            <p className="m-0">{`${data.firstName} ${data.lastName}`}</p>
          </div>
          <button className="btn btn-secondary mx-5" onClick={deleteCon}>
            Delete
          </button>
        </div>
      </ChatHeader>
      <ContactForm
        data={data}
        updateData={updateData}
        deleteContact={deleteCon}
        submitForm={submitForm}
      />
    </Col>
  );
};

export default EditContact;
