import CONSTANTS from "../../utils/Constants";

function ContactForm({
  htmlForElement,
  elementName,
  inputType,
  inputName,
  inputId,
  placeholder,
}) {
  return (
    <div className={CONSTANTS.CLASSNAME.FORM_GROUP}>
      <label htmlFor={htmlForElement} hidden>
        {elementName}
      </label>
      <input
        type={inputType}
        name={inputName}
        id={inputId}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
export default ContactForm;