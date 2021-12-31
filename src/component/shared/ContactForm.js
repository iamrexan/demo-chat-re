import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { ChatHeader } from "../shared";

const ContactForm = (props) => {
  return (
    <section className="chat-body">
      <div>
        <div>Image</div>
        <Row className="d-flex w-full justify-content-between mt-5">
          <Col>
            <input
              name="first_name"
              type="text"
              placeholder="First name"
              value={props.data.firstName}
              onChange={(e) => props.updateData(e, "firstName")}
              className="input-box-custom"
            />
          </Col>
          <Col>
            <input
              name="last_name"
              type="text"
              placeholder="last name"
              value={props.data.lastName}
              onChange={(e) => props.updateData(e, "lastName")}
              className="input-box-custom"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <input
              name="phone_number"
              type="number"
              placeholder="Enter Phone number"
              value={props.data.phoneNumbers[0]}
              onChange={(e) => props.updateData(e, "phoneNumbers")}
              className="input-box-custom w-100"
            />
          </Col>
        </Row>
        <div className="mt-5">
          <input
            name="email"
            type="email"
            value={props.data.email}
            placeholder="Enter Email"
            onChange={(e) => props.updateData(e, "email")}
            className="input-box-custom w-100"
          />
        </div>
        <div className="mt-5">
          <button className="btn btn-primary" onClick={props.submitForm}>
            Save
          </button>
          <button className="btn btn-secondary mx-4">Discard</button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
