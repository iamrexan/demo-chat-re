import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { useSelector } from "react-redux";

import { TitleInput } from "./shared";

const ContactList = () => {
  const contacts = useSelector((state) => state.contact.value);

  return (
    <Col xs={3} className="left-wrapper">
      <div className="d-flex">
        <div className="search-input">
          <input name="search" placeholder="Search People" />
          <SearchRoundedIcon />
        </div>
        <div className="add-contact">
          <button>
            <Link to="contact/add">
              <AddRoundedIcon />
            </Link>
          </button>
        </div>
      </div>
      <TitleInput />
      <div>
        {Object.keys(contacts).map((element, i) => {
          return (
            <Link to={`${element}`} id={element}>
              <div className="contact-list d-flex mt-3 justify-content-between align-items-center">
                <img src={"/images/person.png"} alt={`contact ${element}`} />
                <div className="contact-name-list">
                  <p>{contacts[element].firstName}</p>
                  <p>
                    {contacts[element].phoneNumbers[0] !== "undefined" &&
                      contacts[element].phoneNumbers[0]}
                  </p>
                  <p>{contacts[element].status}</p>
                </div>
                <PhoneRoundedIcon />
                <MailRoundedIcon />
              </div>
            </Link>
          );
        })}
      </div>
    </Col>
  );
};

export default ContactList;
