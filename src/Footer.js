import React, { Component } from "react";
import CookieConsent from "react-cookie-consent";

class FooterPage extends Component {
  render() {
    return (
      <CookieConsent>
        Tu correo institucional y contraseña no son guardados, no te preocupes.
      </CookieConsent>
    );}
}

export default FooterPage;

