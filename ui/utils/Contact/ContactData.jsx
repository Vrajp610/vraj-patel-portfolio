import CONSTANTS from "../Constants.jsx";

const ContactData = [
  {
    htmlForElement: "name",
    elementName: CONSTANTS.CONTACT_FORM_FIELDS.NAME,
    inputType: CONSTANTS.TYPE.TEXT,
    inputName: "name",
    inputId: CONSTANTS.ID.NAME,
    placeholder: CONSTANTS.PLACEHOLDER.NAME,
  },
  {
    htmlForElement: "email",
    elementName: CONSTANTS.CONTACT_FORM_FIELDS.EMAIL,
    inputType: CONSTANTS.TYPE.TEXT,
    inputName: "email",
    inputId: CONSTANTS.ID.EMAIL,
    placeholder: CONSTANTS.PLACEHOLDER.EMAIL,
  },
];
export default ContactData;
