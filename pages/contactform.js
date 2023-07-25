import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles["form-container"]}>
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
