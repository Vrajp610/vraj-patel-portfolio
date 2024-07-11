import React, { useState } from "react";
import CONSTANTS from "../../utils/Constants";
import styles from "./ContactStyles.module.css";
import ContactForm from "../../components/Contact/ContactForm";
import ContactFormMessage from "../../components/Contact/ContactFormMessage";
import ContactData from "../../utils/Contact/ContactData";
import ContactDataMessage from "../../utils/Contact/ContactDataMessage";
import SubmitButton from "../../components/Contact/SubmitButton";

function Contact() {
  return (
    <section id={CONSTANTS.ID.CONTACT} className={styles.container}>
      <h1 className={CONSTANTS.CLASSNAME.SECTION_TITLE}>Contact</h1>
      <form action=''>
        {ContactData.map((contact, index) => (
          <ContactForm
            key={index}
            htmlForElement={contact.htmlForElement}
            elementName={contact.elementName}
            inputType={contact.inputType}
            inputName={contact.inputName}
            inputId={contact.inputId}
            placeholder={contact.placeholder}
          />
        ))}
        {ContactDataMessage.map((contact, index) => (
          <ContactFormMessage
            key={index}
            htmlForElement={contact.htmlForElement}
            elementName={contact.elementName}
            inputName={contact.inputName}
            inputId={contact.inputId}
            placeholder={contact.placeholder}
          />
        ))}
        <SubmitButton className='hover_btn' />
      </form>
    </section>
  );
}
export default Contact;
