import { useState } from "react";
import inputs from "../Constans/inputs";
import { v4 } from "uuid";
import ContactList from "./ContactList";

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const deletHandeler = (id)=>{
    const newContacts = contacts.filter((contact)=> contact.id !== id);
    setContacts(newContacts);
  }

  const changeHandeler = (event) => {
    setContact((contact) => ({
      ...contact,
      [event.target.name]: event.target.value,
    }));
  };

  const addHandeler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("pleas enter valid data");
      return;
    }
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandeler}
          />
        ))}
        <button onClick={addHandeler}>Add Contact</button>
      </div>
      <div>{alert ? <p>{alert}</p> : null}</div>
      <ContactList contacts={contacts} deletHandeler={deletHandeler} />
    </div>
  );
}

export default Contacts;
