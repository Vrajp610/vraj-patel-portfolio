import CONSTANTS from "../../utils/Constants";

function ContactFormMessage({
  htmlForElement,
  elementName,
  inputName,
  inputId,
  placeholder,
}) {
  return (
    <div className={CONSTANTS.CLASSNAME.FORM_GROUP}>
      <label htmlFor={htmlForElement} hidden>
        {elementName}
      </label>
      <textarea
        name={inputName}
        id={inputId}
        placeholder={placeholder}
        required></textarea>
    </div>
  );
}
export default ContactFormMessage;
