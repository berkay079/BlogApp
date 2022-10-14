import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactCard.css";
import contact from "../../assets/img/contact.png";

function ContactCard() {
  return (
    <div className="ContactCardStyle">
      <div>
        <img className="ContactCardImgStyle" src={contact} alt="" />
      </div>
      <div className="ContactCardAddress">
        <h2>Adres</h2>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
      </div>
      <hr />
      <div className="ContactCardInfo">
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec
        </p>
      </div>
    </div>
  );
}

export default ContactCard;
