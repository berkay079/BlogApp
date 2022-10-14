import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import Navigation from "../../components/Navigation";
import contact from "../../assets/img/contact.png";
import ContactCard from "../../components/contactCard/ContactCard";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <div>
      <Navigation />
      <div className="ArticlesContentsStyle">
        <div className="ArticlesTextContentsStyle">
          <p>Anasayfa</p>
          <p>&nbsp;/&nbsp;</p>
          <p>İletişim</p>
        </div>
      </div>
      <div className="ContactInfoStyle">
        <div>
          <h2>
            İletişim Bilgilerimiz
            <hr />
          </h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec
            lacinia nisl lorem non nisl. Sed euismod, nisl vel ultricies
            lacinia, nisl nisl aliquet nisl, nec lacinia nisl lorem non nisl.
            Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec
            lacinia nisl lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed consectetur, nisl vel ultricies lacinia, nisl nisl aliquet
            nisl, nec lacinia nisl lorem non nisl. Sed euismod, nisl vel
            ultricies lacinia, nisl nisl aliquet nisl, nec lacinia nisl lorem
            non nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet
            nisl, nec lacinia nisl lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed consectetur, nisl vel ultricies lacinia, nisl
            nisl aliquet nisl, nec lacinia nisl lorem non nisl. Sed euismod,
            nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec lacinia nisl
            lorem non nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquet nisl, nec lacinia nisl
          </p>
        </div>
        <div>
          <img className="ContactImgStyle" src={contact} alt="" />
        </div>
      </div>
      <hr />
      <div className="ContactCardsStyle">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
      <hr />
      <div className="ContentBottom">
        <div className="ContactBottomStyle">
          <div className="ContactButton1Style">
            <button>
              <img className="ContactButtonImgStyle" src={contact} alt="" />
            </button>
            <p>İletişim Formu</p>
          </div>
          <div className="ContactButton1Style">
            <button>
              <img className="ContactButtonImgStyle" src={contact} alt="" />
            </button>
            <p>Proje Formu</p>
          </div>
          <div className="ContactButton1Style">
            <button>
              <img className="ContactButtonImgStyle" src={contact} alt="" />
            </button>
            <p>Başvuru Formu</p>
          </div>
        </div>
        <hr />
        <div className="ContactSendStyle">
          <div className="ContactUserSendStyle">
            <div className="ContactUserSendStyle1">
              <p>Adınız - Soyadınız *</p>
              <input className="ContactInputStyle" type="text" />
            </div>
            <div className="ContactUserSendStyle1">
              <p>E-posta *</p>
              <input className="ContactInputStyle" type="text" />
            </div>
          </div>
          <hr />
          <div className="ContactSendMessageStyle">
            <div>
              <p>Mesajınız</p>
              <input className="ContactInputStyle2" type="text" />
            </div>
          </div>
          <div>
            <button className="ContactButtonStyle">Gönder</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
